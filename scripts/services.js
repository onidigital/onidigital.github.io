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
