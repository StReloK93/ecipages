<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;

    protected $fillable = [
        'employe_id',
        'change_id',
        'transport_id',
        'lavozim_id',
    ];



    // protected $with = ['change', 'lavozim'];
    protected $with = ['employe'];

    public function change()
    {
        return $this->belongsTo(Change::class);
    }

    public function lavozim()
    {
        return $this->belongsTo(Lavozim::class);
    }

    public function employe()
    {
        return $this->belongsTo(Employe::class);
    }


    protected $casts = [
        'change_id' => 'integer',
        'employe_id' => 'integer',
        'transport_id' => 'integer',
        'lavozim_id' => 'integer',
    ];

}
