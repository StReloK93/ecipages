<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TransportList;
class TransportListController extends BaseCrudController
{
    protected string $model = TransportList::class;



    public function byTransportType($transportTypeId)
    {

        return TransportList::where([
            ['transport_type_id', $transportTypeId],
        ])->get();
    }
}
