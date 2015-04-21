app.controller('addDocumentController', function($scope){
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

});

app.controller("ConsultDocumentController", ['deleteInformationService',
										 'updateInformationService',
										 function( deleteService,
										 		   updateService
										 		  ){
	var $ = this;

	$.documents		= QueryAll('documents');
	$.updateService = updateService;
	$.deleteService = deleteService; 

}]);

app.controller('editDocumentController', ['updateInformationService',
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

}]);