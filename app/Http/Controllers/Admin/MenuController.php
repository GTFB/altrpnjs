<?php

namespace App\Http\Controllers\Admin;

use App\Altrp\Menu;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MenuController extends Controller
{
  private static $file_types;

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
   */
  public function index( Request $request )
  {
    //
    if( $request->get( 's' ) ){
      $menus = Menu::where( 'name', 'like', '%' . $request->get( 's' ) . '%' )->get();
      $menus = $menus->sortByDesc( 'id' )->values()->toArray();
      return response()->json( $menus, 200, [], JSON_UNESCAPED_UNICODE);
    }
    return response()->json( Menu::all()->sortByDesc( 'id' )->values()->toArray(), 200, [], JSON_UNESCAPED_UNICODE);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
   */
  public function store( Request $request )
  {
    //
    $menu = new Menu( $request->all() );
    $menu->guid = Str::uuid();
    if( ! $menu->save() ){
      return response()->json( ['success' => false, ], 500, [], JSON_UNESCAPED_UNICODE);
    }
    return response()->json( ['success' => true, 'data' => $menu->toArray()], 200, [], JSON_UNESCAPED_UNICODE);

  }

  /**
   * Display the specified resource.
   *
   * @param $id
   * @param Menu $menu
   * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
   */
  public function show( $id )
  {
    //
    $menu = Menu::find( $id );
    return response()->json( $menu->toArray(), 200, [], JSON_UNESCAPED_UNICODE);

  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int $id
   * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
   */
  public function edit( $id, Request $request )
  {
    //
    $menu = Menu::find( $id );

    if( ! $menu ){
      return response()->json( ['success' => false,'message'=>'Menu Not Found'], 404, [], JSON_UNESCAPED_UNICODE);
    }
    $menu->fill( $request->all() );
    $menu->save();
    return response()->json( ['success' => true,], 200, [], JSON_UNESCAPED_UNICODE);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  int $id
   * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
   */
  public function update( Request $request, $id )
  {
    //
    $menu = Menu::find( $id );

    if( ! $menu ){
      return response()->json( ['success' => false,'message'=>'Menu Not Found'], 404, [], JSON_UNESCAPED_UNICODE);
    }
    $menu->fill( $request->all() );
    $menu->save();
    return response()->json( ['success' => true,], 200, [], JSON_UNESCAPED_UNICODE);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param Menu $menu
   * @param string $id
   * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
   */
  public function destroy( $id )
  {
    //
    $menu = Menu::find($id);

    if( ! $menu ){
      return response()->json( ['success' => false,'message'=>'Menu Not Found'], 404, [], JSON_UNESCAPED_UNICODE);
    }

    if( $menu->delete() ){
      return response()->json( ['success' => true] );
    }
    return response()->json( ['success' => false, 'message'=> 'Error deleting file' ], 500 );
  }

  /**
   * Получить тип файла для сохранения в БД
   * @param \Illuminate\Http\UploadedFile $file
   * @return string
   */
  public static function getByGuid( $guid ){
   $menu = Menu::where( 'guid', $guid)->get();
   if( ! $menu ){
     return response()->json( ['success' => false,'message'=>'Menu Not Found'], 404, [], JSON_UNESCAPED_UNICODE);
   }
    return response()->json( $menu->toArray(), 200, [], JSON_UNESCAPED_UNICODE);
  }
}
