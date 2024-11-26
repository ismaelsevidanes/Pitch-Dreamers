<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Session\Middleware\StartSession;

class StartSessionMiddleware extends StartSession
{
    public function handle($request, Closure $next)
    {
        return parent::handle($request, $next);
    }
}
