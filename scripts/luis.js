app.controller('addDocumentController', function($scope){
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

app.controller("ConsultAreaController", ['deleteInformationService',
										 'updateInformationService',
										 function( deleteService,
										 		   updateService
										 		  ){
	var $ = this;

	$.documents		= QueryAll('documents');
	$.updateService = updateService;
	$.deleteService = deleteService; 

}]);