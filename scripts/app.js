var app = angular.module("libreriaVirtual", ['ui.router','ngMaterial']);


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		// Home.
		.state('home', {
			url : '/home',
			views: {
				body: {
					templateUrl : 'Partials/home.html'
				}
			}
		})
		// Recover password.
		.state('home.modal-recover-password',{
			views : {
				modal : {
					templateUrl : 'Partials/form-recover-password.html'
				}
			},
			controller : 'libreriaVirtual.PasswordRecoverController as recover'
		})
		// Admin profile view.
		.state('admin',{
			url: '/admin/profile',
			views: {
				header : {
					templateUrl : 'Partials/header.html',
					controller  : 'menuController as menuCtrl'
				},
				body : {
					templateUrl : 'Partials/info_Consult.html',
					controller  : 'infoController as info'
				}
			}
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
// Menu Controller.
app.controller('menuController', function($scope, $timeout, $mdSidenav, $log) {
    $scope.toggle = function() {
        $mdSidenav('sideNav').toggle();
    };
    $scope.close = function() {
        $mdSidenav('sideNav').close();
    };
});
//Tables controller.
app.controller('infoController', function() {
	this.students = Query('users','rol',2); //this hace referencia al controlador
	this.courses = Query('courses');
});