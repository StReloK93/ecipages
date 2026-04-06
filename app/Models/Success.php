<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Success extends Model
{
    use HasFactory;

    protected $with = ['user'];



    protected $fillable = [
        'user_id',
        'organization_id',
        'month',
        'state',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
