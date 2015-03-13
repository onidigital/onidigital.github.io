var app = angular.module('addDean',['ui.router']);

app.controller('addDeanController', function() {
	var $this = this;
	this.deans = Query('users','rol',5); //this hace referencia al controlador
	this.newDean = {};

	console.table(this.deans);

	this.addDean = function(){
	 	Insert('users',$this.newDean);
	 	this.deans = Query('users','rol',5);
		$this.newDean = {};
		console.table($this.deans);
	}

});