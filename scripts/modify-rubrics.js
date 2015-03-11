var app = angular.module("app", []);

function Update( rubrics, rubrics, newRubrics ){

	for( var key in data[target] ){
		if( data[target][key]['id'] === old['id'] ){
			data[target][key] = updated;
			return data;
		}
	}

}

app.controller('PlusLessButtonsController', function(){
	this.oneLess = false;

	this.addContent = function($compile){
		return function(scope,element,attrs){
			element.bind('click', function(){
				scope.count++;
				angular.element(document.getElementbyId('newContent')).append($compile(document.getElementbyId('oldContent'))(scope));
			});
		};
	};
});	

