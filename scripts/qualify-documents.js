var app = angular.module("app", []);

app.controller("dropdownQualify", function(){
	var $this = this;

	this.students  = Query('users','rol',2);
	this.group     = Query('groups','id',1);
	this.documents = Query('documents','id', 1);
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
});