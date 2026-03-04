<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employe_transport_lists', function (Blueprint $table) {
            $table->id();
            $table->integer('employe_id');
            $table->integer('transport_list_id');


            $table->timestamps();

            $table->unique(['employe_id', 'transport_list_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employe_transport_lists');
    }
};
