var infoConsult = angular.module("info",["ui.router"]);

infoConsult.controller('InfoController', function() {
	var $this = this;
	this.teachers = Query('users','rol',4); //this hace referencia al controlador
	this.courses = Query('courses');
	this.rubrics = Query('rubrics');
	this.areas = Query('areas');
	this.newGroup = {};
	this.groups = [];


	this.addGroup = function(){
		$this.groups.push($this.newGroup);
		$this.newGroup = {};
		console.table($this.groups);
	}


});