<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TransportList;
class TransportListController extends BaseCrudController
{
    protected string $model = TransportList::class;

    public function index(Request $request)
    {
        $organization_id = $request->user()->organization_id;
        return TransportList::whereHas('transportType', function ($query) use ($organization_id) {
            $query->where('organization_id', $organization_id);
        })->get();
    }


    public function byTransportType($transportTypeId)
    {

        return TransportList::with('transports', 'employes')->where([
            ['transport_type_id', $transportTypeId],
        ])->get();
    }

    public function TableTransportType($transportTypeId)
    {

        return TransportList::with('transports.groups')->where([
            ['transport_type_id', $transportTypeId],
        ])->get();
    }
}
