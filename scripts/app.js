var app = angular.module("libreriaVirtual", ['ui.router','ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});

	var header = {
		admin : 'Partials/menu-admin.html'
	}

	$urlRouterProvider.otherwise('/home');

	// Landing page views.
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
					templateUrl : 'Partials/form-recover-password.html',
					controller : 'PasswordRecoverController as recover'
				}
			}
		});
	
	// Admin views and partials.
	$stateProvider
		// Admin profile view.
		.state('admin',{
			url: '/admin/profile',
			views: {
				header : {
					templateUrl : header.admin,
					controller  : 'menuController as menuCtrl'
				},
				body : {
					templateUrl: 'Partials/profile-admin.html'
				}
			}
		})
		// Admin consult student
		.state('admin-consult-students',{
			url : '/admin/consult/students',
			views : {
				header : header.admin;
				body : {
					template : 'HURRAY'
				}
			}
		});

	// Teacher's views and partials
	$stateProvider
		// Teacher's profile view.
		.state('teacher',{
			url : '/teacher/profile',
			views: {
				header : {
					templateUrl : 'Partials/menu-teacher.html',
					controller  : 'menuController as menuCtrl'
				},
				body : {
					template: '<h1>Hola! yo soy un profe.</h1>'
				}
			}
		});

});

// Login controller
app.controller('loginController', ['$state',function($state){
	var $this = this;
	this.user = {};
	this.user.email;
	this.user.password;

	this.validate = function(){
		var user = Query('users','email',$this.user.email),
			rol  = Query('rol','id',user.rol).code;

		if( user ){
			if(user.password === this.user.password){
				$state.go(rol);
			} else {
				alert("contraseña invalida.");
			}
		} else {
			alert("Usuario invalido.");
		}

	}

}]);
// Recover password controller.
app.controller('PasswordRecoverController', function(){
	var $this = this;

	this.showMessage = null;

	this.sendEmail = function(givenEmail){
		var user = Query('users','email',givenEmail);

		if( user ){
			$this.showMessage = true;
		} else {
			$this.showMessage = false;
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