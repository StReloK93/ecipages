<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employe;
class EmployeController extends BaseCrudController
{
    protected string $model = Employe::class;

    public function store(Request $request)
    {
        $request->merge([
            'organization_id' => 1
        ]);

        Employe::create($request->all());
    }
}
