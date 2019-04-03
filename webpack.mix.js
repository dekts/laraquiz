const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .extract(['vue'])
   .sass('resources/sass/app.scss', 'public/css')
   .scripts(['resources/js/datatables.min.js', 'resources/js/bootbox.min.js', 'resources/js/moment.min.js',
       'resources/js/bootstrap-datetimepicker.js', 'resources/js/common.js', 'resources/js/jquery.fieldsaddmore.js'
   ], 'public/js/all.js')
   .styles(['resources/css/datatables.min.css', 'resources/css/bootstrap-datetimepicker.css'], 'public/css/all.css')
   .copy('resources/css/dashboard.css', 'public/css/dashboard.css')
   .copy('resources/css/login.css', 'public/css/login.css')
   .copy('resources/css/winner.css', 'public/css/winner.css')
   .copy('resources/js/common/winner.js', 'public/js/winner.js')
   .copy('resources/js/common/quiz-login.js', 'public/js/quiz-login.js');

/**
 * can automatically monitor your files for changes, 
 * and inject your changes into the browser without requiring a manual refresh
 */
mix.browserSync('laravel-quiz.local');