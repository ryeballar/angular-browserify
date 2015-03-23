var angular = require('angular');

module.exports = {
	app: angular.module('app', [
		'app.config',
		'app.guest'
	]),
	config: angular.module('app.config', ['ui.router']),
	guest: angular.module('app.guest', []),
};
