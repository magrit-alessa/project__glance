"use strict"

var gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync').create(),
prefix = require('gulp-autoprefixer'),
cssmin = require('gulp-clean-css');

var paths = {

	devDir: 'app/'

};



gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.sass')
	.pipe(sass().on('error', sass.logError))
  .pipe(prefix ({
    	browers:['last 10 versions'],
			cascade: true
    }))
    .pipe(gulp.dest('app/css/'))
		.pipe(browserSync.stream());
});



gulp.task('watch', function(){
	gulp.watch('**/*.sass', ['sass']);
});

gulp.task('browser-sync', function () {
	browserSync.init({
		server:{
		port: 3000,
    baseDir:"app"
		}
	});
});

 gulp.task('default', ['browser-sync', 'watch', 'sass' ]);
