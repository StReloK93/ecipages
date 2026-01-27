<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransportType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'organization_id',
    ];

    protected $with = ['lavozims'];


    public function lavozims()
    {
        return $this->hasMany(Lavozim::class);
    }
}
