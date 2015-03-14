
app.controller('InfoControllerDeliverable', function() {
	//this.documentsPerGroup = Query('documentsPerGroup'); //this hace referencia al controlador
	this.groups = Query('groups');
	this.areas = Query('areas');
	this.documents = Query('documents');
	this.courses = Query('courses');


	this.getDocuments= function ($id){
		return Query('documents','id',$id)[0].name;
	}
	this.getAreas= function ($id){
		return Query('areas','id',$id)[0].name;
	}
	this.getCourses= function ($id){
		return Query('courses','id',$id)[0].name;
	}
});
