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
use App\Models\Group;
use App\Models\Smena;
class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
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
                ['name' => 'A', 'name_ru' => 'А'],
                ['name' => 'B', 'name_ru' => 'Б'],
                ['name' => 'V', 'name_ru' => 'В'],
                ['name' => 'G', 'name_ru' => 'Г'],
                ['name' => 'D', 'name_ru' => 'Д'],
                ['name' => 'E', 'name_ru' => 'Е'],
            ],
            ['name', 'name_ru']
        );


        TransportType::upsert(
            [
                ['name' => "Burg'ulash uskunasi"],
                ['name' => "Ekskavator"],
            ],
            ['name']
        );


        Group::upsert(
            [
                ['tabel' => '11111', 'change_id' => 1, 'transport_id' => 1, 'lavozim_id' => 1],
                ['tabel' => '11112', 'change_id' => 1, 'transport_id' => 1, 'lavozim_id' => 2],

                ['tabel' => '11113', 'change_id' => 2, 'transport_id' => 1, 'lavozim_id' => 1],
                ['tabel' => '11114', 'change_id' => 2, 'transport_id' => 1, 'lavozim_id' => 2],

                ['tabel' => '11115', 'change_id' => 3, 'transport_id' => 1, 'lavozim_id' => 1],
                ['tabel' => '11116', 'change_id' => 3, 'transport_id' => 1, 'lavozim_id' => 2],

                ['tabel' => '11117', 'change_id' => 4, 'transport_id' => 1, 'lavozim_id' => 1],
                ['tabel' => '11118', 'change_id' => 4, 'transport_id' => 1, 'lavozim_id' => 2],


                ['tabel' => '22221', 'change_id' => 1, 'transport_id' => 2, 'lavozim_id' => 1],
                ['tabel' => '22222', 'change_id' => 1, 'transport_id' => 2, 'lavozim_id' => 2],

                ['tabel' => '22223', 'change_id' => 2, 'transport_id' => 2, 'lavozim_id' => 1],
                ['tabel' => '22224', 'change_id' => 2, 'transport_id' => 2, 'lavozim_id' => 2],

                ['tabel' => '22225', 'change_id' => 3, 'transport_id' => 2, 'lavozim_id' => 1],
                ['tabel' => '22226', 'change_id' => 3, 'transport_id' => 2, 'lavozim_id' => 2],

                ['tabel' => '22227', 'change_id' => 4, 'transport_id' => 2, 'lavozim_id' => 1],
                ['tabel' => '22228', 'change_id' => 4, 'transport_id' => 2, 'lavozim_id' => 2],

                ['tabel' => '33331', 'change_id' => 1, 'transport_id' => 3, 'lavozim_id' => 1],
                ['tabel' => '33332', 'change_id' => 1, 'transport_id' => 3, 'lavozim_id' => 2],

                ['tabel' => '33333', 'change_id' => 2, 'transport_id' => 3, 'lavozim_id' => 1],
                ['tabel' => '33334', 'change_id' => 2, 'transport_id' => 3, 'lavozim_id' => 2],

                ['tabel' => '33335', 'change_id' => 3, 'transport_id' => 3, 'lavozim_id' => 1],
                ['tabel' => '33336', 'change_id' => 3, 'transport_id' => 3, 'lavozim_id' => 2],

                ['tabel' => '33337', 'change_id' => 4, 'transport_id' => 3, 'lavozim_id' => 1],
                ['tabel' => '33338', 'change_id' => 4, 'transport_id' => 3, 'lavozim_id' => 2],
            ],
            ['tabel', 'change_id', 'transport_id', 'lavozim_id']
        );

        Organization::upsert(
            [
                ['name' => "Auminzo-Amantoy koni"],
                ['name' => "'Sharqiy' ochiq usulda qazib olish koni"],
                ['name' => "Avtomobil transport boshqarmasi"],
            ],
            ['name']
        );



        Transport::upsert(
            [
                ['organization_id' => 1, 'transport_list_id' => 1, 'smena_id' => 1, 'garage_number' => 22],
                ['organization_id' => 1, 'transport_list_id' => 2, 'smena_id' => 1, 'garage_number' => 44],
                ['organization_id' => 1, 'transport_list_id' => 2, 'smena_id' => 1, 'garage_number' => 23],
                ['organization_id' => 1, 'transport_list_id' => 3, 'smena_id' => 1, 'garage_number' => 41],
                ['organization_id' => 1, 'transport_list_id' => 4, 'smena_id' => 1, 'garage_number' => 11],
                ['organization_id' => 1, 'transport_list_id' => 5, 'smena_id' => 1, 'garage_number' => 12],

                ['organization_id' => 2, 'transport_list_id' => 2, 'smena_id' => 1, 'garage_number' => 23],
                ['organization_id' => 2, 'transport_list_id' => 2, 'smena_id' => 1, 'garage_number' => 24],
                ['organization_id' => 2, 'transport_list_id' => 1, 'smena_id' => 1, 'garage_number' => 25],
                ['organization_id' => 2, 'transport_list_id' => 1, 'smena_id' => 1, 'garage_number' => 26],
                ['organization_id' => 2, 'transport_list_id' => 4, 'smena_id' => 1, 'garage_number' => 27],
                ['organization_id' => 2, 'transport_list_id' => 6, 'smena_id' => 1, 'garage_number' => 28],

                ['organization_id' => 3, 'transport_list_id' => 2, 'smena_id' => 1, 'garage_number' => 32],
                ['organization_id' => 3, 'transport_list_id' => 2, 'smena_id' => 1, 'garage_number' => 33],
                ['organization_id' => 3, 'transport_list_id' => 2, 'smena_id' => 1, 'garage_number' => 34],
                ['organization_id' => 3, 'transport_list_id' => 3, 'smena_id' => 1, 'garage_number' => 35],
                ['organization_id' => 3, 'transport_list_id' => 5, 'smena_id' => 1, 'garage_number' => 37],
                ['organization_id' => 3, 'transport_list_id' => 6, 'smena_id' => 1, 'garage_number' => 38],
            ],
            ['organization_id', 'transport_list_id', 'garage_number']
        );




        Lavozim::upsert(
            [
                ['name' => 'Ekskavator mashinisti', 'name_ru' => 'Машинист экскаватора', 'transport_type_id' => 2],
                ['name' => 'Ekskavator mashinisti yordamchisi', 'name_ru' => 'Помощник машиниста экскаватора', 'transport_type_id' => 2],
            ],
            ['name', 'transport_type_id']
        );



        Smena::create(['name' => 'Kun va Tun', 'formula' => json_decode('{"first":{"1":1,"2":2,"3":3,"4":4},"second":{"1":4,"2":1,"3":2,"4":3}}', true)]);
        Smena::create(['name' => '7 - Kunlik', 'formula' => json_decode('{"first":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":3,"9":3,"10":3,"11":3,"12":3,"13":3,"14":3,"15":2,"16":2,"17":2,"18":2,"19":2,"20":2,"21":2,"22":4,"23":4,"24":4,"25":4,"26":4,"27":4,"28":4},"second":{"1":2,"2":2,"3":2,"4":2,"5":2,"6":2,"7":2,"8":4,"9":4,"10":4,"11":4,"12":4,"13":4,"14":4,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":3,"23":3,"24":3,"25":3,"26":3,"27":3,"28":3}}', true)]);

    }
}
