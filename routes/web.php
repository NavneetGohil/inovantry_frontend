<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('dashboard');
});
Route::get('/company', function () {
    return view('company');
});


Route::get('/customer', function () {
    return view('customer');
});

Route::get('/sell', function () {
    return view('sell');
});
Route::get('/buy', function () {
    return view('buy');
});
Route::get('/transaction', function () {
    return view('transaction');
});

//Hasmukh
Route::get('/item', function () {
    return view('item');
});
//End Hasmukh

