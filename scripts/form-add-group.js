var infoConsult = angular.module("info",["ui.router"]);

infoConsult.controller('InfoController', function() {
	this.teachers = Query('users','rol',4); //this hace referencia al controlador
	this.courses = Query('courses');
	this.rubrics = Query('rubrics');
	this.areas = Query('areas');

});