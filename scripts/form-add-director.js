
app.controller('addDirectorController', function(){

	var $this = this;
	this.careerAspects = [];
	this.newCareerAspect = {};
	this.directors = Query('users', 'rol', 3);
	this.careers   = Query('careers','-','all');
	this.newDirector = {};
	this.newDirector['rol'] = 3;
	console.table(this.directors);


	this.addNewCareerAspect = function() {
  		var newCareerAspect = Query('careers','id',Number($this.newCareerAspect));
  		if ( newCareerAspect ) {
  			if ($this.newCareerAspect.name != '') {
  			$this.careers.unshift( newCareerAspect );
  			$this.newCareerAspect = {};
  			}
  		}	
	};


	this.deleteNewCareerAspect = function( index ) {
		$this.careerAspects.splice(index,1);
	};

	this.addDirector = function() {
		Insert('users',$this.newDirector);
		this.directors = Query('users','rol',3)
		$this.newDirector = {};
		$this.newDirector['rol'] = 3;
		console.table($this.directors);
	};

});