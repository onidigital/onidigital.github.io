
app.controller('addStudentController', function(){
	var $this = this;
	this.careerAspects = [];
	this.newCareerAspect = {};
	this.students = Query('users', 'rol', 2);
	this.careers   = Query('careers','-','all');
	this.newStudent = {};
	this.newStudent['rol'] = 2;

	console.table(this.students);

	this.addNewCareerAspect = function() {
  		var newCareerAspect = Query('careers','id',Number($this.newCareerAspect));
  		if ( newCareerAspect ) {
  			$this.careerAspects.unshift( $this.newCareerAspect );
  			$this.newCareerAspect = {};
  			$this.newCareerAspect = $this.newStudent['career'];
  		}
	}

	this.deleteNewCareerAspect = function( index ) {
		$this.careerAspects.splice(index,1);
	};	

	this.addStudent = function() {
		Insert('users',$this.newStudent);
		this.students = Query('users', 'rol', 2);
		$this.newStudent = {};
		$this.newStudent['rol'] = 2;
		console.table($this.students);
	};

});
