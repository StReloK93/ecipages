<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;

class OrganizationController extends BaseCrudController
{
    protected string $model = Organization::class;

    public function transports(Request $request)
    {
        $organization = Organization::with('transport_types')->find($request->id);

        return $organization;
    }
}
