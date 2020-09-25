<?php


namespace App;


use App\Altrp\Source;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class PageDatasource extends Model
{
    protected $table = 'page_data_sources';

    protected $fillable = [
        'page_id',
        'page_guid',
        'source_id',
        'alias',
        'priority',
        'parameters'
    ];

  /**
   * Импортируем связи страниц и источников данных
   * @param array $page_data_sources
   */
  public static function import( $page_data_sources = [] )
  {

    foreach ( $page_data_sources as $page_data_source ) {
      $source = Source::where( [
        'url' => data_get( $page_data_source,'source_url' ),
        'type' => data_get( $page_data_source, 'source_type') ,
      ] );
      $page = Page::where( 'guid', data_get( $page_data_source, 'page_guid' ) );
      if( ! ( $page && $source ) ){
        continue;
      }
      $new_page_data_source = new self( $page_data_source );
      $new_page_data_source->page_id = $page->id;
      $new_page_data_source->source_id = $source->id;
      try {
        $new_page_data_source->save();
      } catch (\Exception $e){
        Log::error( $e->getMessage(), [$e->getFile()] ); //
        continue;
      }
    }

  }

  /**
   * Связь со страницей
   * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
   */
    public function page()
    {
      return $this->belongsTo( Page::class, 'page_guid', 'guid' );
    }
  /**
   * Связь со страницей через ид
   * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
   */
    public function page_trough_id()
    {
      return $this->belongsTo( Page::class, 'page_id'  );
    }

  /**
   * Ссылка на ресурс
   * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
   */
    public function source()
    {
        return $this->belongsTo( Source::class );
    }
}
