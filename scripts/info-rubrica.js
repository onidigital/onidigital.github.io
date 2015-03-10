var infoConsult = angular.module("info",["ui.router"]);

infoConsult.controller('InfoController', function() {
	this.students = Query('users','rol',2); //this hace referencia al controlador
	this.courses = Query('courses');
	this.rubrics = Query('rubrics');
});