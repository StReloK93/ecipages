<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\Group;
class GroupController extends BaseCrudController
{
    protected string $model = Group::class;

    public function byTransportChange(Request $request)
    {
        $transport_id = $request->transport_id;
        $change_id = $request->change_id;
        return Group::with('lavozim')->where([
            ['transport_id', $transport_id],
            ['change_id', $change_id]
        ])->get();
    }


    public function byTransport($transport_id)
    {
        return Group::where('transport_id', $transport_id)->get();
    }


    public function store(Request $request)
    {
        $request->validate([
            'employe_id' => 'required',
            'transport_id' => 'required',
            'change_id' => 'required',
            'lavozim_id' => 'required',
        ]);

        return Group::create($request->all())->fresh();
    }
}
