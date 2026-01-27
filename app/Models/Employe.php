<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    use HasFactory;

    protected $with = ['transport_list'];


    protected $fillable = [
        'name',
        'table',
        'razryad',
        'transport_list_id',
    ];
    protected $casts = [
        'transport_list_id' => 'integer',
    ];


    public function transport_list()
    {
        return $this->belongsTo(TransportList::class);
    }
}
