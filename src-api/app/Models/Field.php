<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Field extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'directions',
        'location',
        'price_per_hour',
    ];

    // Relación muchos a muchos con User
    public function users()
    {
        return $this->belongsToMany(User::class, 'field_user');
    }

    // Relación uno a muchos con Reservation
    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}    
