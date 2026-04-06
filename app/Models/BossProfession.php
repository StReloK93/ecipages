<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BossProfession extends Model
{
    use HasFactory;

    public function success(): HasMany
    {
        return $this->hasMany(BossSuccess::class);
    }

    protected $casts = [
        'can_success' => 'boolean',
    ];
}
