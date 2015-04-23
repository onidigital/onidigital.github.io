app.service("stateChanger", ['$state', function($state){
	var $ = this;

	$.changeState = function( newState ){
		$state.go(newState);
	}

}]);

app.service('configurationModule', function(){
	var $ = this,
		sesion = Storage.get('sesion');

	$.searching    = 'project';
	$.registering  = 'project';

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

app.service('deleteInformationService', ['$state', function($state){
	var $ = this;

	$.deleteItem = function( target, id ){
		
		if( confirm('¿Está seguro de que desea eliminar este registro?') ){
			var objToDelete = {};

			for( var key in data[target] ){
				if( data[target][key]['id'] === id ){
					objToDelete = data[target][key];
					break;
				}
			}

			data[target].splice( data[target].indexOf(objToDelete), 1 );

			return data[target];
		}

	}

}]);