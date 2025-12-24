<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Smena;
class SmenaController extends Controller
{
    public function index()
    {
        return Smena::all();
    }

    public function show($id)
    {
        return Smena::find($id);
    }


    public function store(Request $request)
    {
        dd($request->formula);
        return Smena::create([
            'name' => $request->name,
            'formula' => $request->formula,
        ]);
    }


    public function update($id, Request $request)
    {
        $Smena = Smena::find($id);

        $Smena->name = $request->name;
        $Smena->formula = $request->formula;
        $Smena->save();

        return $Smena;
    }

    public function destroy($id)
    {
        return Smena::find($id)->delete();
    }
}
