<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Change;
class ChangeController extends BaseCrudController
{

    protected string $model = Change::class;

}
