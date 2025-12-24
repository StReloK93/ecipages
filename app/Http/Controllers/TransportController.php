<?php

namespace App\Http\Controllers;

use App\Models\Transport;
use Illuminate\Http\Request;
use Carbon\Carbon;
class TransportController extends Controller
{
   public function update($id, Request $request)
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


   public function show($id)
   {
      return Transport::find($id);
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


   public function destroy($id)
   {
      return Transport::destroy($id);
   }
}
