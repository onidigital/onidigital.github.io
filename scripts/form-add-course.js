var app = angular.module('addCourse',[]);

app.controller('addCourseController', function(){

	var $this = this;

	this.courses = Query('courses','-','all');
	this.careers   = Query('careers','-','all');
	this.newCourse = {};

	console.table(this.courses);

	this.addCourse = function(){
		$this.newCourse.career = Number($this.newCourse.career);
		$this.courses = Insert('courses',$this.newCourse);
		$this.newCourse = {};
		console.table($this.courses);
	}

});