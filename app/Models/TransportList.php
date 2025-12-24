<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransportList extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'name_ru',
        'transport_type_id',
    ];
    protected $with = ['transport_type'];

    public function transport_type()
    {
        return $this->belongsTo(TransportType::class);
    }

    protected $casts = [
        'transport_type_id' => 'integer'
    ];

}
