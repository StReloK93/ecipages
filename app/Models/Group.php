<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

    protected $with = ['change', 'lavozim'];

    public function change()
    {
        return $this->belongsTo(Change::class);
    }

    public function lavozim()
    {
        return $this->belongsTo(Lavozim::class);
    }


    protected $casts = [
        'change_id' => 'integer'
    ];

}
