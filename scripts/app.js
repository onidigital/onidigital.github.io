var app = angular.module("libreriaVirtual", ['ui.router','ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider ){

	// $locationProvider.html5Mode({
	//   enabled: true,
	//   requireBase: false
	// });

	
	$urlRouterProvider.when('/dean','dean/profile');
	$urlRouterProvider.when('/director','director/profile');
	$urlRouterProvider.when('/teacher','teacher/profile');
	$urlRouterProvider.when('/student','student/profile');
	$urlRouterProvider.otherwise('/');

	// Landing page views.
	$stateProvider
		// Home.
		.state('home', {
			url : '/',
			templateUrl : 'Partials/home.html'
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
	$urlRouterProvider.when('/admin','admin/profile');
	$stateProvider
		// Admin base template.
		.state('admin',{
			url 		: '/admin',
			templateUrl : 'Partials/admin.html'
		})
		.state('admin.profile',{
			url 		: '/profile',
			template 	: '<h1>Admin. :D</h1>'
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
		var user 	= Query('users','email',$this.user.email)[0],
			rol  	= Query('rol','id',user.rol)[0];

		if( user ){
			if(user.password === $this.user.password){
				var session = {
					rolCode	: rol['code'],
					user  	: user,
					rol 	: rol['name']
				}
				localStorage.setItem('sesion',JSON.stringify(session));
				$state.go(session.rolCode);
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