<?php

namespace App\Services;


use GuzzleHttp\Client;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use ZipArchive;

class AltrpUpdateService
{
  const UPDATE_DOMAIN = 'https://up.altrp.com/';
//  const UPDATE_DOMAIN = 'http://altrp-servise.nz/';
  const PRODUCT_NAME = 'altrp';
  private $client;

  public function __construct()
  {
    $this->client = new Client();
  }


  /**
   * @return string
   * @throws NotFoundHttpException
   */
  public function get_version()
  {
    $res = $this->client->post( self::UPDATE_DOMAIN . 'version/' . self::PRODUCT_NAME )->getBody()->getContents();
    $res = json_decode( $res, true );
    if ( ! isset( $res['product_version'] ) ) {
      throw new NotFoundHttpException( 'Не возможно прочитать версию с сервиса обновления Альтерпи' );
    }
    return $res['product_version'];
  }

  /**
   * @return string
   * @throws \HttpException
   * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
   */
  public function update()
  {
    if( env( 'APP_ENV', 'local' ) === 'local' ){
      return true;
    }
    set_time_limit( 0 );
    $version = $this->get_version();

    $file = $this->client->get( self::UPDATE_DOMAIN . 'download/' . self::PRODUCT_NAME . '/' . $version )->getBody()->getContents();

    if( ! $this->save_archive( $file ) ){
      throw new \HttpException( 'Не удалось сохранить архив' );
    }
    if( ! $this->update_files() ){
      throw new \HttpException( 'Не удалось обновить файлы' );
    }
    if( ! $this->delete_archive() ){
      throw new \HttpException( 'Не удалось удалить архив' );
    }

    // Lunch the installation if the /.env file doesn't exists
    if ( ! File::exists( base_path( '.env' ) ) ) {
      return redirect( '/install' );
    }

    // Get eventual new version value & the current (installed) version value
    $lastVersion = getLatestVersion();
    $currentVersion = getCurrentVersion();

    // All is Up to Date
    if ( version_compare( $lastVersion, $currentVersion, '<=' ) ) {
      abort( 401 );
    }

    // Clear all the cache
    $this->clearCache();

    // Upgrade the Database
    $res = $this->upgradeDatabase();
    if ( $res === false ) {
      dd( 'ERROR' );
    }

    // Update the current version to last version
    $this->setCurrentVersion( $lastVersion );

    // Clear all the cache
    $this->clearCache();

    return true;
  }

  /**
   * @param string $file_content
   * @return bool
   */
  private function save_archive( $file_content )
  {
    return Storage::disk( 'local' )->put( self::PRODUCT_NAME . '.zip', $file_content );
  }

  /**
   * Upgrade the Database & Apply actions
   *
   * @return bool
   */
  private function upgradeDatabase()
  {
    Artisan::call( 'config:clear' );
    Artisan::call( 'migrate', [ '--force' => true ] );
    return true;
  }

  /**
   * Update the current version to last version
   *
   * @param $last
   */
  private function setCurrentVersion( $last )
  {
    if ( ! DotenvEditor::keyExists( 'APP_VERSION' ) ) {
      DotenvEditor::addEmpty();
    }
    DotenvEditor::setKey( 'APP_VERSION', $last );
    DotenvEditor::save();
  }

  /**
   * @return bool
   */
  private function update_files(){
    Artisan::call( 'config:cache');
    $file_path = storage_path( 'app/' . self::PRODUCT_NAME . '.zip' );

    $archive = new ZipArchive();

    if ( ! $archive->open( $file_path ) ) {
      return false;
    }

    return $archive->extractTo( base_path() );
  }

  /**
   * @return bool
   */
  private function delete_archive()
  {
    return Storage::disk( 'local' )->delete( self::PRODUCT_NAME . '.zip' );
  }

  /**
   * Clear all the cache
   */
  private function clearCache()
  {
    $this->removeRobotsTxtFile();
    $exitCode = Artisan::call( 'cache:clear' );
    sleep( 2 );
    $exitCode = Artisan::call( 'view:clear' );
    sleep( 1 );
    File::delete( File::glob( storage_path( 'logs' ) . DIRECTORY_SEPARATOR . 'laravel*.log' ) );
  }

  /**
   * Remove the robots.txt file (It will be re-generated automatically)
   */
  private function removeRobotsTxtFile()
  {
    $robotsFile = public_path( 'robots.txt' );
    if ( File::exists( $robotsFile ) ) {
      File::delete( $robotsFile );
    }
  }
}