<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'field_id',
        'start_time',
        'end_time',
        'total_price',
    ];

    // Relación muchos a muchos con User
    public function users()
    {
        return $this->belongsToMany(User::class, 'reservation_user');
    }

    // Relación uno a muchos con Field
    public function field()
    {
        return $this->belongsTo(Field::class);
    }

    // Relación uno a uno con Payment
    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
}