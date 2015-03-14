
app.controller('addStudentController', function(){
	var $this = this;
	this.studentCareers = [];
	this.newStudentCareer = {};
	this.students = Query('users', 'rol', 2);
	this.careers   = Query('careers','-','all');
	this.newStudent = {};
	this.newStudent['rol'] = 2;

	console.table(this.students);

	this.asignCareer = function() {
		$this.studentCareers.push( $this.newStudentCareer );
		$this.newStudentCareer = {};
	};


	this.deleteStudentCareer = function( index ) {
		$this.studentCareers.splice(index,1);
	};


	this.addStudent = function() {
		Insert('users',$this.newStudent);
		this.students = Query('users', 'rol', 2);
		$this.newStudent = {};
		$this.newStudent['rol'] = 2;
		console.table($this.students);
	};

});
