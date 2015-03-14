app.controller('editCourseAreaController', function(){

	var $this = this;

	$this.areas = Query('areas','-','all');
	$this.editArea = {};

	this.editCourseArea = function(){
		$this.areas = Update('areas', 3, $this.editArea);
		$this.editArea = {};
		console.table(areas);
	}
});