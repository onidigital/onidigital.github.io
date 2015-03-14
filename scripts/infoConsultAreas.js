app.controller("consultAreasController", function(){
	var $this = this;
	this.areas = Query('areas','-','all');
	this.selectedIndex;

	var i = 0,
		l = this.areas.length;

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

	this.deleteAreas = function( id ) {
		var i = 0,
			l = $this.areas.length,
			coord = 0;

		for(; (i<l); i++){
			if( $this.areas[i]['id'] === id ){
				coord = i;
				break;
			}
		}

		$this.areas.splice(coord,1);

	}



});

