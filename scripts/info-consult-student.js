var infoConsult = angular.module("info",[]);

infoConsult.controller('InfoController', function() {
	this.student = Query('users','rol',2); //this hace referencia al controlador
});
