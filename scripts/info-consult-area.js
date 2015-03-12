var app = angular.module("app", []);

app.controller("ConsultAreaController", function(){

	var $this = this;

	this.rubrics = data['rubrics'];
	this.groups = Query('groups','id',1);
	this.areas = data['groups'];
	this.teacher = Query('groups', 'areas','professor');
	this.selectedIndex;

	var i = 0,
		l = this.group.length;

	this.dropdown = function( $index ) {
		if( $this.selectedIndex === $index ){
			$this.selectedIndex = -1;
		} else {
			$this.selectedIndex = $index;
		}
	}
	this.getClass = function( $index ){
		if( $index === $this.selectedIndex ){
			return 'active';
		}
	}



});