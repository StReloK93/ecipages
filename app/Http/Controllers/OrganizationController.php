<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    public function index()
    {
        return Organization::all();
    }

    public function transports(Request $request)
    {
        $organization = Organization::find($request->id);

        return $organization->transports;
    }


    public function store(Request $request)
    {
        return Organization::create([
            'name' => $request->name,
            'name_ru' => $request->name_ru,
        ]);
    }


    public function update($id, Request $request)
    {
        $organization = Organization::find($id);

        $organization->name = $request->name;
        $organization->name_ru = $request->name_ru;
        $organization->save();

        return $organization;
    }

    public function destroy($id)
    {
        return Organization::find($id)->delete();
    }
}
