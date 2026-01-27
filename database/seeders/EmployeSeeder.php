<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Employe;
use App\Models\TransportList;
use Illuminate\Support\Str;
class EmployeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $transportLists = TransportList::pluck('id');

        if ($transportLists->isEmpty()) {
            return;
        }

        $names = [
            'Aziz',
            'Bekzod',
            'Jamshid',
            'Dilshod',
            'Sherzod',
            'Akmal',
            'Sardor',
            'Ulugbek',
            'Jasur',
            'Rustam',
            'Otabek',
            'Murod',
            'Shoxrux',
            'Alisher',
            'Bobur',
        ];

        $families = [
            'Soliyev',
            'Karimov',
            'Aliyev',
            'Tursunov',
            'Islomov',
            'Abdullayev',
            'Raxmonov',
            'Qodirov',
            'Yuldashev',
            'Ergashev',
            'Xolmatov',
            'Nazarov',
            'Usmonov',
            'Toirov',
            'Shukurov',
        ];

        for ($i = 1; $i <= 30; $i++) {
            Employe::create([
                'name' => $names[array_rand($names)] . ' ' . $families[array_rand($families)],
                'table' => 'T-' . str_pad((string) $i, 2, '0', STR_PAD_LEFT),
                'razryad' => rand(3, 6),
                'transport_list_id' => $transportLists->random(),
            ]);
        }
    }
}
