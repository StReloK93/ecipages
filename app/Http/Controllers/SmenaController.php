<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Smena;
class SmenaController extends BaseCrudController
{

    protected string $model = Smena::class;
    public function index(Request $request)
    {
        $organization_id = $request->user()->organization_id;
        return Smena::where('organization_id', $organization_id)->get();
    }


    public function store(Request $request)
    {
        $request->merge([
            'organization_id' => $request->user()->organization_id
        ]);

        return Smena::create($request->all());
    }
}
