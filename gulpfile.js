//--
var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var express     = require('express');
var connect     = require('gulp-connect');
var livereload  = require('gulp-livereload');

gulp.task('default',['html','js','server','watch'])


gulp.task('html',function(){
  gulp.src('./src/**/**.html').pipe(gulp.dest('./public/'));
})

gulp.task('js',function(){
  gulp.src('./src/js/app.js')
  .pipe(browserify())
  .pipe(gulp.dest('./public/'))
})

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch(['./src/js/*.js'], ['js']);
});



gulp.task('server', function() {
  connect.server({
    root: 'public',
    livereload: true,
    port:5050
  });
});
