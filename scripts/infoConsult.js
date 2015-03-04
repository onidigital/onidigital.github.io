var app = angular.module("info",[]);

app.controller('InfoController', function() {
	this.students = Query('users','rol',2); //this hace referencia al controlador


});





