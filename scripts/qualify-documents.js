var qualifyModule = angular.module("qualify", []);

qualifyModule.controller("dropdownQualify", function(){
	var $this = this;

	this.students  = Query('users','rol',2);
	this.groups     = Query('groups');
	this.courses = Query('courses');
	this.documents = Query('documents');
	this.selectedIndex;

	var i = 0,
		l = this.students.length;

	this.dropdown = function( $index ) {
		console.log('dp '+$index);
		if( $this.selectedIndex === $index ){
			$this.selectedIndex = -1;
		} else {
			$this.selectedIndex = $index;
		}
	}
	this.getClass = function( $index ){
		console.log('getclass '+$index);
		if( $index === $this.selectedIndex ){
			return 'active';
		}
	}
	this.getCourse = function ($nameCourse){
		return Query('courses','id',$nameCourse).name;
	}

	this.getStudent = function ($nameStudent){
		var user = Query('users','id',$nameStudent);
		return user.name + ' ' + user.lastName
	}
	this.getDocuments= function ($nameDocuments){
		return Query('documents','id',$nameDocuments).name;
	}

});