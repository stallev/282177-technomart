
'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var run = require('run-sequence');
var del = require('del');
var rename = require('gulp-rename');
var ghPages = require('gulp-gh-pages');

gulp.task('style', function() {
  gulp.src('css/style.css')
    .pipe(plumber())
    .pipe(postcss([
      autoprefixer({browsers: [
        'last 2 versions'
      ]})
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('serve', ['style'], function() {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  
  gulp.watch('css/**/*.css', ['style']);
  gulp.watch('*.html', ['copyHtml']);
  gulp.watch('build/*.html').on('change', server.reload);
});

gulp.task('copy', function(){
  return gulp.src([
    'js/**',
    'img/*.svg',
    '*.html'
  ], {
    base: '.'
  })
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function(){
  return del('build');
});

gulp.task('copyHtml', function(){
  return gulp.src(['*.html'], {base: '.'})
    .pipe(gulp.dest('build'));
});

gulp.task('images', function() {
  return gulp.src('img/**/*.{jpg,png,gif}')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('build/img'));
});

gulp.task('build', function(fn){
  run('clean', 'copy', 'images', 'style', fn);
});

gulp.task('server', function(){
  run('build', 'serve');
});
gulp.task('deploy', function() {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});
