<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FieldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Inserta datos de prueba en la tabla 'fields'
        DB::table('fields')->insert([
            [
                'name' => 'Campo de Fútbol 1',
                'description' => 'Campo de fútbol con césped natural.',
                'location' => 'Calle Fútbol, 123',
                'price_per_hour' => 50.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Campo de Fútbol 2',
                'description' => 'Campo de fútbol con césped artificial.',
                'location' => 'Avenida Deportes, 456',
                'price_per_hour' => 40.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Campo de Fútbol 3',
                'description' => 'Campo de fútbol con iluminación nocturna.',
                'location' => 'Plaza Deporte, 789',
                'price_per_hour' => 60.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Campo de Fútbol 4',
                'description' => 'Campo de fútbol con césped artificial.',
                'location' => 'Calle Deportes, 1011',
                'price_per_hour' => 45.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Campo de Fútbol 5',
                'description' => 'Campo de fútbol con césped natural.',
                'location' => 'Avenida Fútbol, 1213',
                'price_per_hour' => 55.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'name' => 'Campo de Fútbol 6',
                'description' => 'Campo de fútbol con césped artificial.',
                'location' => 'Calle Deporte, 1415',
                'price_per_hour' => 45.00,
                'created_at' => now(),
                'updated_at' => now(),

            ],




        ]);
    }
}
