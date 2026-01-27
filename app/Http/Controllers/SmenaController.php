<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Smena;
class SmenaController extends BaseCrudController
{

    protected string $model = Smena::class;



    public function store(Request $request)
    {
        $request->merge([
            'organization_id' => 1
        ]);

        return Smena::create($request->all());
    }
}
