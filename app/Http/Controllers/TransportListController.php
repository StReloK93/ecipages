<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TransportList;
class TransportListController extends Controller
{
    public function index()
    {
        return TransportList::all();
    }

    public function store(Request $request)
    {
        $rer = TransportList::create([
            'name' => $request->name,
            'name_ru' => $request->name_ru,
            'transport_type_id' => $request->transport_type_id,
        ]);
        return $rer->fresh();
    }


    public function update($id, Request $request)
    {
        $instance = TransportList::find($id);

        $instance->name = $request->name;
        $instance->name_ru = $request->name_ru;
        $instance->transport_type_id = $request->transport_type_id;
        $instance->save();

        return $instance->fresh();
    }

    public function destroy($id)
    {
        return TransportList::find($id)->delete();
    }
}
