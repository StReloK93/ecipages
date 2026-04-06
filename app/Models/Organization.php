<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Organization extends Model
{
    use HasFactory;


    protected $fillable = [
        'id',
        'name',
        'short_name',
    ];


    public function getCanSuccessAttribute($value)
    {
        return (bool) $value;
    }

    public function getCanChangeAttribute($value)
    {
        return (bool) $value;
    }

    public function transport_types(): HasMany
    {
        return $this->hasMany(TransportType::class);
    }


    public function success(): HasMany
    {
        return $this->hasMany(Success::class);
    }

}
