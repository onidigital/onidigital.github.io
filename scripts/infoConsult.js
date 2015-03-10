var infoConsult = angular.module("info",["ui.router"]);

infoConsult.controller('InfoController', function() {
	this.teachers = Query('users','rol',4); //this hace referencia al controlador
	this.courses = Query('courses');
});

/**infoConsult.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('form-add-teacher', {
        templateUrl: '../Partials/form-add-teacher.html'
    });
  $urlRouterProvider.otherwise('/form-add-teacher');
})**/




