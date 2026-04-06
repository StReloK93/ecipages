<?php

use App\Http\Controllers\LavozimController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\BossProfessionController;
use App\Http\Controllers\TransportController;
use App\Http\Controllers\TransportTypeController;
use App\Http\Controllers\TransportListController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\SmenaController;
use App\Http\Controllers\ChangeController;
use App\Http\Controllers\EmployeController;
use App\Http\Controllers\AuthController;


Route::post('login', [AuthController::class, 'login']);


Route::controller(AuthController::class)
   ->middleware('auth:sanctum')
   ->group(function () {


      Route::get('user', 'user');
      Route::get('users', 'index');
      Route::post('logout', 'logout');

      Route::post('users', 'store');
      Route::get('users/{id}', 'show');
      Route::put('users/{id}', 'update');

      Route::post('organizations/transports', [OrganizationController::class, 'transports']);
      Route::get('transport-lists/by/transport-type/{transportTypeId}', [TransportListController::class, 'byTransportType']);
      Route::get('transport-lists/table/transport-type/{transportTypeId}', [TransportListController::class, 'TableTransportType']);



      Route::apiResource('organizations', OrganizationController::class)->except('index');
      Route::apiResource('transports', TransportController::class);
      Route::apiResource('transport-types', TransportTypeController::class);
      Route::apiResource('transport-lists', TransportListController::class);
      Route::apiResource('smena', SmenaController::class);
      Route::apiResource('change', ChangeController::class);
      Route::apiResource('employes', EmployeController::class);
      Route::apiResource('lavozim', LavozimController::class);
      Route::apiResource('join-employes', LavozimController::class);
      Route::apiResource('groups', GroupController::class);


      Route::post('groups/transport/change', [GroupController::class, 'byTransportChange']);
      Route::get('groups/transport/{transport_id}', [GroupController::class, 'byTransport']);


      Route::post('boss-profession', [BossProfessionController::class, 'index']);
      Route::post('boss-profession/aviable', [BossProfessionController::class, 'aviableBossProfessions']);
      Route::post('organizations', [OrganizationController::class, 'index']);
      Route::post('organizations', [OrganizationController::class, 'index']);
      Route::post('organizations/aviable', [OrganizationController::class, 'aviableOrganizations']);

      Route::post('boss-profession/success-current-month', [BossProfessionController::class, 'successCurrentMonth']);
      Route::post('organizations/success-current-month', [OrganizationController::class, 'successCurrentMonth']);



      Route::get('transports/show/{organization_id}', [TransportController::class, 'showByOrganization']);
      Route::get('transport-types/show/{organization_id}', [TransportTypeController::class, 'showByOrganization']);
      Route::get('transport-lists/show/{organization_id}', [TransportListController::class, 'showByOrganization']);
      Route::get('smena/show/{organization_id}', [SmenaController::class, 'showByOrganization']);
      Route::get('employes/show/{organization_id}', [EmployeController::class, 'showByOrganization']);
      Route::get('lavozim/show/{organization_id}', [LavozimController::class, 'showByOrganization']);

   });


