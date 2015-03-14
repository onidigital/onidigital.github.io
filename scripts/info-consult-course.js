<<<<<<< HEAD
var app = angular.module("infoCourses", ["ui.router"]);

app.controller('InfoCoursesController', function() {
	this.courses = Query('courses'); //this hace referencia al controlador
=======
app.controller('consultTeamController',function(){
	this.teams = Query('courses','-','all');



>>>>>>> 3c515a7e9cb2b75c1d2b2bd9b0e8f28d82d475ef
});