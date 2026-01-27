<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class BaseCrudController extends Controller
{
   protected string $model;


   public function index(Request $request)
   {
      return $this->model::all();
   }

   public function show($id)
   {
      return $this->model::findOrFail($id);
   }

   public function store(Request $request)
   {
      return $this->model::create($request->all());
   }

   public function update(Request $request, $id)
   {
      $item = $this->model::findOrFail($id);
      $item->update($request->all());
      return $item;
   }

   public function destroy($id)
   {
      $item = $this->model::findOrFail($id);
      return $item->delete();
   }
}
