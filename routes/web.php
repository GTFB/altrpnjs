<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Constructor\Template;
use App\Page;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


/**
 * Installation
 */

Route::group([
  'middleware' => ['web', 'installation.checker'],
  'prefix'     => 'install',
], function () {
  Route::get('/', 'InstallationController@starting')->name('installation.start');
  Route::get('process', 'InstallationController@process')->name('installation.input');
  Route::post('process', 'InstallationController@process')->name('installation.post');
  //  Route::get('migrate', 'InstallationController@migrate')->name(  'installation.migrate' );
});

Route::group([
  'middleware' => ['installation.checker'],
], function () {
  Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
  Route::post('login', 'Auth\LoginController@login')->name('post.login');
  Route::post('logout', 'Auth\LoginController@logout')->name('logout');
});


Route::get('/admin/editor', function () {
  return view('editor');
})->middleware('auth', 'admin')->name('editor');

Route::get('/admin/editor-content', function () {
  return view('editor-content');
})->middleware('auth')->name('editor-content');

// Route::get('/admin/reports-editor',fn()=>view('reports'));
// Route::get('/admin/reports-content',fn()=>view('reports-content'));

// Route::get( '/admin/editor-reports', function (){
//    return view( 'editor-reports' );
// } )->middleware( 'auth' )->name('editor-reports');

// Route::get('/reports/html/{id}', "ReportsController@page");
// Route::get('/reports/{id}/html', "ReportsController@html");
Route::post('/reports/generate', "ReportsController@setHtml");

/**
 * Роуты Админки
 */

Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function () {

  Route::group(['prefix' => 'ajax'], function () {

    Route::get('/analytics', 'AnalyticsController@index');
    Route::get('/analytics/none', 'AnalyticsController@none');

    Route::get('/global-elements', "Constructor\GlobalElements@getElements");
    Route::get('/global-elements/{element}', "Constructor\GlobalElements@getElement");
    Route::post('/global-elements', "Constructor\GlobalElements@insert");
    Route::put('/global-elements/{element}', "Constructor\GlobalElements@update");
    Route::delete('/global-elements/{element}', "Constructor\GlobalElements@trashed");
    Route::get('templates/options', 'TemplateController@options');
    Route::get('popups/options', 'TemplateController@popupsOptions');
    Route::get('/templates/{template_id}/reviews', 'TemplateController@reviews');
    Route::delete('/templates/{template_id}/reviews', 'TemplateController@deleteReviews');
    Route::delete('/templates/{template_id}/reviews/{review_id}', 'TemplateController@deleteReview');
    Route::delete('/reviews', 'TemplateController@deleteAllReviews')->name('admin.delete-all-reviews');

    Route::resource('pages', 'Admin\PagesController');
    Route::get('/pages_options', 'Admin\PagesController@pages_options')->name('admin.pages_options.all');
    Route::get('/reports_options', 'Admin\PagesController@reports_options')->name('admin.reports_options.all');
    Route::get('/pages_options/{page_id}', 'Admin\PagesController@show_pages_options')->name('admin.pages_options.show');

    Route::get('/page_data_sources', 'Admin\PageDatasourceController@index');
    Route::get('/page_data_sources/pages/{page_id}', 'Admin\PageDatasourceController@getByPage');
    Route::get('/page_data_sources/{page_data_source_id}', "Admin\PageDatasourceController@show");
    Route::post('/page_data_sources', "Admin\PageDatasourceController@store");
    Route::put('/page_data_sources/{page_data_source_id}', "Admin\PageDatasourceController@update");
    Route::delete('/page_data_sources/{page_data_source_id}', "Admin\PageDatasourceController@destroy");

    Route::get('/permissions', "Users\Permissions@getPermissions");
    Route::get('/permissions_options', "Users\Permissions@getPermissionsOptions");
    Route::get('/permissions/{permission}', "Users\Permissions@getPermission");
    Route::post('/permissions', "Users\Permissions@insert");
    Route::put('/permissions/{permission}', "Users\Permissions@update");
    Route::delete('/permissions/{permission}', "Users\Permissions@delete");

    Route::get('/roles', "Users\Roles@getRoles");
    /**
     * URL: /admin/ajax/role_options?s=search_string
     * response:
     * [
     *  {
     *    value - role id
     *    label - role display_name
     *  }
     * ]
     */
    Route::get('/role_options', "Users\Roles@get_options")->name('admin.role_options');
    Route::get('/roles/{role}', "Users\Roles@getRole");
    Route::post('/roles', "Users\Roles@insert");
    Route::put('/roles/{role}', "Users\Roles@update");
    Route::delete('/roles/{role}', "Users\Roles@delete");

    Route::get('/roles/{role}/permissions', "Users\Roles@getPermissions");
    Route::post('/roles/{role}/permissions', "Users\Roles@attachPermission");
    Route::delete('/roles/{role}/permissions', "Users\Roles@detachPermission");

    Route::get('/users', "Users\Users@getUsers");
    Route::get('/users/{user}', "Users\Users@getUser");
    Route::get('/users/{user}/storage', "Users\Users@getUserStorage");
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

    //Route::resource( 'reports', 'ReportsController' );
    /**
     * Areas Routes
     */
    Route::resource('areas', 'Admin\AreasController');
    /**
     * Templates Routes
     */
    Route::resource('templates', 'TemplateController');
    /**
     * templates settings
     */
    Route::get('templates/{template_id}/settings/{setting_name}', 'TemplateController@settingGet')
      ->name('get-template-setting');
    Route::put('templates/{template_id}/settings/{setting_name}', 'TemplateController@settingSet')
      ->name('set-template-setting');
    /**
     * Templates Conditions
     */
    Route::get('templates/{template_id}/conditions', 'TemplateController@conditionsGet')
      ->name('get-template-setting');
    Route::put('templates/{template_id}/conditions', 'TemplateController@conditionsSet')
      ->name('set-template-setting');
    /**
     * Global Style
     */
    Route::resource('global_styles', 'Admin\GlobalStyleController');
    Route::get('global_styles_options', 'Admin\GlobalStyleController@options');
    /**
     * Reports
     */
    //Route::get('reports/{id}', "TemplateController@show");
    //Route::put('reports/{id}', "TemplateController@update");
    Route::resource('reports', 'ReportsController');

    Route::resource('media', 'Admin\MediaController');
    Route::resource('settings', 'Admin\SettingsController');
    Route::resource('diagrams', 'Admin\AltrpDiagramController');
    Route::get('sql_editors/list', 'Admin\SQLEditorController@listByName');
    Route::resource('sql_editors', 'Admin\SQLEditorController');

    /**
     * Updates Check
     */
    Route::post('check_update', 'Admin\UpdateController@check_update')->name('admin.check_update');
    Route::post('update_altrp', 'Admin\UpdateController@update_altrp')->name('admin.update_altrp');

    /**
     * Запрос на обновление всех пользовательских контроллеров
     */
    Route::post('update-all-controllers', 'Admin\UpdateController@updateAllControllers')->name('admin.update-all-controllers');

    /**
     * Запрос на обновление всех пользовательских ресурсов через обновление данных Models в БД
     */
    Route::post('update-all-resources', 'Admin\UpdateController@upgradeAllResources')->name('admin.update-all-resources');

    /**
     * Роуты для теста запросов для виджета таблицы todo: удалить, после того как модели будут готовы
     */
    Route::get('/models_list', 'Admin\ModelsController@models_list')->name('admin.models_list');
    Route::get('/models_list_for_query', 'Admin\ModelsController@models_list_for_query')->name('admin.models_list_for_query');
    Route::get('/models_options', 'Admin\ModelsController@models_options')->name('admin.models_options');
    Route::get('/models_with_fields_options', 'Admin\ModelsController@models_with_fields_options')
      ->name('admin.models_with_fields_options');

    /**
     * Маршруты для проверки на уникальность имени
     */
    Route::get('/model_name_is_free', 'Admin\ModelsController@modelNameIsFree');
    Route::get('/models/{model_id}/field_name_is_free', 'Admin\ModelsController@fieldNameIsFree');
    Route::get('/models/{model_id}/relation_name_is_free', 'Admin\ModelsController@relationNameIsFree');
    Route::get('/models/{model_id}/query_name_is_free', 'Admin\ModelsController@queryNameIsFree');

    /**
     * Модели
     */
    Route::get('/models', 'Admin\ModelsController@getModels');
    Route::get('/model_options', 'Admin\ModelsController@getModelOptions');
    Route::get('/models_without_parent', 'Admin\ModelsController@getModelsWithoutParent');
    Route::post('/models', 'Admin\ModelsController@storeModel');
    Route::put('/models/{model_id}', 'Admin\ModelsController@updateModel');
    Route::get('/models/{model_id}', 'Admin\ModelsController@showModel');
    Route::delete('/models/{model_id}', 'Admin\ModelsController@destroyModel');

    // SQL Builder
    Route::get('/models/{model_id}/queries', 'Admin\ModelsController@getAllQueries');
    Route::post('/models/{model_id}/queries', 'Admin\ModelsController@storeQuery');
    Route::get('/models/{model_id}/queries/{query_id}', 'Admin\ModelsController@getQuery');
    Route::put('/models/{model_id}/queries/{query_id}', 'Admin\ModelsController@updateQuery');
    Route::delete('/models/{model_id}/queries/{query_id}', 'Admin\ModelsController@destroyQuery');

    // Fields
    /**
     * Источники данных для QueryController
     */
    Route::get('/data_sources_for_query', 'Admin\ModelsController@data_sources_for_query');

    /**
     * Поля
     */
    Route::get('/models/{model_id}/fields', 'Admin\ModelsController@getModelFields');
    Route::get('/models/{model_id}/fields_only', 'Admin\ModelsController@getOnlyModelFields');
    Route::get('/models/{model_id}/field_options', 'Admin\ModelsController@getModelFieldOptions');
    Route::post('/models/{model_id}/fields', 'Admin\ModelsController@storeModelField');
    Route::put('/models/{model_id}/fields/{field_id}', 'Admin\ModelsController@updateModelField');
    Route::get('/models/{model_id}/fields/{field_id}', 'Admin\ModelsController@showModelField');
    Route::delete('/models/{model_id}/fields/{field_id}', 'Admin\ModelsController@destroyModelField');

    /**
     * Аксессоры
     */
    Route::get('/models/{model_id}/accessors', 'Admin\ModelsController@getModelAccessors');
    Route::post('/models/{model_id}/accessors', 'Admin\ModelsController@storeAccessor');
    Route::put('/models/{model_id}/accessors/{accessor_id}', 'Admin\ModelsController@updateAccessor');
    Route::get('/models/{model_id}/accessors/{accessor_id}', 'Admin\ModelsController@showAccessor');
    Route::delete('/models/{model_id}/accessors/{accessor_id}', 'Admin\ModelsController@destroyAccessor');

    /**
     * Связи
     */
    Route::get('/models/{model_id}/relations', 'Admin\ModelsController@getModelRelations');
    Route::get('/models/{model_id}/relation_options', 'Admin\ModelsController@getModelRelationOptions');
    Route::post('/models/{model_id}/relations', 'Admin\ModelsController@storeModelRelation');
    Route::put('/models/{model_id}/relations/{field_id}', 'Admin\ModelsController@updateModelRelation');
    Route::get('/models/{model_id}/relations/{field_id}', 'Admin\ModelsController@showModelRelation');
    Route::delete('/models/{model_id}/relations/{field_id}', 'Admin\ModelsController@destroyModelRelation');

    /**
     * Валидационные правила
     */
    Route::get('/models/{model_id}/validations', 'Admin\ModelsController@getValidationFields');
    Route::get('/models/{model_id}/validations/{validation_field_id}', 'Admin\ModelsController@showValidationField');
    Route::post('/models/{model_id}/validations', 'Admin\ModelsController@storeValidationField');
    Route::put('/models/{model_id}/validations/{validation_field_id}', 'Admin\ModelsController@updateValidationField');
    Route::delete('/models/{model_id}/validations/{validation_field_id}', 'Admin\ModelsController@destroyValidationField');

    Route::get('/models/{model_id}/validations/{validation_field_id}/validation_rules', 'Admin\ModelsController@getValidationRules');
    Route::get('/models/{model_id}/validations/{validation_field_id}/validation_rules/{rule_id}', 'Admin\ModelsController@showValidationRule');
    Route::post('/models/{model_id}/validations/{validation_field_id}/validation_rules', 'Admin\ModelsController@storeValidationRule');
    Route::put('/models/{model_id}/validations/{validation_field_id}/validation_rules/{rule_id}', 'Admin\ModelsController@updateValidationRule');
    Route::delete('/models/{model_id}/validations/{validation_field_id}/validation_rules/{rule_id}', 'Admin\ModelsController@destroyValidationRule');

    /**
     * Источники данных
     */
    Route::get('/data_sources', 'Admin\ModelsController@getDataSources');
    Route::get('/data_source_options', 'Admin\ModelsController@getDataSourceOptions');
    Route::post('/data_sources', 'Admin\ModelsController@storeDataSource');
    Route::put('/data_sources/{source_id}', 'Admin\ModelsController@updateDataSource');
    Route::get('/data_sources/{source_id}', 'Admin\ModelsController@showDataSource');
    Route::delete('/data_sources/{source_id}', 'Admin\ModelsController@destroyDataSource');
    Route::get('/models/{model_id}/data_source_options', 'Admin\ModelsController@getDataSourcesByModel');

    /**
     * Управление моделями
     */
    Route::get('/custom_models/{model_id}', 'Admin\ModelsController@getCustomModelRecords');
    Route::get('/custom_models/{model_id}/show/{record_id}', 'Admin\ModelsController@getCustomModelRecord');
    Route::post('/custom_models/{model_id}', 'Admin\ModelsController@storeCustomModelRecord');
    Route::put('/custom_models/{model_id}/edit/{record_id}', 'Admin\ModelsController@editCustomModelRecord');
    Route::delete('/custom_models/{model_id}/delete/{record_id}', 'Admin\ModelsController@destroyCustomModelRecord');

    Route::get('/tables', "Admin\TableController@getTables");
    Route::get('/tables/options', "Admin\TableController@getTablesForOptions");
    Route::get('/tables_options', "Admin\TableController@getTablesForOptions");
    Route::get('/tables/{table}', "Admin\TableController@getTable");
    Route::post('/tables', "Admin\TableController@insert");
    Route::put('/tables/{table}', "Admin\TableController@update");
    Route::delete('/tables/{table}', "Admin\TableController@delete");

    Route::get('/tables/{table}/migrations', "Admin\TableController@getMigrations");
    Route::post('/tables/{table}/migrations', "Admin\TableController@insertMigration");
    Route::post('/tables/{table}/migrations/{migration}/run', "Admin\TableController@runMigration");

    Route::get('/tables/{table}/columns', "Admin\TableController@getColumns");
    Route::get('/tables/{table}/keys', "Admin\TableController@getKeys");

    Route::post('/tables/{table}/models', 'Admin\TableController@saveModel');
    Route::get('/tables/{table}/models/{model}', 'Admin\TableController@getModel');
    Route::get('/tables/{table_name}/items', 'Admin\TableController@getItems');
    Route::get('/tables/{table_name}/items/{item_id}', 'Admin\TableController@getItemById');
    Route::post('/tables/{table}/models/{model}/accessors', 'Admin\TableController@saveAccessor');
    Route::get('/tables/{table}/models/{model}/accessors', 'Admin\TableController@getAccessors');
    Route::delete('/tables/{table}/models/{model}/accessors/{accessor}', 'Admin\TableController@deleteAccessor');
    Route::put('/tables/{table}/models/{model}/accessors/{accessor}', 'Admin\TableController@updateAccessor');
    Route::post('/tables/{table}/controllers', 'Admin\TableController@saveController');
    Route::get('/tables/{table}/controllers/{controller}', 'Admin\TableController@getController');


    Route::post('/tables/{table}/test', "Admin\TableController@test");
    Route::get('/tables/{table}/model', "Admin\TableController@getModel");
    Route::post('/tables/{table}/model', "Admin\TableController@saveModel");

    Route::get('/tables/{table}/controller', "Admin\TableController@getController");
    Route::post('/tables/{table}/controller', "Admin\TableController@saveController");

    /**
     * Роут для загрузки favicon
     */
    Route::post('/favicon', 'Admin\FileUploadController@loadFavicon');

    /**
     * Плагины
     */

    Route::get('/plugins', "Admin\PluginController@index");
    Route::post('/plugins/switch', "Admin\PluginController@switch");

    /**
     * Настройка почты
     */
    Route::post('/write_mail_settings', 'MailController@writeSettingsToEnv');
    Route::get('/get_mail_settings', 'MailController@getSettings');
    /**
     * Роуты ипортов Админки
     */
    Route::group(['prefix' => 'import'], function () {
      Route::post('settings', 'Admin\ImportsController@importAltrpSettings')->name('admin.download.settings');
    });
    /**
     * Роуты загрузок Админки
     */
    Route::group(['prefix' => 'downloads'], function () {
      Route::get('settings', 'Admin\DownloadsController@exportAltrpSettings')->name('admin.download.settings');
    });
  });
});

//Route::resource( 'admin/ajax/areas', 'Admin\AreasController' );
//Route::resource( 'admin/ajax/templates', 'TemplateController' );
//Route::resource( 'admin/ajax/media', 'Admin\MediaController' );

Route::view('/admin/{path?}', 'admin')
  ->where('path', '.*')
  ->middleware(['auth', 'web', 'installation.checker', 'admin'])
  ->name('admin');

/**
 * Frontend
 */

$frontend_routes = \App\Page::get_frontend_routes();

Route::get('/', function () {

  return view('front-app', [
    'title' => 'Main',
    '_frontend_route' => [],
    'preload_content' => [],
  ]);
})->middleware(['web', 'installation.checker']);

foreach ($frontend_routes as $_frontend_route) {
  $path = $_frontend_route['path'];
  $title = $_frontend_route['title'];
  $frontend_route = str_replace(':id', '{id}', $path);

  Route::get($frontend_route, function () use ($title, $_frontend_route) {
    $preload_content = Page::getPreloadPageContent($_frontend_route['id']);
    return view('front-app', [
      'title' => $title,
      '_frontend_route' => $_frontend_route,
      'preload_content' => $preload_content,
    ]);
  })->middleware(['web', 'installation.checker']);
}

/**
 * Reports
 */
$reports_routes = \App\Page::get_reports_routes();
foreach ($reports_routes as $report_route) {
  $path = $report_route['path'];
  $title = $report_route['title'];

  $report_route = str_replace(':id', '{id}', $path);

  Route::get($report_route, function () use ($title) {

    return view('front-app', [
      'title' => $title,
      '_frontend_route' => [],
      'preload_content' => [],
    ]);
  })->middleware(['web', 'installation.checker']);
}

/**
 * AJAX routes for frontend
 */

Route::group(['prefix' => 'ajax'], function () {

  /**
   * Роут текущий пользователь
   */
  Route::get('current-user', "Users\Users@getCurrentUser")->name('users.current-user');
  Route::put('current-user', "Users\Users@changeUserStorage")->name('users.change-user-storage');

  // Отдает данные для виджета карты
  Route::get('maps/{id}', 'MapsController@index');

  // Записывает данные карты с фронта
  Route::post('maps/{id}', 'MapsController@store');

  // Отдает данные для виджета панели аналитики
  Route::get('dashboards/{id}', 'DashboardsController@index');

  // Загружаем настройки для виджета панели аналитики
  Route::get('dashboards/{id}/settings', 'DashboardsController@settings');
  Route::get('dashboards/datasource/{id}/data', 'DatasourceDashboardController@index');

  // Записываем новые настройки для виджета панели аналитики
  Route::post('dashboards/{id}/settings', 'DashboardsController@settings');
  // Записываем новые настройки для виджета панели аналитики с датасурсами
  Route::post('dashboards/datasource/{id}/settings', 'DatasourceDashboardController@settings');

  // Записывает данные для виджета панели аналитики
  Route::post('dashboards/{id}', 'DashboardsController@store');

  // Обновляем виджет на панели аналитики
  Route::put('dashboards/{id}', 'DashboardsController@update');

  // Удаляем виджет из панели аналитики
  Route::delete('dashboards/{id}', 'DashboardsController@destroy');

  /**
   * Отдает данные страницы как модели для динамического контента
   */
  Route::get('models/page/{page_id}', 'Frontend\PageController@show')->name('front.page.show');

  /**
   * Отдает данные роутов для фронтенда
   */
  Route::resource('routes', 'Frontend\RouteController');

  /**
   * Отдает данные страниц внутри роутов ( с areas и шаблонами)
   */
  Route::get('pages/{page_id}', 'Frontend\PageController@pageForRoutes')->name('front.page-for-routes');
  /**
   * для загрузки шаблонов внутри виджетов
   */
  Route::get('templates/{template_id}', 'TemplateController@show_frontend')->name('templates.show.frontend');


  /**
   * Отдает данные отчётов
   */
  Route::get('reports/{id}/result', 'ReportsController@report_template')->name('front.reports-for-routes');

  /**
   * Настройка почты
   */
  Route::post('/feedback', 'MailController@sendMail');
});

Route::get('reports/{id}', "ReportsController@show");
Route::post('reports/{id}', "ReportsController@update");

Route::get('/linkstorage', function () {
  return redirect('/admin');
});

/**
 * Роуты для зарегистрированных пользователей
 */
Route::group(['prefix' => 'ajax', 'middleware' => 'auth'], function () {
});
/**
 * Обновление всех ресурсов бэкенда
 */
Route::post('update-all-resources', 'Admin\UpdateController@upgradeAllResources');
