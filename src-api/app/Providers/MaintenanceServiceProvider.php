<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\MaintenanceModeManager;
use Illuminate\Support\Facades\Cache;

class MaintenanceServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('maintenance.driver', function ($app) {
            return new MaintenanceModeManager($app);
        });

        $this->app->singleton('files', function () {
            return new \Illuminate\Filesystem\Filesystem;
        });
    }
}
