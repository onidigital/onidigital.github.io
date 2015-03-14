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
	this.getCourse = function ($id){
		return Query('courses','id',$id)[0].name;
	}

	this.getStudent = function ($id){
		var user = Query('users','id',$id)[0]
		return user.name + ' ' + user.lastName
	}
	this.getDocument = function ($id){
		return Query('documents','id',$id)[0].name;
	}

});