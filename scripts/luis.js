app.controller('addDocumentController', [ '$scope',
										 '$http',
										 function( $scope,
										 		   $http
										 		  ){
    var $ = this;

	$.documents   	 = [];
	$.newDocument = {};
	$.sucess 	 = false;
	$.phpUrl 	 = 'Queries/insertDocument.php';

	$.addDocument = function(){

		$http.post($.phpUrl, $.newDocument)
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
		$.newDocument = {};
		$scope.formAddDocument.$setPristine();
		$.sucess = true;
	}

}]);





/*app.controller('addDocumentController', function($scope){
	var $this = this;

	this.newArea = {};
	this.sucess = false;

	this.addDocument = function(){
		Insert('documents',$this.newDocument);
		$this.newDocument = {};
		$scope.formAddDocument.$setPristine();
		$this.sucess = true;
	}

	this.removeSucessMessage = function(){ $this.sucess = false; }

});*/

/*app.controller("ConsultDocumentController", ['deleteInformationService',
										 'updateInformationService',
										 function( deleteService,
										 		   updateService
										 		  ){
	var $ = this;

	$.documents		= QueryAll('documents');
	$.updateService = updateService;
	$.deleteService = deleteService; 

}]);**/

app.controller('ConsultDocumentController', ['updateInformationService',
											 '$http',
											 function( updateService,
											 		   $http
											 		  ){
	var $ = this;

	$.updateService = updateService;
	$.documents 	= [];
	$.phpUrl		= 	{
							'getDocuments' 	 : 'Queries/getDocuments.php',
							'deleteDocument' : 'Queries/deleteDocument.php'
						};

	$.getDocuments = function(){
		$http.post($.phpUrl.getDocuments)
			 .success(function(data, status){
 			 	$.documents = data;
 			 })
			 .error(function(data, status){
 			 	alert('Error.');
 			 });
	}

	$.deleteDocument = function(id){

		if( confirm('¿Desea eliminar este registro?') ){
			$http.post( $.phpUrl.deleteDocument, { 'id' : id } )
			.success(function(data, status){
				$.documents = data;
			})
			.error(function(data, status){
				alert("Error: "+status);
			});
		}
		
	}

	$.getDocuments();

}]);

/*app.controller('editDocumentController', ['updateInformationService',
									  	 function( updateService ){
	var $ = this;

	$.updating        = updateService.updating['document'];
	$.documentToUpdate = angular.copy(Query('documents','id',$.updating)[0]);
	$.documentBackUp   = angular.copy($.documentToUpdate);
	$.sucess 		  = false;

	$.updateDocument = function(){
		Update('documents',$.documentToUpdate.id,$.documentToUpdate);
		$.sucess = true;
	}

	$.save = function(){ 
		$.documentBackUp = angular.copy($.documentToUpdate);
		$.sucess  = false;
	}

	$.undo = function(){
		$.documentToUpdate = angular.copy($.documentBackUp);
		$.sucess  = false;
	}

}]);*/
app.controller('editDocumentController', ['updateInformationService',
										 '$http',
									  	 function( updateService, $http ){
	var $ = this;

	$.phpUrl 		  = 	{
								'getDocument' : 'Queries/getDocument.php',
								'update' 	  : 'Queries/updateDocument.php'
							};
	$.updating        	= Number(updateService.updating['document']);
	$.documentToUpdate  = {};
	$.documentBackUp    = {};
	$.sucess 		  	= false;

	$.updateStudent = function(state){
		$.documentToUpdate.idDocument = $.updating;
		$http.post( $.phpUrl.update, $.documentToUpdate )
			.success(function(data, status){
				$.sucess = state;
			})
			.error(function(data, error){
				alert('Error: '+error);
			});

	}
	$.getDocument = function(){
		$http.post( $.phpUrl.getDocument, { 'id' :  $.updating } )
			.success(function(data, status){
				console.table(data);
				$.documentToUpdate = data;
				$.documentBackUp = angular.copy($.documentToUpdate)
			})
			.error(function(data, error){
				alert('Error: '+error);
			});
	}

	$.save = function(){ 
		$.documentBackUp = angular.copy($.documentToUpdate);
		$.sucess  = false;
	}

	$.undo = function(){
		$.documentToUpdate = angular.copy($.documentBackUp);
		$.updateDocument(false);
	}

	$.getDocument(true);

}]);






app.controller('AddVoteController', function() {
	var $this = this;
	this.projects				= Query('projects','-','all'); 
	this.teams 					= Query('teams','-','all'); 
	this.possibleParticipants 	= Query('users','rol', 4);
	this.newParticipant 		= '';
	this.voters 				= [];
	this.selectedTeams 			= [];
	this.initialDate			= new Date();
	this.finalDate				= new Date( 
											this.initialDate.getFullYear(), 
											this.initialDate.getMonth(), 
											(this.initialDate.getDate() + 7) 
										);

	this.selectTeam = function( id, isSelected ){
		var i 		= 0,
			coord 	= 0
			l 		= $this.selectedTeams.length;

		if( !(isSelected) ){
			for(; (i<l); i++){
				if( $this.selectedTeams[i] === id ){
					coord  = i;
					break;
				}
			}
			$this.selectedTeams.splice(coord,1);
		} else {
			this.selectedTeams.push(id);
		}
	}

	this.addParticipant = function(){
		var newParticipant = Query('users','id',Number($this.newParticipant))[0];

		if( newParticipant ){
			if( $this.searchDupes( newParticipant ) ) {
				$this.voters.unshift( newParticipant );
				$this.newParticipant = null;
			}
		}
	}

	this.deleteParticipant = function(id){
		var i = 0,
			l = $this.voters.length;

		for(; (i<l); i++){
			if( $this.voters[i]['id'] === id ){
				$this.voters.splice(i,1);
				break;
			}
		}

	}

	this.searchDupes = function( item ){
		var i = 0,
			l = $this.voters.length;

		for(; (i<l); i++){
			if( ($this.voters[i] === item) ){
 				return false;
			}
		}

		return true;
	}

	this.valid = function(){
		if( 
			($this.voters.length) &&
			($this.selectedTeams.length) &&
			($this.validDates())
		 ){
			return true;
		} else { return false; }
	}

	$this.validDates = function(){
		if( $this.initialDate < $this.finalDate ){
			return true;
		} else { return false; }
	}

	this.registerVoting = function(){
		var newVoting = {
			voters 		: $this.voters,
			teams  		: $this.selectedTeams,
			initialDate : $this.initialDate,
			finalDate	: $this.finalDate
		};
		Insert('voting', newVoting);
		console.table( data['voting'] );
	}

});


app.controller('consultVoteController', function() {
	var $this = this;
	this.hide = true;
	this.projects	= Query('projects');


	this.addVote = function(){
	this.hide = false;
	}
});