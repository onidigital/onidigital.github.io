var app = angular.module('addStudent',[]);

app.controller('addStudentController', function(){

	var $this = this;

	this.careerAspects = [];
	this.newCareerAspect = {};
	this.students = Query('users', 'rol', 2);
	this.careers   = Query('careers','-','all');
	this.newStudent = {};


	console.table(this.students);

	this.addNewCareerAspect = function() {
  		var newItemNo = $this.careerAspects.length+1;
  		if ($this.newCareerAspect.name != '') {
  		$this.careerAspects.unshift( $this.newCareerAspect );
  		$this.newCareerAspect = {};
  		};
	};

	this.deleteNewCareerAspect = function( index ) {
		$this.careerAspects.splice(index,1);
	};	

	this.addStudent = function(){
		$this.students.push($this.newStudent);
		$this.newStudent = {};
		console.table($this.students);

		if($this.formAddStudent.$invalid){
			$this.showMessage = true;
		}
	}


});