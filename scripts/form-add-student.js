var app = angular.module('addStudent',[]);

app.controller('addStudentController', function(){

	var $this = this;

	this.repeatCareers = [{id:'repeatCareer1'}];
	this.students = Query('users', 'rol', 2);
	this.careers   = Query('careers');
	this.newStudent = {};

	console.table(this.students);

	this.addNewRepeatCareer = function() {
		var newItemNo = this.repeatCareers.length+1;
		this.repeatCareers.push({'id':'repeatCareer'+newItemNo});
	};

	this.deleteNewRepeatCareer = function() {
		var newItemNo = this.repeatCareers.length-1;
		this.repeatCareers.pop();
	};	

	this.addStudent = function(students, newStudent){
		var newId = 1;
		for (var student in students[$this.students]){
			if (data[$this.students].hasOwnProperty(item)) {
				newId++;
			};
		}
		newStudent.id = newId;
		data[$this.students].push(newStudent);
		return data[students];
	}

});