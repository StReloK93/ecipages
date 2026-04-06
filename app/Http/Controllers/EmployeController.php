<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employe;
use App\Http\Resources\EmployeResource;
use App\Models\EmployeTransportList;
use DB;
class EmployeController extends BaseCrudController
{
    protected string $model = Employe::class;

    public function index(Request $request)
    {
        $organization_id = $request->user()->organization_id;

        return Employe::whereHas(
            'transport_lists.transport_list.transport_type',
            function ($q) use ($organization_id) {
                $q->where('organization_id', $organization_id);
            }
        )
            ->with([
                'transport_lists.transport_list:id,transport_type_id,name'
            ])
            ->select('id', 'name', 'table', 'razryad')
            ->get();
    }

    public function showByOrganization($organization_id)
    {
        return Employe::whereHas(
            'transport_lists.transport_list.transport_type',
            function ($q) use ($organization_id) {
                $q->where('organization_id', $organization_id);
            }
        )
            ->with([
                'transport_lists.transport_list:id,transport_type_id,name'
            ])
            ->select('id', 'name', 'table', 'razryad')
            ->get();
    }

    public function store(Request $request)
    {
        DB::transaction(function () use ($request) {

            $employe = Employe::create([
                'name' => $request->name,
                'table' => $request->table,
                'razryad' => $request->razryad,
            ]);

            $employe->transportLists()->sync($request->transport_lists);
        });

        return response()->json(['message' => 'Created']);
    }

    public function update(Request $request, $id)
    {
        $employe = Employe::findOrFail($id);

        DB::transaction(function () use ($request, $employe) {

            $employe->update([
                'name' => $request->name,
                'table' => $request->table,
                'razryad' => $request->razryad,
            ]);

            $employe->transportLists()->sync($request->transport_lists);
        });

        return response()->json(['message' => 'Updated']);
    }

    public function show($id)
    {
        $employe = Employe::find($id);
        return new EmployeResource($employe);
    }
}
