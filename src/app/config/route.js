// require using aliasify defined in package.json
var ngmodules = require('app/ngmodules.js');

ngmodules.config.config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/login');

	$stateProvider

		.state('guest', {
			abstract: true,
			templateUrl: '/app/guest/guest.html'
		})

		.state('guest.login', {
			url: '/login',
			templateUrl: '/app/guest/login/login.html',
			controller: 'GuestLoginController',
			controllerAs: 'Login'
		});

}
