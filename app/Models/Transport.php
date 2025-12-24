<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transport extends Model
{
    use HasFactory;
    protected $with = ['transport_list', 'smena'];

    protected $fillable = [
        'garage_number',
        'transport_list_id',
        'organization_id',
        'smena_id',
        'start_smena_day',
    ];


    public function transport_list()
    {
        return $this->belongsTo(TransportList::class);
    }

        public function smena()
    {
        return $this->belongsTo(Smena::class);
    }

    
    protected $casts = [
        'transport_list_id' => 'integer',
        'organization_id' => 'integer',
        'smena_id' => 'integer',
    ];
}
