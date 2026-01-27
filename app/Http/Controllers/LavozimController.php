<?php

namespace App\Http\Controllers;
use App\Models\Lavozim;
use Illuminate\Http\Request;

class LavozimController extends BaseCrudController
{
    protected string $model = Lavozim::class;

    public function index(Request $request)
    {
        $organization_id = 1;
        return Lavozim::with('transportType')->whereHas('transportType', function ($query) use ($organization_id) {
            $query->where('organization_id', $organization_id);
        })->get();
    }
}
