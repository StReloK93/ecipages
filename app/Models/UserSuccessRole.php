<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSuccessRole extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'boss_profession_id',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'boss_profession_id' => 'integer',
    ];

    protected $with = ['boss_profession'];

    public function boss_profession()
    {
        return $this->belongsTo(BossProfession::class, 'boss_profession_id', 'id');
    }
}
