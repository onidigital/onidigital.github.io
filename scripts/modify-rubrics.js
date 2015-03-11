var app = angular.module("modify", ['ui.router']);

app.controller('RubricsController', function() {
	function updateRubrics( target, old, updated ){

		for( var key in data[target] ){
			if( data[target][key]['id'] === old['id'] ){
				data[target][key] = updated;
				return data;
			}
		}

	}	
});

