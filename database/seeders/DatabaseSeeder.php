<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TransportType;
use App\Models\Organization;
use App\Models\Transport;
use App\Models\TransportList;
use App\Models\Change;
use App\Models\Lavozim;
use App\Models\Employe;
use App\Models\User;
use App\Models\Smena;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    public function run(): void
    {

        User::create([
            'name' => 'Admin',
            'login' => 'admin',
            'password' => Hash::make('123456'),
            'role' => 1,
            'organization_id' => 0,
        ]);

        User::create([
            'name' => 'Admin',
            'login' => 'sharqiy',
            'password' => Hash::make('zzzz1111*'),
            'role' => 0,
            'organization_id' => 1,
        ]);


        Organization::upsert(
            [
                ['name' => "Sharqiy ochiq usulda qazib olish koni", "short_name" => "Sharqiy koni"],
                ['name' => "Avtomobil transport boshqarmasi", "short_name" => "ATB"],
            ],
            ['name', 'short_name']
        );
        TransportType::upsert(
            [
                ['name' => "Burg'ulash uskunasi", 'organization_id' => 1],
                ['name' => "Ekskavator", 'organization_id' => 1],
            ],
            ['name', 'organization_id']
        );

        Lavozim::upsert(
            [
                ['name' => 'Mashinist', 'transport_type_id' => 2],
                ['name' => 'Mashinist yordamchisi', 'transport_type_id' => 2],
                ['name' => "Mashinist", 'transport_type_id' => 1],
                ['name' => "Mashinist yordamchisi", 'transport_type_id' => 1],
            ],
            ['name', 'transport_type_id']
        );



        Smena::create([
            'organization_id' => 1,
            'name' => 'Kun va Tun',
            'formula' => json_decode('{"first":{"1":1,"2":2,"3":3,"4":4},"second":{"1":4,"2":1,"3":2,"4":3}}', true)
        ]);
        Smena::create([
            'name' => '7 - Kunlik',
            'formula' => json_decode('{"first":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":3,"9":3,"10":3,"11":3,"12":3,"13":3,"14":3,"15":2,"16":2,"17":2,"18":2,"19":2,"20":2,"21":2,"22":4,"23":4,"24":4,"25":4,"26":4,"27":4,"28":4},
                                        "second":{"1":2,"2":2,"3":2,"4":2,"5":2,"6":2,"7":2,"8":4,"9":4,"10":4,"11":4,"12":4,"13":4,"14":4,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":3,"23":3,"24":3,"25":3,"26":3,"27":3,"28":3}}',
                true
            ),
            'organization_id' => 1
        ]);



        TransportList::upsert(
            [
                ['name' => "RH-40", 'transport_type_id' => 2],
                ['name' => "EKG-10", 'transport_type_id' => 2],
                ['name' => "LIEBHER", 'transport_type_id' => 2],
                ['name' => "СБШ-250", 'transport_type_id' => 1],
                ['name' => "ROC-L6", 'transport_type_id' => 1],
                ['name' => "СБУ-125", 'transport_type_id' => 1],
            ],
            ['name', 'transport_type_id']
        );


        Change::upsert(
            [
                ['name' => 'A'],
                ['name' => 'B'],
                ['name' => 'V'],
                ['name' => 'G'],
                ['name' => 'D'],
                ['name' => 'E'],
            ],
            ['name']
        );







    }
}


// Transport::upsert(
//     [
//         ['transport_list_id' => 1, 'smena_id' => 1, 'garage_number' => 22, 'start_smena_day' => '2026-01-01 00:00:00'],
//         ['transport_list_id' => 2, 'smena_id' => 1, 'garage_number' => 44, 'start_smena_day' => '2026-01-01 00:00:00'],
//         ['transport_list_id' => 2, 'smena_id' => 1, 'garage_number' => 23, 'start_smena_day' => '2026-01-01 00:00:00'],
//         ['transport_list_id' => 3, 'smena_id' => 1, 'garage_number' => 41, 'start_smena_day' => '2026-01-01 00:00:00'],
//         ['transport_list_id' => 4, 'smena_id' => 1, 'garage_number' => 11, 'start_smena_day' => '2026-01-01 00:00:00'],
//         ['transport_list_id' => 5, 'smena_id' => 1, 'garage_number' => 12, 'start_smena_day' => '2026-01-01 00:00:00'],

//         ['transport_list_id' => 2, 'smena_id' => 1, 'garage_number' => 24, 'start_smena_day' => '2026-01-01 00:00:00'],
//         ['transport_list_id' => 1, 'smena_id' => 1, 'garage_number' => 25, 'start_smena_day' => '2026-01-01 00:00:00'],
//         ['transport_list_id' => 1, 'smena_id' => 1, 'garage_number' => 26, 'start_smena_day' => '2026-01-01 00:00:00'],
//         ['transport_list_id' => 4, 'smena_id' => 1, 'garage_number' => 27, 'start_smena_day' => '2026-01-01 00:00:00'],
//         ['transport_list_id' => 6, 'smena_id' => 1, 'garage_number' => 28, 'start_smena_day' => '2026-01-01 00:00:00'],
//     ],
//     ['transport_list_id', 'garage_number']
// );




// $this->call([
//     EmployeSeeder::class,
// ]);
