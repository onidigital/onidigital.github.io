var infoConsultDeliverable = angular.module("info.documents",[]);

infoConsultDeliverable.controller('InfoController', function() {
	this.student = Query('user','rol',2);
	this.documents = Query('documents','id',1); //this hace referencia al controlador
});