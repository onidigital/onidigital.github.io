app.service("stateChanger", ['$state', function($state){
	var $ = this;

	$.changeState = function( newState ){
		$state.go(newState);
	}

}]);

app.service('configurationModule', function(){
	var $ 			= this,
		defaultView = Storage.get('displayingViews') || 'project';

	$.displaying    = defaultView;

	$.updateDisplaying = function(newView){
		Storage.set('displayingViews', newView);
		$.displaying = newView;
	}

});


app.service('updateInformationService', ['$state', function($state){
	var $ = this;

	$.updating = {
		area 	 : 0,
		career 	 : 0,
		course   : 0,
		dean 	 : 0,
		director : 0,
		group 	 : 0,
		project  : 0,
		rubric 	 : 0,
		student  : 0,
		teacher  : 0,
		team	 : 0
	}

	$.advancedView = function( target, id ){
		var rol 	 = 'admin',
			newState = rol+'.update.'+target;

		$.updating[target] = id;
		$state.go(newState);
	}

}]);

app.service('deleteInformationService', ['$state', 
										 '$http',
										 '$rootScope',
										 function(
										 			$state,
										 			$http,
										 			$rootScope
										 		){
	var $ = this;

	$.deleteItem = function( phpUrl, id ){
		// Obsoleto;

	}

}]);