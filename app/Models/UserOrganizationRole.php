<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserOrganizationRole extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'organization_id',
        'can_change',
        'can_success'
    ];


    protected $casts = [
        'user_id' => 'integer',
        'organization_id' => 'integer',
        'can_change' => 'boolean',
        'can_success' => 'boolean'
    ];

    protected $with = ['organization'];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }
}
