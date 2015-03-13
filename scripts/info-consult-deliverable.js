var infoConsultDeliverable = angular.module("infoDeliverable",[]);

infoConsultDeliverable.controller('InfoController', function() {
	this.student = Query('user','rol',2);
	this.documents = Query('documents'); //this hace referencia al controlador
});


	this.getCourse = function ($nameCourse){
		return Query('students','id',$nameCourse).name;
	}

	this.getStudent = function ($nameStudent){
		var user = Query('users','id',$nameStudent);
		return user.name + ' ' + user.lastName
	}
	this.getDocuments= function ($nameDocuments){
		return Query('documents','id',$nameDocuments).name;
	}

});