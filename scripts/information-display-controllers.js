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

	this.newDean = {};
	this.sucess = false;

	this.addDean = function(){
		$this.newDean.rol = 5;
		Insert('users',$this.newDean);
		$this.newDean = {};
		$scope.formAddDean.$setPristine();
		$this.sucess = true;
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

});

app.controller('addDirectorController',function($scope){

var $this = this;

	this.directorCareers = [];
	this.newDirectorCareer = {};
	this.careers   = Query('careers','-','all');
	this.newDirector = {};
	this.sucess = false;


	this.asignCareer = function() {
		$this.directorCareers.push( $this.newDirectorCareer );
		$this.newDirector.careers = $this.directorCareers;
		$this.newDirectorCareer = {};
	};


	this.deleteDirectorCareer = function( index ) {
		$this.directorCareers.splice(index,1);
		$this.newDirector.careers = $this.directorCareers;
	};

	this.addDirector = function() {
		$this.newDirector['rol'] = 3;
		Insert('users',$this.newDirector);
		this.directorCareers = [];
		$this.newDirector = {};

		$scope.formAddDirector.$setPristine();
		$this.sucess = true;
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

});

app.controller('addRubricController',function($scope){

var $this 	  = this,
	defaultMP = 100; // Default max points.
	
	this.newRubric 			= {};
	this.newRubric.aspects 	= [];
	this.newAspect 			= {};
	this.totalPoints 		= 0;
	this.maxPoints 			= defaultMP;
	this.sucess 			= false;


	this.asignAspect = function() {
		$this.newRubric.aspects.unshift( $this.newAspect );
		$this.maxPoints = ($this.maxPoints - $this.newAspect.value) || 0;
		$this.newAspect = {};
	};


	this.deleteAspect = function( index ) {
		$this.maxPoints += $this.newRubric.aspects[index].value;
		$this.newRubric.aspects.splice(index,1);
	};

	this.addRubric = function() {
		console.table($this.newRubric);
		Insert("rubrics",$this.newRubric);
		$scope.formAddRubric.$setPristine();
		$this.sucess = true;

		$this.newRubric = {
			'aspects' 	: []
		}
		$this.maxPoints = defaultMP;
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

});



app.controller('addStudentController',function($scope){

var $this = this;

	this.studentCareers 	= [];
	this.newStudentCareer 	= {};
	this.careers   			= Query('careers','-','all');
	this.newStudent 		= {};
	this.sucess 			= false;


	this.asignCareer = function() {
		$this.studentCareers.push( $this.newStudentCareer );
		$this.newStudent.careers = $this.studentCareers;
		$this.newStudentCareer = {};
	};


	this.deleteStudentCareer = function( index ) {
		$this.studentCareers.splice(index,1);
		$this.newStudent.careers = $this.studentCareers;
	};

	this.addStudent = function() {
		$this.newStudent['rol'] = 2;
		Insert('users',$this.newStudent);
		this.studentCareers = [];
		$this.newStudent = {};

		$scope.formAddStudent.$setPristine();
		$this.sucess = true;
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

});

app.controller('addTeacherController', function($scope){
	var $this = this;

	this.newTeacher = {};
	this.sucess = false;

	this.addTeacher = function(){
		$this.newTeacher.rol = 4;
		Insert('users',$this.newTeacher);
		$this.newTeacher = {};
		$scope.formAddTeacher.$setPristine();
		$this.sucess = true;
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
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

});

app.controller('addTeamController',function($scope){

var $this = this;

	this.newTeam 			= {};
	this.newTeam.members 	= [];
	this.newTeamMember 		= {};
	this.projects   		= Query('projects','-','all');
	this.students 			= Query('users','rol',2);
	this.rols 				= Query('studentRol','-','all');
	this.sucess 			= false;


	this.asignMember = function() {
		$this.newTeam.members.unshift( $this.newTeamMember );
		$this.newTeamMember = {};
	};


	this.deleteMember = function( index ) {
		$this.newTeam.members.splice(index, 1);
	};

	this.addTeam = function() {
		$this.newTeam.project = Number($this.newTeam.project); 
		Insert('teams',$this.newTeam);

		$this.newTeam = {
			members : []
		};
		$scope.formAddTeam.$setPristine();
		$this.sucess = true;
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

});

// Edit information controllers.

app.controller('editRubricController',[ 'updateInformationModule',
										function(updateModule){

var $this 	  = this,
	defaultMP = 0; // Default max points.
	
	this.updating  			= updateModule.updating['rubric']; 
	this.newRubric 			= Query('rubrics','id',this.updating)[0];
	this.newAspect 			= {};
	this.totalPoints 		= 0;
	this.maxPoints 			= defaultMP;
	this.sucess 			= false;

	this.asignAspect = function() {
		$this.newRubric.aspects.unshift( $this.newAspect );
		$this.maxPoints = ($this.maxPoints - $this.newAspect.value) || 0;
		$this.newAspect = {};
	};


	this.deleteAspect = function( index ) {
		$this.maxPoints += $this.newRubric.aspects[index].value;
		$this.newRubric.aspects.splice(index,1);
	};

	this.addRubric = function() {
		console.table($this.newRubric);
		Update("rubrics",this.updating,$this.newRubric);
		$scope.formAddRubric.$setPristine();
		$this.sucess = true;

		$this.newRubric = {
			'aspects' 	: []
		}
		$this.maxPoints = defaultMP;
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

}]);


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
	this.deans = Query('users','rol',5);
});

app.controller('ConsultDirectorController', function() {
	this.directors = Query('users','rol',3);
});

app.controller('ConsultGroupController', function() {
	this.groups = Query('groups','-','all'); 

	this.getCourse = function ($id){
		return Query('courses','id',$id)[0].name;
	}

});

app.controller('ConsultRubricController', [ 'updateInformationModule', 
											function( updateModule ) {

	this.update = updateModule;
	this.rubrics = Query('rubrics','-','all');

}]);

app.controller('ConsultTeacherController', function() {
	this.teachers = Query('users','rol',4);
});

app.controller('ConsultTeamController', function() {
	this.teams = Query('teams','-','all');

	this.getProject = function ($id){
		return Query('projects','id',$id)[0].name;
	}

});