<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Group;
class GroupController extends Controller
{
    public function index(){
        return Group::all();
    }


    public function getGroupsByTransportId($transport_id){
        return Group::where('transport_id', $transport_id)->get();
    }
}
