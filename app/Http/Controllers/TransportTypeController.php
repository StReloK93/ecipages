<?php

namespace App\Http\Controllers;

use App\Models\TransportType;
use Illuminate\Http\Request;

class TransportTypeController extends BaseCrudController
{
    protected string $model = TransportType::class;

    public function store(Request $request)
    {
        $request->merge([
            'organization_id' => 1
        ]);

        TransportType::create($request->all());
    }
}
