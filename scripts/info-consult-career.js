
app.controller('InfoCareerController', function() {
	this.careers = Query('careers'); //this hace referencia al controlador
	this.directores = Query('users','rol',3);

this.getDirector = function ($id){
		return Query('directores','id',$id).name;
	}
});