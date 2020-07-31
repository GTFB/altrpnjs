<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'admin', "middleware" => ["auth:api", "role:admin"]], function () {

    Route::group(['prefix' => 'ajax'], function () {
        Route::get('/templates', "Constructor\Templates@getTemplates");
        Route::get('/templates/{template}', "Constructor\Templates@getTemplate");
        Route::post('/templates', "Constructor\Templates@insert");
        Route::put('/templates/{template}', "Constructor\Templates@update");
        Route::delete('/templates/{template}', "Constructor\Templates@delete");

        Route::get('/global-elements', "Constructor\GlobalElements@getElements");
        Route::get('/global-elements/{element}', "Constructor\GlobalElements@getElement");
        Route::post('/global-elements', "Constructor\GlobalElements@insert");
        Route::put('/global-elements/{element}', "Constructor\GlobalElements@update");
        Route::delete('/global-elements/{element}', "Constructor\GlobalElements@trashed");

        Route::get('/tables', "Admin\TableController@getTables");
        Route::get('/tables/{table}', "Admin\TableController@getTable");
        Route::post('/tables', "Admin\TableController@insert");
        Route::put('/tables/{table}', "Admin\TableController@update");
        Route::delete('/tables/{table}', "Admin\TableController@delete");

        Route::post('/tables/{table}/test', "Admin\TableController@test");

        Route::get('/tables/{table}/migrations', "Admin\TableController@getMigrations");
        Route::post('/tables/{table}/migrations', "Admin\TableController@insertMigration");
        Route::post('/tables/{table}/migrations/{migration}/run', "Admin\TableController@runMigration");

        Route::get('/tables/{table}/columns', "Admin\TableController@getColumns");
        Route::get('/tables/{table}/keys', "Admin\TableController@getKeys");

        // Models
        Route::get( '/models', 'Admin\ModelsController@getModels');
        Route::post( '/models/{model_id}/sql_builder', 'Admin\ModelsController@addQuery');

        Route::get( '/model_options', 'Admin\ModelsController@getModelOptions');
        Route::post( '/models', 'Admin\ModelsController@storeModel');
        Route::put( '/models/{model_id}', 'Admin\ModelsController@updateModel');
        Route::get( '/models/{model_id}', 'Admin\ModelsController@showModel');
        Route::delete( '/models/{model_id}', 'Admin\ModelsController@destroyModel');

        // Fields
        Route::get( '/models/{model_id}/fields', 'Admin\ModelsController@getModelFields');
        Route::get( '/models/{model_id}/field_options', 'Admin\ModelsController@getModelFieldOptions');
        Route::post( '/models/{model_id}/fields', 'Admin\ModelsController@storeModelField');
        Route::put( '/models/{model_id}/fields/{field_id}', 'Admin\ModelsController@updateModelField');
        Route::get( '/models/{model_id}/fields/{field_id}', 'Admin\ModelsController@showModelField');
        Route::delete( '/models/{model_id}/fields/{field_id}', 'Admin\ModelsController@destroyModelField');

        // Relations
        Route::get( '/models/{model_id}/relations', 'Admin\ModelsController@getModelRelations');
        Route::get( '/models/{model_id}/relation_options', 'Admin\ModelsController@getModelRelationOptions');
        Route::post( '/models/{model_id}/relations', 'Admin\ModelsController@storeModelRelation');
        Route::put( '/models/{model_id}/relations/{field_id}', 'Admin\ModelsController@updateModelRelation');
        Route::get( '/models/{model_id}/relations/{field_id}', 'Admin\ModelsController@showModelRelation');
        Route::delete( '/models/{model_id}/relations/{field_id}', 'Admin\ModelsController@destroyModelRelation');

        // Data Source
        Route::get( '/data_sources', 'Admin\ModelsController@getDataSources');
        Route::get( '/data_source_options', 'Admin\ModelsController@getDataSourceOptions');
        Route::post( '/data_sources', 'Admin\ModelsController@storeDataSource');
        Route::put( '/data_sources/{field_id}', 'Admin\ModelsController@updateDataSource');
        Route::get( '/data_sources/{field_id}', 'Admin\ModelsController@showDataSource');
        Route::delete( '/data_sources/{field_id}', 'Admin\ModelsController@destroyDataSource');

        Route::post('/tables/{table}/models', 'Admin\TableController@saveModel');
        Route::get('/tables/{table}/models/{model}', 'Admin\TableController@getModel');
        Route::post('/tables/{table}/models/{model}/accessors', 'Admin\TableController@saveAccessor');
        Route::delete('/tables/{table}/models/{model}/accessors/{accessor}', 'Admin\TableController@deleteAccessor');
        Route::put('/tables/{table}/models/{model}/accessors/{accessor}', 'Admin\TableController@updateAccessor');
        Route::post('/tables/{table}/controllers', 'Admin\TableController@saveController');
        Route::get('/tables/{table}/controllers/{controller}', 'Admin\TableController@getController');
        /*Route::get('/tables', "Admin\TableController@getTables");
        Route::get('/tables/{table}', "Admin\TableController@getTable");
        Route::post('/tables', "Admin\TableController@insert");
        Route::put('/tables/{table}', "Admin\TableController@update");
        Route::delete('/tables/{table}', "Admin\TableController@delete");*/

        Route::get('/reports', 'ReportsController@index');
        Route::post('/reports', 'ReportsController@store');

        // GeneratorController routes
        // Route::post('/generators/{table}/model/create', 'Admin\GeneratorController@createModel');
        // Route::post('/generators/{table}/controller/create', 'Admin\GeneratorController@createController');
        // Route::post('/generators/{model}/accessor/create', 'Admin\GeneratorController@createAccessor');

    });

});

Route::group(['prefix' => 'users'], function () {

    Route::get('/permissions', "Users\Permissions@getPermissions");
    Route::get('/permissions/{permission}', "Users\Permissions@getPermission");
    Route::post('/permissions', "Users\Permissions@insert");
    Route::put('/permissions/{permission}', "Users\Permissions@update");
    Route::delete('/permissions/{permission}', "Users\Permissions@delete");

    Route::get('/roles', "Users\Roles@getRoles");
    Route::get('/roles/{role}', "Users\Roles@getRole");
    Route::post('/roles', "Users\Roles@insert");
    Route::put('/roles/{role}', "Users\Roles@update");
    Route::delete('/roles/{role}', "Users\Roles@delete");

    Route::get('/roles/{role}/permissions', "Users\Roles@getPermissions");
    Route::post('/roles/{role}/permissions', "Users\Roles@attachPermission");
    Route::delete('/roles/{role}/permissions', "Users\Roles@detachPermission");

    Route::get('/users', "Users\Users@getUsers");
    Route::get('/users/{user}', "Users\Users@getUser");
    Route::post('/users', "Users\Users@insert");
    Route::put('/users/{user}', "Users\Users@update");
    Route::delete('/users/{user}', "Users\Users@delete");

    Route::get('/users/{user}/permissions', "Users\Users@getPermissions");
    Route::post('/users/{user}/permissions', "Users\Users@attachPermission");
    Route::delete('/users/{user}/permissions', "Users\Users@detachPermission");

    Route::get('/users/{user}/roles', "Users\Users@getRoles");
    Route::post('/users/{user}/roles', "Users\Users@attachRole");
    Route::delete('/users/{user}/roles', "Users\Users@detachRole");

    Route::get('/users/{user}/usermeta', "Users\UsersMeta@getUserMeta");
    Route::post('/users/{user}/usermeta', "Users\UsersMeta@saveUserMeta");
    Route::delete('/users/{user}/roles', "Users\Users@detachRole");

    //Route::get('/permissions/{permission}', "Users\Permissions@getPermission");

    /*
    Route::get('/permissions/permission', "Users\Permissions@save");
    Route::get('/permissions/permission/{permission}', "Users\Permissions@save");
    Route::delete('permissions/permission/{permission}', "Users\Permissions@delete");*/


    /*
    Route::group(['prefix' => 'permissions'], function () {

        Route::get('getPermissions', "Users\Permissions@getPermissions");
        Route::get('getPermissions', "Users\Permissions@getPermissions");


        Route::patch('/users/edit/{user}', 'UsersController@update')->name('user_update');
    });*/

});
