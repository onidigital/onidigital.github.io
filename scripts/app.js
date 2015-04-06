var app = angular.module("libreriaVirtual", ['ui.router',	
											 'ngMaterial',
											 'resettableForm',
											 'angularUtils.directives.dirPagination'
											]);

app.config(function($stateProvider, $urlRouterProvider ){

	// $locationProvider.html5Mode({
	//   enabled: true,
	//   requireBase: false
	// });

	
	$urlRouterProvider.when('/dean','dean/profile');
	$urlRouterProvider.when('/director','director/profile');
	$urlRouterProvider.when('/teacher','teacher/profile');
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
	$urlRouterProvider.when('/admin/register','/admin/register/areas');
	$urlRouterProvider.when('/admin/search','/admin/search/areas');

	$stateProvider
		// Admin base template.
		.state('admin',{
			url 		: '/admin',
			templateUrl : 'Partials/admin.html'
		})
		.state('admin.profile',{
			url 		: '/profile',
			templateUrl	: '/Partials/profile-admin.html'
		})
		// Admin search information.
		.state('admin.search',{
			url 		: '/search',
			templateUrl : '/Partials/admin-search.html',
			controller  : 'searchInformationController as sInfoCtrl'
		})
		.state('admin.search.areas', {
			url 		: '/areas', 		
			templateUrl : '/Partials/info-consult-area.html',
			controller  : 'ConsultAreaController as cAreaCtrl'
		})
		.state('admin.search.students', {
			url 		: '/students', 		
			templateUrl : '/Partials/info-consult-student.html',
			controller  : 'ConsultStudentController as cStudentCtrl'
		})
		.state('admin.search.career', {
			url 		: '/career',
			templateUrl : '/Partials/info-consult-career.html',
			controller  : 'ConsultCareerController as cCareerCtrl'
		})
		.state('admin.search.course', {
			url 		: '/course',
			templateUrl : '/Partials/info-consult-course.html',
			controller  : 'ConsultCourseController as cCourseCtrl'
		})
		.state('admin.search.dean',{
			url 		: '/dean',
			templateUrl : '/Partials/info-consult-dean.html',
			controller  : 'ConsultDeanController as cDeanCtrl'
		})
		.state('admin.search.document', {
			url 		: '/document',
			template 	: '<h1 class="text-center">Formulario de documento aun no existe.</h1>'
		})
		.state('admin.search.director', {
			url 		: '/director',
			templateUrl : '/Partials/info-consult-director.html',
			controller  : 'ConsultDirectorController as cDirectorCtrl'
		})
		.state('admin.search.group', {
			url 		: '/group',
			templateUrl : '/Partials/info-consult-group.html',
			controller  : 'ConsultGroupController as cGroupCtrl'
		})
		.state('admin.search.project', {
			url 		: '/project',
			template 	: '<h1>Esta tabla no existe</h1>'
		})
		.state('admin.search.rubric', {
			url 		: '/rubric',
			templateUrl : '/Partials/info-consult-rubric.html',
			controller  : 'ConsultRubricController as cRubricCtrl'
		})
		.state('admin.search.student', {
			url 		: '/student',
			templateUrl : '/Partials/info-consult-student.html',
			controller  : 'ConsultStudentController as cStudentCtrl'
		})
		.state('admin.search.teacher', {
			url 		: '/teacher',
			templateUrl : '/Partials/info-consult-teacher.html',
			controller  : 'ConsultTeacherController as cTeacherCtrl'
		})
		.state('admin.search.team', {
			url 		: '/team',
			templateUrl : '/Partials/info-consult-team.html',
			controller  : 'ConsultTeamController as cTeamCtrl'
		})
		// Admin register information
		.state('admin.register', {
			url 		: '/register',
			templateUrl : '/Partials/admin-register.html',
			controller  : 'registerInformationController as rInfoCtrl'
		})
		.state('admin.register.areas', {
			url 		: '/areas',
			templateUrl : '/Partials/form-add-area.html',
			controller  : 'addAreaController as addAreaCtrl'
		})
		.state('admin.register.career', {
			url 		: '/career',
			templateUrl : '/Partials/form-add-career.html',
			controller  : 'addCareerController as addCareerCtrl'
		})
		.state('admin.register.course', {
			url 		: '/course',
			templateUrl : '/Partials/form-add-course.html',
			controller  : 'addCourseController as addCourseCtrl'
		})
		.state('admin.register.dean',{
			url 		: '/dean',
			templateUrl : '/Partials/form-add-dean.html',
			controller  : 'addDeanController as addDeanCtrl' 
		})
		.state('admin.register.document', {
			url 		: '/document',
			template 	: '<h1 class="text-center">Formulario de documento aun no existe.</h1>'
		})
		.state('admin.register.director', {
			url 		: '/director',
			templateUrl : '/Partials/form-add-director.html',
			controller 	: "addDirectorController as addDirectorCtrl"
		})
		.state('admin.register.group', {
			url 		: '/group',
			templateUrl : '/Partials/form-add-group.html'
		})
		.state('admin.register.project', {
			url 		: '/project',
			templateUrl : '/Partials/form-add-project.html',
			controller  : 'addProjectController as addProjectCtrl' 
		})
		.state('admin.register.rubric', {
			url 		: '/rubric',
			templateUrl : '/Partials/form-add-rubric.html',
			controller  : 'addRubricController as addRubricCtrl'
		})
		.state('admin.register.student', {
			url 		: '/student',
			templateUrl : '/Partials/form-add-student.html',
			controller  : 'addStudentController as addStudentCtrl'
		})
		.state('admin.register.teacher', {
			url 		: '/teacher',
			templateUrl : '/Partials/form-add-teacher.html',
			controller  : 'addTeacherController as addTeacherCtrl'
		})
		.state('admin.register.team', {
			url 		: '/team',
			templateUrl : '/Partials/form-add-team.html',
			controller  : 'addTeamController as addTeamCtrl'
		})
		.state('admin.register.vote', {
			url 		: '/vote',
			templateUrl : '/Partials/form-add-vote.html'
		})
		// Admin update information
		.state('admin.update', {
			url 	 	: '/update', 
			templateUrl	: '/Partials/update-information.html'
		})
		.state('admin.update.rubric', {
			url 		: '/update/rubric',
			templateUrl : '/Partials/form-edit-rubric.html',
			controller  : 'editRubricController as editRubricCtrl'
		});

	// Admin views and partials.
	$urlRouterProvider.when('/student','student/profile');
	$stateProvider
		// Admin base template.
		.state('student',{
			url 		: '/student',
			templateUrl : 'Partials/student.html'
		})
		.state('student.profile',{
			url 		: '/profile',
			templateUrl	: '/Partials/profile-student.html'
		});

});


app.run(function($rootScope, $state){
	/*
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
    */
});



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
app.controller('InfoController', function() {
	this.students = Query('users','rol',2); //this hace referencia al controlador
	this.courses = Query('courses');
});


app.filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});
