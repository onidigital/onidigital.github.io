var app = angular.module("modify", ['ui.router','ngMaterial']);

app.controller('RubricsController', function() {
	var $this = this;

	this.editRubrics = function(nombre, aspecto, valor){
		var rubrics = Query('rubrics','nombre', 'aspecto', 'valor');

		if (rubric) {
			$this.nombre = true;
		} $this.aspecto = 'aspecto' && $this.valor = 'valor';
	}

});

