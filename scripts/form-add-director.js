var app = angular.module('addDirector',[]);

app.controller('addDirectorController', function(){

	var $this = this;

	this.careerAspects = [];
	this.newCareerAspect = {};
	this.directors = Query('users', 'rol', 3);
	this.careers   = Query('careers','-','all');
	this.newDirector = {};


	console.table(this.directors);

	this.addNewCareerAspect = function() {
  		var newItemNo = $this.careerAspects.length+1;
  		if ($this.newCareerAspect.name != '') {
  		$this.careerAspects.unshift( $this.newCareerAspect );
  		$this.newCareerAspect = {};
  		};
	};

	this.deleteNewCareerAspect = function( index ) {
		$this.careerAspects.splice(index,1);
	};	

	this.addDirector = function(){
		$this.directors.push($this.newDirector);
		$this.newDirector = {};
		console.table($this.directors);
	}


});