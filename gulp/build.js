var gulp				= require('gulp'),
	$					= require('gulp-load-plugins')(),
	del					= require('del'),
	runSequence			= require('run-sequence'),
	uglifySaveLicense 	= require('uglify-save-license'),

	assets,
	sources,
	destination,

sources = [
	'.tmp/index.html',
	'src/**/*.html',
	'!src/index.html'
];

destination = 'dist';

gulp.task('clean', function(done) {
	del(['.tmp', 'dist'], function() {
		done();
	});
});

gulp.task('build.finalize', function() {

	return gulp.src(sources)

		.pipe(assets = $.useref.assets())

		.pipe($.rev())

		.pipe($.if('*.js',
			$.ngAnnotate(),
			$.uglify({preserveComments: uglifySaveLicense}))
		)

		.pipe(assets.restore())

		.pipe($.useref())

		.pipe($.revReplace())

		.pipe($.if('*.html', $.minifyHtml({
			empty: true,
			spare: true,
			quotes: true
		})))

		.pipe(gulp.dest(destination));

});

gulp.task('build', function() {
	runSequence(
		'clean',
		'browserify.build',
		'inject',
		'build.finalize'
	);
});
