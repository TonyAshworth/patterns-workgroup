// Gulpfile
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

gulp.task('name', function() {
	//implementation of the task
});

gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('assets'))
});

gulp.task('log', function() {
  gutil.log('== My Log Task ==')
});

gulp.task('sass', function() {
  gulp.src('styles/main.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets'))
});