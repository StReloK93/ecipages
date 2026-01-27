<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Group;
class GroupController extends BaseCrudController
{
    protected string $model = Group::class;



    public function byTransport($transport_id)
    {
        return Group::where('transport_id', $transport_id)->get();
    }


    public function store(Request $request)
    {
        $request->validate([
            'employe_id' => [
                'required',
                Rule::unique('groups')
                    ->where('transport_id', $request->transport_id)
                    ->where('change_id', $request->change_id),
            ],
            'transport_id' => 'required',
            'change_id' => 'required',
            'lavozim_id' => 'required',
        ]);

        return Group::create($request->all())->fresh();
    }
}
