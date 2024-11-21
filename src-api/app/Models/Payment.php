<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'reservation_id',
        'amount',
        'payment_method',
        'paid_at',
    ];

    // Relación uno a uno con Reservation
    public function reservation()
    {
        return $this->belongsTo(Reservation::class);
    }
}