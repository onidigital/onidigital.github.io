app.service("stateChanger", ['$state', function($state){
	var $ = this;

	$.changeState = function( newState ){
		$state.go(newState);
	}

}]);

app.service('configurationModule', function(){
	var $ = this,
		sesion = Storage.get('sesion');

	$.searching    = sesion.rolCode+'.search.areas';
	$.registering  = sesion.rolCode+'.register.areas';

});


app.service('updateInformationModule', ['$state', function($state){
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

	$.goToUpdate = function( target, id ){
		var rol 	 = 'admin',
			newState = rol+'.update.'+target;

		$.updating[target] = id;
		$state.go(newState);
	}

}]);