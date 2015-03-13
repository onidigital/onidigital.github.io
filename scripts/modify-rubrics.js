app.controller('ModifyRubricsController', function(){
	var $this = this;
	this.aspects = [];
	this.rubrics = Query('rubrics', '-', 'all');
	this.newRubric = {};
	this.newAspect = {};

	console.table(this.rubrics);

	this.addNewAspect = function() {
  		var newItemNo = $this.aspects.length+1;
  		if ($this.newAspect.name && $this.newAspect.value != '') {
  		$this.aspects.unshift( $this.newAspect );
  		$this.newAspect = {};
  		};
	};

	this.deleteNewAspect = function( index ) {
		$this.aspects.splice(index,1);
	};

	this.editRubrics = function() {
		$this.rubrics = Update('rubrics',rubric[0],$this.newRubric);
		$this.newRubric = {};
		console.table(rubrics);
	}

});
