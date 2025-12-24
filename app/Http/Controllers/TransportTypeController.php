<?php

namespace App\Http\Controllers;

use App\Models\TransportType;
use Illuminate\Http\Request;

class TransportTypeController extends Controller
{
    public function index()
    {
        return TransportType::all();
    }

    public function store(Request $request)
    {
        return TransportType::create([
            'name' => $request->name,
            'name_ru' => $request->name_ru,
        ]);
    }


    public function update($id, Request $request)
    {
        $instance = TransportType::find($id);

        $instance->name = $request->name;
        $instance->name_ru = $request->name_ru;
        $instance->save();

        return $instance;
    }

    public function destroy($id)
    {
        return TransportType::find($id)->delete();
    }
}
