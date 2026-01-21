<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lavozim extends Model
{
    use HasFactory;

    protected $with = ['transportType'];

    protected $fillable = [
        'name',
        'organization_id',
        'transport_type_id',
    ];
    protected $casts = [
        'transport_type_id' => 'integer',
    ];

    public function transportType()
    {
        return $this->belongsTo(TransportType::class);
    }
    // 933148109
}
