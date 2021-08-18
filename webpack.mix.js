let mix = require('laravel-mix');
require('mix-html-builder');

mix.html({
    htmlRoot: "./src/pages/*.html", // Your html root file(s)
    output: 'dist', // The html output folder
    partialRoot: './src/partials',    // default partial path
    layoutRoot: './src/layouts',    // default partial path
    minify: {
        removeComments: true
    }
});

mix.js('src/assets/js/app.js', 'dist/js')
	.sass('src/assets/scss/app.scss' , 'dist/css')
	.setPublicPath('./');