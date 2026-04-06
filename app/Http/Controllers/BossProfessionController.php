<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BossProfession;
use App\Models\BossSuccess;
use Carbon\Carbon;
use DB;
class BossProfessionController extends Controller
{
    //
    public function index(Request $request)
    {

        return BossProfession::all();
    }


    public function aviableBossProfessions(Request $request)
    {
        $user = $request->user();
        $date = Carbon::parse($request->date)->timezone('Asia/Tashkent');
        $month = $date->month;
        $year = $date->year;

        return BossProfession::with([
            'success' => function ($query) use ($month, $year) {
                $query->whereMonth('month', $month)
                    ->whereYear('month', $year);
            }
        ])
            ->leftJoin('user_success_roles as uor', function ($join) use ($user) {
                $join->on('uor.boss_profession_id', '=', 'boss_professions.id')
                    ->where('uor.user_id', $user->id);
            })
            ->select([
                'boss_professions.*',
                DB::raw('CASE WHEN uor.boss_profession_id IS NOT NULL THEN CAST(1 AS bit) ELSE CAST(0 AS bit) END as can_success'),
            ])
            ->get();
    }


    public function successCurrentMonth(Request $request)
    {
        $date = Carbon::parse($request->date)->timezone('Asia/Tashkent');

        $current = BossSuccess::where('boss_profession_id', $request->boss_profession_id)
            ->whereMonth('month', $date->month)
            ->whereYear('month', $date->year)
            ->first();

        if ($current) {
            return $current->delete();
        }

        return BossSuccess::create([
            'boss_profession_id' => $request->boss_profession_id,
            'month' => $date,
            'user_id' => $request->user()->id,
            'state' => 1
        ]);
    }
}
