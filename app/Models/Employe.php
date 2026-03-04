<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'table',
        'razryad',
    ];


    public function transport_lists()
    {
        return $this->hasMany(EmployeTransportList::class);
    }

    public function transportLists()
    {
        return $this->belongsToMany(
            TransportList::class,
            'employe_transport_lists',
            'employe_id',
            'transport_list_id'
        );
    }
}
