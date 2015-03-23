var gulp = require('gulp'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	vinylSource = require('vinyl-source-stream');

var bundler;
var source = './src/app/index.js';
var destination = './.tmp';

gulp.task('browserify.serve', function() {
	bundler = watchify(browserify(source, watchify.args));
	bundler.on('update', bundle);
	return bundle();
});

gulp.task('browserify.build', function() {
	bundler = browserify(source);
	return bundle();
});

function bundle() {
	return bundler.bundle()
		.on('error', function(err) { console.log(err); })
		.pipe(vinylSource('index.js'))
		.pipe(gulp.dest(destination));
}

