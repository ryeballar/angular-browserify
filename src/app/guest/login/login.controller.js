// require using aliasify defined in package.json
var ngmodules = require('app/ngmodules.js');

ngmodules.guest.controller(
	'GuestLoginController',
	GuestLoginController
);

function GuestLoginController() {
	var self = this;

	self.data = {
		email: 'fake@gmail.com',
		password: 'password'
	};
}
