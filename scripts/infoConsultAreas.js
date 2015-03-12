app.controller("dropdownController", function(){
	var $this = this;
	this.areas = Query('areas');
	this.selectedIndex;

	var i = 0,
		l = this.students.length;

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

