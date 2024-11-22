# PITCH DREAMERS

#### Curso Escolar 2024-2025
#### Autor: [Ismael Sevidanes Del Moral](https://github.com/ismaelsevidanes/)
#### Tutor: [Antonio Gabriel González Casado](https://github.com/prof-antonio-gabriel)
#### Fecha de Inicio: 01-10-2024
#### Fecha de Finalización: xx-x-2024

## Breve descripción del proyecto

Este proyecto trata de una aplicación web sobre el funcionamiento de poder reservar y
alquilar campos de fútbol de la localidad de Sevilla principalmente , ya sea campos de fútbol
7 como fútbol 11, en campos memorables y de césped artificial como natural, de equipos de
pueblos o incluso campos de categorías mayores, donde sus prestaciones son mayores.

## Objetivo de la aplicación  
- **¿Qué va a hacer la aplicación?**  
    Pitch Dreamers es una aplicacion web que permite reservar y alquilar campos de futbol de forma sencilla y online.
    
    
- **¿Cuál es su atractivo principal?**  
    Las Principales características atractivas son: Operar de forma online,la facilidad de uso, intutivo para todos los usuarios y clara navegación.Poder conocer a personas y jugar con ellos.
 
     
- **¿Qué problema concreto va a resolver?**  
    El problema que resuelve la aplicación es la dificultad de reservar campos de fútbol de diversas ciudades o pueblos, teniendo que tener concacto con algun gerente de alli o reservar de forma 
    presencial a cierta hora.
      
      
- **¿Qué necesidad va a cubrir?**  
    Las necesidades que cubre son poder usar la aplicacion de forma sencilla y de forma online para poder jugar al fútbol con tus amigos o con personas que también reserven en el mismo campo y hora que 
    tu reserva.

## Estructura del Proyecto

    src-api (Laravel)
    src-frontend (React)
    docs
    README.md


## Requisitos

- PHP >= 7.3
- Composer
- Node.js
- npm

## Instalación

### Backend (Laravel)

1. Instalar Composer (si no está instalado):

    ```bash
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
    php composer-setup.php
    php -r "unlink('composer-setup.php');"
    mv composer.phar /usr/local/bin/composer
    ```

2. Crear un nuevo proyecto de Laravel:

    ```bash
    cd src-api
    composer create-project --prefer-dist laravel/laravel .
    ```

### Frontend (React)

1. Instalar Node.js y npm (si no están instalados):

    ```bash
    # Descargar e instalar Node.js y npm desde https://nodejs.org/
    ```

2. Crear una nueva aplicación de React:

    ```bash
    cd ../src-frontend
    npx create-react-app .
    ```

## Ejecución del Proyecto

### Backend

Para ejecutar el servidor de desarrollo de Laravel:

```bash
cd src-api
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider" # Dependencia para Configurar CORS, para que se conencten el backend y frotend

composer require laravel/breeze --dev # Dependencia  Laravel Breeze es una implementación simple de autenticación que incluye registro, inicio de sesión, y restablecimiento de contraseña.
php artisan breeze:install

php artisan serve
```


### Frontend

Para ejecutar el servidor de React:

```bash

cd src-frontend
npm install # Depencia
npm audit fix --force

npm start
```
Paa ejecutar el servidor de React como Producion

```bash
npm install react-router-dom # Dependencia
npm install axios # Dependencia para las solicitudes HTTP:

npm run build
npm install -g serve
serve -s build
```


### Deploy
Crear fichero .env