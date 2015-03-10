var infoConsult = angular.module("info",["ui.router"]);

infoConsult.controller('InfoController', function() {
	this.students = Query('users','rol',2); //this hace referencia al controlador
	this.courses = Query('courses');
});

infoConsult.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('form-add-teacher', {
        templateUrl: '../Partials/form-add-teacher.html'
    });
  $urlRouterProvider.otherwise('/form-add-teacher');
})



