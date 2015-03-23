var gulp 	= require('gulp'),
	$		= require('gulp-load-plugins')(),
	mbf 	= require('main-bower-files');

gulp.task('inject.html', injectHtml);
gulp.task('inject.scss', injectScss);
gulp.task('inject', ['inject.html', 'inject.scss']);

function injectHtml() {
	var target = gulp.src('src/index.html'),
		sources = gulp.src([
			'./.tmp/**/*.js',
			'./.tmp/**/*.css',
			'!./src/**/*.spec.js',
		], { read: false }),
		bower = gulp.src(
			mbf(),
			{ read: false }
		);

	return target
		.pipe($.inject(sources))
		.pipe($.inject(bower, { name: 'bower' }))
		.pipe(gulp.dest('.tmp'));
}

function injectScss() {

}
