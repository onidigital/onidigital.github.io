var app = angular.module('addDirector',[]);

app.controller('addDirectorController', function(){

	var $this = this;

	this.careerAspects = [];
	this.newCareerAspect = {};
	this.directors = Query('users', 'rol', 3);
	this.careers   = Query('careers','-','all');

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

	/*this.addDirector = function(){
		$this.directors.push($this.newDirector);
		$this.newDirector.rol = 3;
		$this.newDirector = {};
		console.table($this.directors);
	}*/

	this.addDirector = function() {
		var newDirector = {
			name		: $this.name,
			lastname	: $this.lastname,
			pId			: $this.pId,
			careers 	: $this.careers,
			image		: $this.image,
			email		: $this.email,
			password	: $this.password
		};
		$this.rol = 3;
		$this.directors = Insert('directors',newDirector);
		$this.newDirector = {};
		console.table($this.directors);
	};


});