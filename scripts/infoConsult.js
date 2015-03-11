var infoConsult = angular.module("info",["ui.router"]);

infoConsult.controller('InfoController', function() {
	this.courses = Query('courses');
	
});

/**infoConsult.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('form-add-teacher', {
        templateUrl: '../Partials/form-add-teacher.html'
    });
  $urlRouterProvider.otherwise('/form-add-teacher');
})**/




