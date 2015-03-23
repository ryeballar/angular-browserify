var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.watch([
		'bower.json',
		'src/index.html'
	], ['inject']);
});
