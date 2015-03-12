app.controller('editCourseAreaController', function(){

	var $this = this;

	this.areas = Query('areas','-','all');
	this.newArea = {};

	console.table(this.careers);

	this.editCourseArea = function(){
		$this.areas = Insert('areas',$this.newArea);
		$this.newArea = {};
		console.table($this.areas);
	}

});