app.controller('searchInformationController',['$state',function($state){
	var $this= this,
		sesion = Storage.get('sesion');
	this.displayedInformation = sesion.rolCode+'search.areas';

	this.changeState = function(){
		$state.go( $this.displayedInformation );
	}
	
	// Initial state.	
	$this.changeState();
}]);

app.controller('registerInformationController',['$state',function($state){
	var $this  = this,
		sesion = Storage.get('sesion');

	this.displayedForm = sesion.rolCode+'.register.areas';

	this.changeState = function(){
		$state.go( $this.displayedForm );
	}
	
	// Initial state.	
	$this.changeState();
}]);


app.controller("ConsultAreaController", function(){
	var $this = this;

	this.areas = data['areas'];
	this.deleteArea = function( i ){
		$this.areas.splice(i,1);
	}

});

app.controller('addAreaController', function(){
	var $this = this;

	this.newArea = {};

	this.addArea = function(){
		Insert('areas',$this.newArea);
		$this.newArea = {};
	}
});