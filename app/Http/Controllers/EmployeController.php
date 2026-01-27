<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employe;
class EmployeController extends BaseCrudController
{
    protected string $model = Employe::class;

    public function index(Request $request)
    {
        $organization_id = 1;
        return Employe::whereHas('transport_list.transportType', function ($query) use ($organization_id) {
            $query->where('organization_id', $organization_id);
        })->get();
    }

}
