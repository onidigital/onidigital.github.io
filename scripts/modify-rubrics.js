var app = angular.module("modifyRubrics", []);

app.controller('ModifyRubricsController', function(){

	this.aspects = [{id:'aspect1'}];
	this.rubrics = Query('rubrics', '-', 'all');
	this.newRubric = {};

	this.addNewAspect = function() {
  		var newItemNo = this.aspects.length+1;
  		this.aspects.push({'id':'aspect'+newItemNo});
  		this.oneLess = true;
	};

	this.deleteNewAspect = function() {
		var newItemNo = this.aspects.length-1;
		this.aspects.pop();
	};

	this.editRubrics = function() {
		this.rubrics = Update('rubrics',rubric[0],this.newRubric);
		this.newRubric = {};

	};

});
