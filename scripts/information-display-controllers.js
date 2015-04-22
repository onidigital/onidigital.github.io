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



app.controller('addStudentController',[	'$scope',
										'$http',
										function(
													$scope, 
													$http
												){

var $ = this;
	
	$.phpUrl 	 = 'Queries/insertStudent.php';	
	$.newStudent = {};
	$.sucess 	 = false;

	$.addStudent = function() {
		$http.post($.phpUrl, $.newStudent)
			.success(function(data, status){
				$.clear();
			})
			.error(function(data, status){
				alert('Error: '+status);
			});
	}

	$.clear = function(){
		$.newStudent = {};
		$scope.formAddStudent.$setPristine();
		$.sucess = true;
	}

	$.removeSucessMessage = function(){ $.sucess = false; }

}]);

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

app.controller('addProjectController', [ '$scope',
										 '$http',
										 function( $scope,
										 		   $http
										 		  ){
    var $ = this;

	$.teams   	 = [];
	$.newProject = {};
	$.sucess 	 = false;
	$.phpUrl 	 = 'Queries/insertProject.php';

	$.addProject = function(){

		$http.post($.phpUrl, $.newProject)
			.success(function(data, status){
				console.log(status);
				$.clean();
			})
			.error(function(data, status){
				alert('Error :'+status);
			});
	}

	$.removeSucessMessage = function(){ $.sucess = false; }

	$.clean = function(){
		$.newProject = {};
		$scope.formAddProject.$setPristine();
		$.sucess = true;
	}

}]);

app.controller('addTeamController',function($scope){

var $this = this;

	this.newTeam 			= {};
	this.newTeam.members 	= [];
	this.newTeamMember 		= {};
	this.projects   		= QueryAll('projects');
	this.students 			= QueryAll('students');
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

app.controller('editRubricController',[ 'updateInformationService',
										function(updateService){

var $this 	  = this,
	defaultMP = 0; // Default max points.
	
	this.updating  			= updateService.updating['rubric']; 
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

app.controller('editTeamController', ['updateInformationService',
									  function( updateService ){
	var $ = this;


	$.projects   			= QueryAll('projects');
	$.students 				= QueryAll('students');
	$.rols 					= Query('studentRol','-','all');
	$.sucess 				= false;
	$.updating  			= updateService.updating['team']; 
	$.teamToUpdate  		= angular.copy(Query('teams','id',$.updating)[0]);
	$.newTeamMember 		= {};
	$.teamBackUp 			= angular.copy($.teamToUpdate);

	$.asignMember = function() {
		$.teamToUpdate.members.unshift( $.newTeamMember );
		$.newTeamMember = {};
	};


	$.deleteMember = function( index ) {
		$.teamToUpdate.members.splice(index, 1);
	};

	$.updateTeam = function() {
		$.teamToUpdate.project = Number($.teamToUpdate.project); 
		Update('teams',$.teamToUpdate.id,$.teamToUpdate);
		$.sucess = true;
	}

	$.save = function(){ 
		$.teamBackUp = angular.copy($.teamToUpdate);
		$.sucess  = false;
	}

	$.undo = function(){
		$.teamToUpdate = angular.copy($.teamBackUp);
		$.sucess  = false;
	}


	console.log($.teamToUpdate.project);

}]);

app.controller('editProjectController', ['updateInformationService',
									  	 function( updateService ){
	var $ = this;

	$.updating        = updateService.updating['project'];
	$.projectToUpdate = angular.copy(Query('projects','id',$.updating)[0]);
	$.projectBackUp   = angular.copy($.projectToUpdate);
	$.sucess 		  = false;

	$.updateProject = function(){
		Update('projects',$.projectToUpdate.id,$.projectToUpdate);
		$.sucess = true;
	}

	$.save = function(){ 
		$.projectBackUp = angular.copy($.projectToUpdate);
		$.sucess  = false;
	}

	$.undo = function(){
		$.projectToUpdate = angular.copy($.projectBackUp);
		$.sucess  = false;
	}

}]);

app.controller('editStudentController', ['updateInformationService',
										 '$http',
									  	 function( updateService, $http ){
	var $ = this;

	$.phpUrl 		  = 	{
								'getStudent' : 'Queries/getStudent.php',
								'update' 	 : 'Queries/updateStudent.php'
							};
	$.updating        = Number(updateService.updating['student']);
	$.studentToUpdate = {};
	$.studentBackUp   = angular.copy($.studentToUpdate);
	$.sucess 		  = false;

	$.updateStudent = function(){
		console.log($.updating);
		$.studentToUpdate.idPerson = $.updating;
		$http.post( $.phpUrl.update, $.studentToUpdate )
			.success(function(data, status){
				$.sucess = true;		
			})
			.error(function(data, error){
				alert('Error: '+error);
			});
		
	}

	$.getStudent = function(){
		$http.post( $.phpUrl.getStudent, { 'id' :  $.updating } )
			.success(function(data, status){
				$.studentToUpdate = data;		
			})
			.error(function(data, error){
				alert('Error: '+error);
			});
	}

	$.save = function(){ 
		$.studentBackUp = angular.copy($.studentToUpdate);
		$.sucess  = false;
	}

	$.undo = function(){
		$.studentToUpdate = angular.copy($.studentBackUp);
		$.sucess  = false;
	}

	$.getStudent();

}]);


// Consult information controllers.

app.controller('ConsultStudentController', [ 'deleteInformationService',
											 'updateInformationService',
											 '$http',
											 function( deleteService,
											 		   updateService,
											 		   $http
											 		  ){
    var $ = this;

    $.updateService = updateService;
	$.deleteService = deleteService; 
	$.students 		= [];
	$.phpUrl		= 'Queries/getStudents.php';

	$.getStudents = function(){
		$http.post($.phpUrl)
			 .success(function(data, status){
 			 	$.students = data;
 			 })
			 .error(function(data, status){
 			 	alert('Error.');
 			 });
	}

	$.getStudents();

}]);

app.controller('ConsultDirectorController', function() {
	this.directors = Query('users','rol',3);
});

app.controller('ConsultProjectController', [ 'deleteInformationService',
											 'updateInformationService',
											 '$http',
											 function( deleteService,
											 		   updateService,
											 		   $http
											 		  ){
	var $ = this;

	$.updateService = updateService;
	$.deleteService = deleteService; 
	$.projects 		= [];
	$.phpUrl		= 'Queries/getProjects.php';

	$.getProjects = function(){
		$http.post($.phpUrl)
			 .success(function(data, status){
 			 	$.projects = data;
 			 })
			 .error(function(data, status){
 			 	alert('Error.');
 			 });
	}

	$.getProjects();

}]);

app.controller('ConsultTeamController', [ 'deleteInformationService',
										  'updateInformationService',
										  '$http',
											 function( deleteService,
											 		   updateService,
											 		   $http
											 		  ){
	var $ = this;

	$.updateService = updateService;
	$.deleteService = deleteService; 
	$.phpUrl 		= 'Queries/getTeams.php';
	$.teams 		= [];

	$.getProject = function ($id){
		return Query('projects','id',$id)[0].name;
	}

	$.getProjects = function(){
		$http.post($.phpUrl)
			.success(function(data, status){
				$.teams = data;
			})
			.error(function(data, status){
				console.log('Error: '+status);
			});
	}

	$.getProjects();

}]);
