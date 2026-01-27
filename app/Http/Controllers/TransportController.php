<?php

namespace App\Http\Controllers;

use App\Models\Transport;
use Illuminate\Http\Request;
use Carbon\Carbon;
class TransportController extends BaseCrudController
{
   protected string $model = Transport::class;


   public function index(Request $request)
   {
      $organization_id = 1;
      return Transport::whereHas('transport_list.transportType', function ($query) use ($organization_id) {
         $query->where('organization_id', $organization_id);
      })->get();
   }


   public function update(Request $request, $id)
   {

      $transport = Transport::find($id);
      $transport->garage_number = $request->garage_number;
      $transport->transport_list_id = $request->transport_list_id;
      $transport->smena_id = $request->smena_id;
      $transport->start_smena_day = Carbon::parse($request->start_smena_day)
         ->timezone('Asia/Tashkent')
         ->format('Y-m-d');
      $transport->save();

      return $transport->fresh();
   }



   public function store(Request $request)
   {
      $transport = Transport::create([
         'transport_list_id' => $request->transport_list_id,
         'organization_id' => $request->organization_id,
         'garage_number' => $request->garage_number,
         'start_smena_day' => Carbon::parse($request->start_smena_day)
            ->timezone('Asia/Tashkent')
            ->format('Y-m-d'),
         'smena_id' => $request->smena_id,
      ]);

      return $transport->fresh();
   }

}
