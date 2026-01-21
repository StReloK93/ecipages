<?php

use App\Http\Controllers\LavozimController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\TransportController;
use App\Http\Controllers\TransportTypeController;
use App\Http\Controllers\TransportListController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\SmenaController;
use App\Http\Controllers\ChangeController;
use App\Http\Controllers\EmployeController;


Route::post('organizations/transports', [OrganizationController::class, 'transports']);
Route::get('transport-lists/by/transport-type/{transportTypeId}', [TransportListController::class, 'byTransportType']);

Route::apiResource('organizations', OrganizationController::class);
Route::apiResource('transports', TransportController::class);
Route::apiResource('transport-types', TransportTypeController::class);
Route::apiResource('transport-lists', TransportListController::class);
Route::apiResource('smena', SmenaController::class);
Route::apiResource('change', ChangeController::class);
Route::apiResource('employes', EmployeController::class);
Route::apiResource('lavozim', LavozimController::class);
Route::apiResource('join-employes', LavozimController::class);




Route::get('groups/by/{transport_id}', [GroupController::class, 'getGroupsByTransportId']);
Route::apiResource('groups', GroupController::class);