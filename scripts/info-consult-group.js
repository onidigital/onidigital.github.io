var infoConsultGroup = angular.module("infoGroup",[]);

infoConsultGroup.controller('InfoConsultController', function() {
	this.groups = Query('groups'); //this hace referencia al controlador


this.getCourse = function ($id){
		return Query('courses','id',$id)[0].name;
	}

});
