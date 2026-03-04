<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeTransportList extends Model
{
    use HasFactory;


    protected $fillable = [
        'employe_id',
        'transport_list_id',
    ];

    protected $casts = [
        'transport_list_id' => 'integer'
    ];


    public function transport_list()
    {
        return $this->belongsTo(TransportList::class, 'transport_list_id');
    }
}
