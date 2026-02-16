<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransportList extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'transport_type_id',
    ];
    protected $with = ['transportType'];

    public function transportType()
    {
        return $this->belongsTo(TransportType::class);
    }


    public function transports()
    {
        return $this->hasMany(Transport::class)->orderByRaw("
            TRY_CAST(
                SUBSTRING(
                    garage_number,
                    1,
                    PATINDEX('%[^0-9]%', garage_number + 'X') - 1
                ) AS INT
            )")
            ->orderByRaw("
            SUBSTRING(
                garage_number,
                PATINDEX('%[^0-9]%', garage_number + 'X'),
                LEN(garage_number)
            )");
    }

    public function employes()
    {
        return $this->hasMany(Employe::class);
    }

    protected $casts = [
        'transport_type_id' => 'integer'
    ];

}
