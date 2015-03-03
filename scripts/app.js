var app = angular.module("libreriaVirtual", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url : '/home',
			templateUrl : 'Partials/home.html'
		});

});