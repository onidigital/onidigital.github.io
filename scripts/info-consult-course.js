var app = angular.module("infoCourses", ["ui.router"]);

app.controller('InfoCoursesController', function() {
	this.courses = Query('courses'); //this hace referencia al controlador
});