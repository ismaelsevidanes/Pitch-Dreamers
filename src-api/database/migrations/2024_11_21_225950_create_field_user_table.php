<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFieldUserTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Crea la tabla intermedia 'field_user' para la relación muchos a muchos
        Schema::create('field_user', function (Blueprint $table) {
            $table->id(); // Columna de clave primaria
            $table->foreignId('field_id')->constrained()->onDelete('cascade'); // Clave foránea a la tabla 'fields'
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Clave foránea a la tabla 'users'
            $table->timestamps(); // Columnas para 'created_at' y 'updated_at'
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Elimina la tabla 'field_user' si existe
        Schema::dropIfExists('field_user');
    }
}