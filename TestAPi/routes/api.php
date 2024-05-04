<?php

use App\Http\Controllers\AuthenticateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//register route
Route::post('/register', [AuthenticateController::class, 'register']);
//Login api
Route::post('/login', [AuthenticateController::class, 'login']);
//Logout api
Route::delete('/logout', [AuthenticateController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/getCurrentUser', [AuthenticateController::class, 'getCurrentUser'])->middleware('auth:sanctum');

