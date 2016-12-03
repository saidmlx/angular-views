//--
var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var express     = require('express');
var connect     = require('gulp-connect');
var livereload  = require('gulp-livereload');
var sass        = require('gulp-sass');

var config={
  pathBootstrap   :'./node_modules/bootstrap/dist',
  pathHolder      :'./node_modules/holderjs',
  pathFullCalendar:'./node_modules/fullcalendar/dist',
  pathMoment      :'./node_modules/moment'
}

gulp.task('default',['html','copyCss','copyJs','js','server','watch']);



gulp.task('html',function(){
  gulp.src('./src/**/**.html')
  .pipe(gulp.dest('./public'))
   .pipe(connect.reload());
})

gulp.task('js',function(){
  gulp.src('./src/js/app.js')
  .pipe(browserify())
  .pipe(gulp.dest('./public/'))
  .pipe(connect.reload());
});


gulp.task('sass', function () {
  return gulp.src('./src/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});


gulp.task('fonts',function(){
  gulp.src('./src/fonts/**').pipe(gulp.dest('./public/fonts'))
});

gulp.task('copyCss',function(){
  gulp.src(config.pathBootstrap+'/css/bootstrap.css').pipe(gulp.dest('./public/css'))
  gulp.src(config.pathFullCalendar+'/fullcalendar.css').pipe(gulp.dest('./public/css'))
});

gulp.task('copyJs',function(){
  gulp.src(config.pathHolder+'/holder.js').pipe(gulp.dest('./public/js'))
  gulp.src(config.pathFullCalendar+'/fullcalendar.js').pipe(gulp.dest('./public/js'))
  gulp.src(config.pathFullCalendar+'/gcal.js').pipe(gulp.dest('./public/js'))
  gulp.src(config.pathMoment+'/moment.js').pipe(gulp.dest('./public/js'))
});


gulp.task('watch', function () {
  gulp.watch(['./src/**/**.html'], ['html']);
  gulp.watch(['./src/js/**/**.js'], ['js']);
  gulp.watch(['./src/styles/**/**.scss'], ['sass']);
});





gulp.task('server', function() {
  connect.server({
    root: 'public',
    livereload: true,
    port:5050
  });
});




/*

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/