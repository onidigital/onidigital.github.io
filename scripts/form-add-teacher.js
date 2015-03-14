app.controller('addTeacherController', function() {
	var $this = this;
	this.teachers = Query('users','rol',4); //this hace referencia al controlador
	this.newTeacher = {};
	this.newTeacher['rol'] = 4;

	console.table(this.teachers);

	this.addTeacher = function(){
	 	Insert('users',$this.newTeacher);
	 	$this.teachers = Query('users','rol',4);
		$this.newTeacher = {};
		$this.newTeacher['rol'] = 4;
		console.table($this.teachers);
	}

});