var app = angular.module("libreriaVirtual", ['ui.router','ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider ){

	// $locationProvider.html5Mode({
	//   enabled: true,
	//   requireBase: false
	// });

	var header = {
		admin 		: 'Partials/menu-admin.html',
		director    : 'Partials/menu-director.html',
		profesor	: 'Partials/menu-profesor.html',
		dean		: 'Partials/menu-dean.html',
		student     : 'Partials/menu-student.html',
		controller 	: 'menuController as menuCtrl'
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
					controller  : header.controller
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
				header : {
					templateUrl : header.admin,
					controller  : header.controller
				},
				body : {
					templateUrl : '/Partials/info-consult-student.html'
				}
			}
		})
		.state('admin-consult-rubrics',{
			url : '/admin/consult/rubrics',
			views : {
				header : {
					templateUrl : header.admin,
					controller  : header.controller
				},
				body : {
					templateUrl : '/Partials/info-rubric-dropdown-table.html',
					controller  : 'dropdownController as dpCtrl' 
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
					templateUrl : header.teacher,
					controller  : header.controller
				},
				body : {
					template: '<h1>Hola! yo soy un profe.</h1>'
				}
			}
		});

	// Student's views and partials
	$stateProvider
		// Student's profile view.
		.state('student', {
			url : '/student/profile',
			views: {
				header : {
					templateUrl : header.student,
					controller  : header.controller
				},
				body : {
					template: '<h1>Hola! yo soy un Estudiante.</h1>'
				}
			}
		});

	// Director's views and partials
	$stateProvider
		// Director's profile view.
		.state('director', {
			url : '/director/profile',
			views: {
				header : {
					templateUrl : header.director,
					controller  : header.controller
				},
				body : {
					template: '<h1>Hola! yo soy un Director.</h1>'
				}
			}
		});

	// Dean's views and partials
	$stateProvider
		// Dean's profile view.
		.state('dean', {
			url : '/dean/profile',
			views: {
				header : {
					templateUrl : header.dean,
					controller  : header.controller
				},
				body : {
					template: '<h1>Hola! yo soy un deacano.</h1>'
				}
			}
		});

});

/*
app.run(function($rootScope, $state){
     $rootScope
    	.$on('$viewContentLoaded',
             function(event, viewConfig){ 
                var	sesion 	= JSON.parse( localStorage.getItem('sesion') ),
                	urlRol	= window.location.hash.split('/')[1],
                	rol 	= sesion.rol;
               	
            	if( sesion ){
            		if( rol !== urlRol ){
            			$state.go('home');
            		}
            	}
         });

});
*/


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
				var sesion = {
					rol   : rol,
					user  : user
				}
				localStorage.setItem('sesion',JSON.stringify(sesion));
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
    this.logOut = function(){
    	localStorage.setItem('sesion','{}');
    };
});
//Tables controller.
app.controller('infoController', function() {
	this.students = Query('users','rol',2); //this hace referencia al controlador
	this.courses = Query('courses');
});