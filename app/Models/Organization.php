<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Organization extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'name_ru',
    ];

    public function transports(): HasMany
    {
        return $this->hasMany(Transport::class);
    }
}
