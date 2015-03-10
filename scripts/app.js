var app = angular.module("libreriaVirtual", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		// Home.
		.state('home', {
			url : '/home',
			templateUrl : 'Partials/home.html'
		})
		// Recover password.
		.state('home.modal-recover-password',{
			views : {
				modal : {
					templateUrl : 'Partials/form-recover-password.html'
				}
			},
			controller : 'libreriaVirtual.PasswordRecoverController as recover'
		});

});

// Recover password controller.
app.controller('PasswordRecoverController', function(){
	var $this = this;

	this.password = null;

	this.sendEmail = function(givenEmail, givenPassword){
		var user = Query('users','email',givenPassword);

		if( user ){
			$this.password = true;
		} else {
			$this.password = false;
		}

	}

})