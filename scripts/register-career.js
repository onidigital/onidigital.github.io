app.controller('registerCareer', function(){

	var $this = this;

	this.directors = Query('users','rol',3);
	this.careers   = Query('careers','-','all');
	this.newCareer = {};

	console.table(this.careers);

	this.addCareer = function(){
		$this.careers = Insert('careers',$this.newCareer);;
		$this.newCareer = {};
		console.table($this.careers);
	}

});