app.controller('addDirectorController',function(){

var $this = this;
	this.directorCareers = [];
	this.newDirectorCareer = {};
	this.directors = Query('users', 'rol', 3);
	this.careers   = Query('careers','-','all');
	this.newDirector = {};
	this.newDirector['rol'] = 3;
	console.table(this.directors);


	this.asignCareer = function() {
		$this.directorCareers.push( $this.newDirectorCareer );
		$this.newDirectorCareer = {};
	};


	this.deleteDirectorCareer = function( index ) {
		$this.directorCareers.splice(index,1);
	};

	this.addDirector = function() {
		Insert('users',$this.newDirector);
		this.directors = Query('users','rol',3)
		$this.newDirector = {};
		$this.newDirector['rol'] = 3;
		console.table($this.directors);
	};

});