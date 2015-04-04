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


app.controller('addAreaController', function($scope){
	var $this = this;

	this.newArea = {};
	this.sucess = false;

	this.addArea = function(){
		Insert('areas',$this.newArea);
		$this.newArea = {};
		$scope.formAddArea.$setPristine();
		$this.sucess = true;
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

});

app.controller('addCareerController', function($scope){
	var $this = this;

	this.directors = Query('users','rol',3);
	this.careers   = Query('careers','-','all');
	this.newCareer = {};
	this.sucess = false;

	this.addCareer = function(){
		$this.careers = Insert('careers',$this.newCareer);;
		$this.newCareer = {};
		$scope.formAddCareer.$setPristine();
		$this.sucess = true;
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

});

app.controller('addCourseController', function($scope){
	var $this = this;

	this.careers   = Query('careers','-','all');
	this.newCourse = {};
	this.sucess = false;

	this.addCourse = function(){
		Insert('courses',$this.newCourse);;
		$this.newCourse = {};
		$scope.formAddCourse.$setPristine();
		$this.sucess = true;
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

});

app.controller('addDeanController', function($scope){
	var $this = this;

	this.teams   = Query('teams','-','all');
	this.newProject = {};
	this.sucess = false;

	this.addProject = function(){
		Insert('projects',$this.newProject);;
		$this.newProject = {};
		$scope.formAddProject.$setPristine();
		$this.sucess = true;
		console.log( data['projects'] );
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

});

app.controller('addProjectController', function($scope){
	var $this = this;

	this.teams   = Query('teams','-','all');
	this.newProject = {};
	this.sucess = false;

	this.addProject = function(){
		Insert('projects',$this.newProject);;
		$this.newProject = {};
		$scope.formAddProject.$setPristine();
		$this.sucess = true;
		console.log( data['projects'] );
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

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

app.controller('ConsultDeanController', function() {
	this.deans = Query('users','rol',3);
});

app.controller('ConsultDirectorController', function() {
	this.directors = Query('users','rol',4);
});

app.controller('ConsultGroupController', function() {
	this.groups = Query('groups','-','all'); 

	this.getCourse = function ($id){
		return Query('courses','id',$id)[0].name;
	}

});

app.controller('ConsultRubricController', function() {
	this.rubrics = Query('rubrics','-','all');
});

app.controller('ConsultTeacherController', function() {
	this.teachers = Query('users','rol',4);
});

app.controller('ConsultTeamController', function() {
	this.teams = Query('teams','-','all');

	this.getProject = function ($id){
		return Query('projects','id',$id)[0].name;
	}

});