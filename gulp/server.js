var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('server', ['browserify.serve', 'inject'], server);

function server() {
	browserSync({
		startPath: '/',

		server: {
			baseDir: ['.tmp', 'src'],
			index: 'index.html',
			routes: {
				'/bower_components': 'bower_components',
				'/.tmp': '.tmp'
			}
		},

		files: ['.tmp/**/*', 'src/app/**/*.html'],

		// silent log
		logLevel: 'silent'
	});
}
