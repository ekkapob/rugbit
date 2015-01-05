var gulp 				= require('gulp');
var stylus 			= require('gulp-stylus');
var nodemon 		= require('gulp-nodemon');
var livereload  = require('gulp-livereload');

gulp.task('css', function(){
	gulp.src(['./public/css/stylus/*.styl'])
		.pipe(stylus())
		.pipe(gulp.dest('./public/css'))
		.pipe(livereload());
})

gulp.task('html', function(){
	gulp.src(['./public/*.html'])
		.pipe(livereload());
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch(['./public/css/stylus/*.styl'], ['css']);
	gulp.watch(['./public/*.html'], ['html']);
});

gulp.task('default', ['css', 'watch'], function(){
	nodemon({
		script: 'index.js',
		ext: 'js html'
	});
});
