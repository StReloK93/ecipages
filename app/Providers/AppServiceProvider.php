<?php

namespace App\Providers;

use App\Models\Employe;
use Illuminate\Support\ServiceProvider;
use App\Models\EmployeTransportList;
use Illuminate\Http\Resources\Json\JsonResource;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        JsonResource::withoutWrapping();
        // $allEmployes = Employe::all();


        // foreach ($allEmployes as $key => $employe) {
        //     EmployeTransportList::create([
        //         'employe_id' => $employe->id,
        //         'transport_list_id' => $employe->transport_list_id
        //     ]);
        // }
    }
}
