<?php

namespace App\Services;

use Carbon\Carbon;
class Helpers
{
   public static function resolveSuccessRange(Carbon $date): array
   {
      if ($date->day >= 25) {
         return [
            $date->copy()->startOfDay(),                          // 25-aprel
            $date->copy()->addMonthNoOverflow()->day(24)->endOfDay(), // 24-may
         ];
      }

      return [
         $date->copy()->subMonthNoOverflow()->day(25)->startOfDay(), // 25-mart
         $date->copy()->day(24)->endOfDay(),                         // 24-aprel
      ];
   }
}