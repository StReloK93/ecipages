<?php

namespace App\Http\Controllers;
use App\Models\Lavozim;
use Illuminate\Http\Request;

class LavozimController extends BaseCrudController
{
    protected string $model = Lavozim::class;

    public function store(Request $request)
    {
        $request->merge([
            'organization_id' => 1
        ]);

        Lavozim::create($request->all());
    }
}
