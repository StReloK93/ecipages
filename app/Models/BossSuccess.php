<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BossSuccess extends Model
{
    use HasFactory;


    protected $fillable = [
        'boss_profession_id',
        'month',
        'user_id',
        'state'
    ];
    protected $with = ['user'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
