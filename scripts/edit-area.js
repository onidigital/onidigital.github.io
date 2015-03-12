app.controller('editCourseAreaController', function(){

	var $this = this;

	this.areas = Query('areas','-','all');
	this.editArea = {};

	console.table(this.careers);

	this.editCourseArea = function(){
		$this.areas = Update('areas', areas[1], $this.editArea);
		$this.editArea = {};
		console.table(areas);
	}
});