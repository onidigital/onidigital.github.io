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
