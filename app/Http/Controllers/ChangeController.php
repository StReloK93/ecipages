<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Change;
class ChangeController extends Controller
{
    public function index()
    {
        return Change::all();
    }

    public function store(Request $request)
    {
        return Change::create([
            'name' => $request->name,
            'name_ru' => $request->name_ru,
        ]);
    }


    public function update($id, Request $request)
    {
        $Change = Change::find($id);

        $Change->name = $request->name;
        $Change->name_ru = $request->name_ru;
        $Change->save();

        return $Change;
    }

    public function destroy($id)
    {
        return Change::find($id)->delete();
    }
}
