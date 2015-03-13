var infoConsultDeliverable = angular.module("infoDeliverable",[]);

infoConsultDeliverable.controller('InfoControllerDeliverable', function() {
	//this.documentsPerGroup = Query('documentsPerGroup'); //this hace referencia al controlador
	this.groups = Query('groups');
	this.areas = Query('areas');
	this.documents = Query('documents');


	this.getGroup= function ($id){
		return Query('groups','id',$id).name;
	}
	this.getDocuments= function ($id){
		return Query('documents','id',$id).name;
	}
	this.getAreas= function ($id){
		return Query('areas','id',$id).name;
	}
});
