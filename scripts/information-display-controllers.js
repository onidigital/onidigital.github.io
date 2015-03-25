app.controller('searchInformationController',['$state', 'configurationModule',
// Function
function($state, configModule){
	var $this= this;
			
	this.displayedInformation = configModule.searching;

	this.changeState = function(){
		configModule.searching = $this.displayedInformation;
		$state.go( $this.displayedInformation );
	}

	this.goToRegister = function(){
		configModule.registering = $this.displayedInformation.replace('search','register');
		$state.go( configModule.registering );
	}
	
}]);

// Register information controllers.
app.controller('registerInformationController',['$state', 'configurationModule',
// Function
function($state, configModule){
	var $this  = this,
		sesion = Storage.get('sesion');

	this.displayedForm = configModule.registering;

	this.changeState = function(){
		configModule.registering = $this.displayedForm;
		$state.go( $this.displayedForm );
	}

	this.goToSearching = function(){
		configModule.searching = $this.displayedForm.replace('register','search');
		$state.go( configModule.searching );
	}
	
}]);


app.controller('addAreaController', function(){
	var $this = this;

	this.newArea = {};

	this.addArea = function(){
		Insert('areas',$this.newArea);
		$this.newArea = {};
	}
});

// Consult information controllers.

app.controller("ConsultAreaController", function(){
	var $this = this;

	this.areas = data['areas'];
	this.deleteArea = function( i ){
		$this.areas.splice(i,1);
	}

});

app.controller('ConsultStudentController', function() {
	this.student = Query('users','rol',2);
});

app.controller('ConsultCareerController', function() {
	this.careers = Query('careers');
	this.directores = Query('users','rol',3);
});

app.controller('ConsultCourseController', function() {
	this.courses = Query('courses','-','all');
});