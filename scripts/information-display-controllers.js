app.controller('searchInformationController',['$state',function($state){
	var $this= this;

	this.displayedInformation = 'admin.search.areas';

	this.changeState = function(){
		$state.go( $this.displayedInformation );
	}
	
	// Initial state.	
	$this.changeState();
}]);

app.controller("ConsultAreaController", function(){
	
});