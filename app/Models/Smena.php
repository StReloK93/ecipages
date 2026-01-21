<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Smena extends Model
{
    use HasFactory;

    public $timestamps = false;


    protected $fillable = [
        'organization_id',
        'name',
        'formula',
    ];


    protected $casts = [
        'formula' => 'array'
    ];

}
