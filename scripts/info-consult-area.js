var app = angular.module("app", []);

app.controller("ConsultAreaController", function(){

	var $this = this;

	this.group = Query('groups','id',1);
	this.area = Query('groups','areas','area');
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