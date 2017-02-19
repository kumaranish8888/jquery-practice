var gulp = require('gulp'),
  connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');
 
gulp.task('connect', function() {
  connect.server();
});

 
gulp.task('lint', function() {
  return gulp.src('./app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

 
gulp.task('concat', function() {
  return gulp.src('./app/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify', function(){
    return gulp.src('./app/*.js')
        .pipe(concat('concat.js'))
        .pipe(rename('uglify.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
 
gulp.task('default', ['connect']);