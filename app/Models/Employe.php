<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    use HasFactory;


    protected $with = ['lavozim', 'organization'];
    protected $fillable = [
        'name',
        'table',
        'lavozim_id',
        'organization_id',
    ];
    protected $casts = [
        'lavozim_id' => 'integer',
        'organization_id' => 'integer',
    ];


    public function lavozim()
    {
        return $this->belongsTo(Lavozim::class);
    }

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }
}
