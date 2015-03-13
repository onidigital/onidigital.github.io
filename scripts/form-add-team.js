var teamModule = angular.module("team",["ui.router"]);

teamModule.controller('teamController', function() {
	var $this = this;
	
	this.groups   =   Query('groups');
	this.students = Query('users','rol',2);
	this.roles    = Query('studentRol');
	this.courses  = Query('courses');
	this.newTeam  = {};
	this.teams    = [];
	


	this.addTeam = function(){
		$this.teams.push($this.newTeam);
		// data.teams.push($this.newTeam);
		$this.newTeam = {};
		console.table($this.teams);
	}


});