<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Models\User;
use App\Models\UserOrganizationRole;
class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('inspire')->hourly();

        $schedule->call(function () {
            $users = User::all();

            foreach ($users as $key => $user) {
                UserOrganizationRole::firstOrCreate([
                    'user_id' => $user->id,
                    'organization_id' => $user->organization_id
                ], [
                    'can_change' => true,
                    'can_success' => false
                ]);
            }
        })
            ->name('sync:user-organization-roles')
            ->everyMinute()->withoutOverlapping();


    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
