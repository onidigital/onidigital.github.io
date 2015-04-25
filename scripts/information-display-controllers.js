app.controller('searchInformationController',['$state', 'configurationModule',
// Function
function($state, configModule){

	var $ = this;
			
	$.displaying = configModule.displaying;

	$.changeDisplayedInfo = function(newDisplayedInformation){
		$.displaying = newDisplayedInformation;
		configModule.updateDisplaying($.displaying);
	}

}]);

// Register information controllers.
app.controller('registerInformationController',['$state', 'configurationModule',
// Function
function($state, configModule){

	var $ = this;
			
	$.displaying = configModule.displaying;

	$.changeDisplayedInfo = function(newDisplayedInformation){
		$.displaying = newDisplayedInformation;
		configModule.updateDisplaying($.displaying);
	}
	
	$.goToSearching = function(){
		var newState = 'admin.search.'+$.displaying;
		configModule.updateDisplaying($.displaying);
		$state.go(newState);
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

app.controller('addTeamController', ['$http', '$scope',function($http, $scope){

var $ = this;

	$.newTeam 			= {};
	$.projects   		= [];
	$.students 			= [];
	$.sucess 			= false;
	$.phpUrl 			= 	{
								'getStudents' : 'Queries/getStudents.php',
								'getProjects' : 'Queries/getProjects.php',
								'getTeamRols' : 'Queries/getTeamRols.php',
								'insertTeam'  : 'Queries/insertTeam.php'
							};





	$.addTeam = function() {

		$http.post($.phpUrl.insertTeam, $.newTeam)
			.success(function(data, status){
				$.clean();
			})
			.error(function(data, status){
				alert('Error: '+status);
			});

		
	}

	$.initForm = function(){
		$http.post($.phpUrl.getStudents)
			.success(function(data, status){
				$.students = data;
			})
			.error(function(data, status){
				alert("Error: "+status);
			});

		$http.post($.phpUrl.getProjects)
			.success(function(data, status){
				$.projects = data;
			})
			.error(function(data, status){
				alert("Error: "+status);
			});
	}

	$.removeSucessMessage = function(){ $.sucess = false; }

	$.clean = function(){
		$scope.formAddTeam.$setPristine();
		$.newTeam = {};
		$.sucess = true;
	}

	$.initForm();

}]);

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
									  '$http',
									  function 	( 
									  				updateService,
									  				$http
									  			){
	var $     = this,
		$this = this;

	$.projects   		= [];
	$.students 			= [];
	$.sucess 			= false;
	$.phpUrl 			= 	{
								'getStudents' : 'Queries/getStudents.php',
								'getProjects' : 'Queries/getProjects.php',
								'getTeamRols' : 'Queries/getTeamRols.php',
								'getTeam' 	  : 'Queries/getTeam.php',
								'basicInfo'   : 'Queries/getTeamBasicInfo.php',
								'insertTeam'  : 'Queries/insertTeam.php'
							};
	$.updating  			= updateService.updating['team']; 
	$.teamToUpdate  		= {};

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

	$.initForm = function(){

		$http.post($.phpUrl.getProjects, { 'id' : $.updating })
			.success(function(data, status){
				$.projects = data;
				
				$http.post($.phpUrl.basicInfo, { 'id' : $.updating })
				.success(function(data, status){
					$.teamToUpdate = data;
				})
				.error(function(data, status){

				});

			})
			.error(function(data, status){

			});

		
	}

	$.initForm();

}]);



app.controller('editProjectController', ['updateInformationService',
										 '$http',
									  	 function( updateService, $http ){
	var $ = this;

	$.phpUrl 		  = 	{
								'getProject' : 'Queries/getProject.php',
								'update' 	 : 'Queries/updateProject.php'
							};
	$.updating        = updateService.updating['project'];
	$.projectToUpdate = {};
	$.projectBackUp   = {};
	$.sucess 		  = false;

	$.getProject = function(){
		$http.post( $.phpUrl.getProject, { 'id' :  $.updating } )
			.success(function(data, status){
				$.projectToUpdate = data;
				$.projectBackUp = angular.copy($.projectToUpdate)
			})
			.error(function(data, error){
				alert('Error: '+error);
			});
	}

	$.updateProject = function(state){
		$.projectToUpdate.idProject = $.updating;
		
		$http.post( $.phpUrl.update, $.projectToUpdate )
			.success(function(data, status){
				$.sucess = state;		
			})
			.error(function(data, error){
				alert('Error: '+error);
			});
		
	}

	$.save = function(){ 
		$.projectBackUp = angular.copy($.projectToUpdate);
		$.sucess  = false;
	}

	$.undo = function(){
		$.projectToUpdate = angular.copy($.projectBackUp);
		$.updateProject(false);
	}

	$.getProject(true);

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
	$.studentBackUp   = {};
	$.sucess 		  = false;

	$.updateStudent = function(state){
		$.studentToUpdate.idPerson = $.updating;
		$http.post( $.phpUrl.update, $.studentToUpdate )
			.success(function(data, status){
				$.sucess = state;		
			})
			.error(function(data, error){
				alert('Error: '+error);
			});
		
	}

	$.getStudent = function(){
		$http.post( $.phpUrl.getStudent, { 'id' :  $.updating } )
			.success(function(data, status){
				$.studentToUpdate = data;
				$.studentBackUp = angular.copy($.studentToUpdate)
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
		$.updateStudent(false);
	}

	$.getStudent(true);

}]);


// Consult information controllers.

app.controller('ConsultStudentController', [ 'updateInformationService',
											 '$http',
											 function( updateService,
											 		   $http
											 		  ){
    var $ = this;

    $.updateService = updateService;
	$.students 		= [];
	$.phpUrl		= 	{
							'getStudents' 	:'Queries/getStudents.php',
							'deleteStudent' :'Queries/deleteStudent.php'
						};

	$.getStudents = function(){
		$http.post($.phpUrl.getStudents)
			 .success(function(data, status){
 			 	$.students = data;
 			 })
			 .error(function(data, status){
 			 	alert('Error.');
 			 });
	}

	$.deleteStudent = function(id){

		if( confirm('¿Desea eliminar este registro?') ){
			$http.post( $.phpUrl.deleteStudent, { 'id' : id } )
			.success(function(data, status){
				$.students = data;
			})
			.error(function(data, status){
				alert("Error: "+status);
			});
		}
		
	}

	$.getStudents();

}]);

app.controller('ConsultDirectorController', function() {
	this.directors = Query('users','rol',3);
});

app.controller('ConsultProjectController', [ 'updateInformationService',
											 '$http',
											 function( updateService,
											 		   $http
											 		  ){
	var $ = this;

	$.updateService = updateService;
	$.projects 		= [];
	$.phpUrl		= 	{
							'getProject' 	: 'Queries/getProjects.php',
							'deleteProject' : 'Queries/deleteProject.php'
						};

	$.getProjects = function(){
		$http.post($.phpUrl.getProject)
			 .success(function(data, status){
 			 	$.projects = data;
 			 })
			 .error(function(data, status){
 			 	alert('Error.');
 			 });
	}

	$.deleteProject = function(id){

		if( confirm('¿Desea eliminar este registro?') ){
			$http.post( $.phpUrl.deleteProject, { 'id' : id } )
			.success(function(data, status){
				$.projects = data;
			})
			.error(function(data, status){
				alert("Error: "+status);
			});
		}
		
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
	$.phpUrl 		= 	{
							'getTeams'	 : 'Queries/getTeams.php',
							'deleteTeam' : 'Queries/deleteTeam.php'
						}
	$.teams 		= [];

	$.getTeams = function(){
		$http.post($.phpUrl.getTeams)
			.success(function(data, status){
				$.teams = data;
			})
			.error(function(data, status){
				console.log('Error: '+status);
			});
	}

	$.deleteTeam = function(id){
		
		if( confirm('¿Desea eliminar este registro?') ){
			$http.post( $.phpUrl.deleteTeam, { 'id' : id } )
			.success(function(data, status){
				$.teams = data;
			})
			.error(function(data, status){
				alert("Error: "+status);
			});
		}
		
	}

	$.getTeams();

}]);


app.controller('menuController', ['$state', function($state){

	var $ = this;

	$.sesion = Storage.get('sesion') || {};
	$.user   = $.sesion.user;

	$.logOut = function(){
		Storage.clear();
		$state.go('home');
	}
	
}]);