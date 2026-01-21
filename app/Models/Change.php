<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Change extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name',
    ];
}



//  A1 -- -- A2 -- -- -- -- A1 -- -- A2 -- -- -- -- A1 -- -- A2 -- -- -- --
//  -- B2 -- -- -- -- B1 -- -- B2 -- -- -- -- B1 -- -- B2 -- -- -- -- B1 --
//  -- -- C1 -- -- C2 -- -- -- -- C1 -- -- C2 -- -- -- -- C1 -- -- C2 -- --
//  -- -- -- -- D1 -- -- D2 -- -- -- -- D1 -- -- D2 -- -- -- -- D1 -- -- D2