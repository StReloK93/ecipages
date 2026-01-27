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
        Schema::create('transports', function (Blueprint $table) {
            $table->id();
            $table->integer('transport_list_id');
            $table->string('garage_number');
            $table->integer('smena_id')->nullable();
            $table->date('start_smena_day')->nullable();
            $table->timestamps();

            $table->unique(['transport_list_id', 'garage_number']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transports');
    }
};
