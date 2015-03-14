app.controller('InfoDeanController', function() {
	this.deans = Query('users','rol',5); //this hace referencia al controlador
});