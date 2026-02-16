<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employe;
class EmployeController extends BaseCrudController
{
    protected string $model = Employe::class;

    public function index(Request $request)
    {
        $organization_id = $request->user()->organization_id;
        return Employe::whereHas('transport_list.transportType', function ($query) use ($organization_id) {
            $query->where('organization_id', $organization_id);
        })
            ->with([
                'transport_list' => fn($q) => $q->without('transportType')->select('id', 'transport_type_id', 'name'),
            ])
            ->select('id', 'transport_list_id', 'name', 'table', 'razryad')->get();
    }

}
