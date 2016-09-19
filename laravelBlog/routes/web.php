<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::group(['namespace' => 'Controllers\Api', 'prefix' => 'ajax'], function () {
    Route::get('/articles','ArticlesController@index');
    Route::get('/articles/{id}','ArticlesController@getArticleItem');
    Route::get('/articles/{id}/comments','ArticlesController@getArticleComments');
    Route::match(['login', 'options'],'/login','ArticlesController@login')->middleware('cors');
});
