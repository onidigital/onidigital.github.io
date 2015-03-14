app.controller('addAreaController', function() {
	var $this = this;
	this.areas = Query('areas','-','all'); //this hace referencia al controlador
	this.newArea = {};

	this.addArea = function(){
		$this.areas = Insert('areas',$this.newArea);
		$this.newArea = {};
		console.table($this.areas);
	}

});

