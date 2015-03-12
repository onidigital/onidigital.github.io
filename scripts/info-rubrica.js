var infoConsult = angular.module("info",[]);

infoConsult.controller('InfoController', function() {
	var $this = this;
	this.rubrics = Query('rubrics');
	this.deleteRubric = function( id ) {
		var i = 0,
			l = $this.rubrics.length,
			coord = 0;

		for(; (i<l); i++){
			if( $this.rubrics[i]['id'] === id ){
				coord = i;
				break;
			}
		}

		$this.rubrics.splice(coord,1);

	}
});