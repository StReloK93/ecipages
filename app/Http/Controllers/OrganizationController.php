<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Models\Success;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\UserOrganizationRole;
class OrganizationController extends BaseCrudController
{
    protected string $model = Organization::class;
    public function index(Request $request)
    {

        $date = Carbon::parse($request->date)->timezone('Asia/Tashkent');
        $month = $date->month;
        $year = $date->year;


        return Organization::with([
            'success' => function ($query) use ($month, $year) {
                $query->whereMonth('month', $month)
                    ->whereYear('month', $year);
            }
        ])->get();
    }

    public function transports(Request $request)
    {
        $organization = Organization::with('transport_types')->find($request->id);

        return $organization;
    }

    public function aviableOrganizations(Request $request)
    {
        $user = $request->user();
        $date = Carbon::parse($request->date)->timezone('Asia/Tashkent');

        // 1-25 kun oralig‘ida oldingi oyning success'i ishlaydi
        // 26-kundan boshlab shu oyniki ishlaydi
        $successDate = $date->day <= 25
            ? $date->copy()->subMonth()
            : $date->copy();

        return Organization::whereIn(
            'organizations.id',
            $user->organization_roles()->pluck('organization_id')
        )
            ->join('user_organization_roles as uor', function ($join) use ($user) {
                $join->on('uor.organization_id', '=', 'organizations.id')
                    ->where('uor.user_id', $user->id);
            })
            ->select([
                'organizations.*',
                'uor.can_success',
                'uor.can_change',
            ])
            ->with([
                'success' => fn($q) => $q
                    ->whereMonth('month', $successDate->month)
                    ->whereYear('month', $successDate->year)
            ])
            ->get();
    }

    public function successCurrentMonth(Request $request)
    {

        $role = $request->user()->organization_roles()
            ->where('organization_id', $request->organization_id)
            ->where('can_success', true)
            ->first();

        if (!$role) {
            abort(403, 'Sizda bu amalni bajarish uchun ruxsat yo\'q');
        }
        $date = Carbon::parse($request->date)->timezone('Asia/Tashkent');

        $current = Success::where('organization_id', $request->organization_id)
            ->whereMonth('month', $date->month)
            ->whereYear('month', $date->year)
            ->first();

        if ($current) {
            return $current->delete();
        }

        return Success::create([
            'organization_id' => $request->organization_id,
            'month' => $date,
            'user_id' => $request->user()->id,
            'state' => 1
        ]);
    }
}
