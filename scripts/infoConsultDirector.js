var app = angular.module("infoDirector",[]);

app.controller('InfoDirectorController', function() {
	this.directors = Query('users','rol',3); //this hace referencia al controlador
});




