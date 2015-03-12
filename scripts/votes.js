app.controller('votesController',function(){
	var date 	= new Date(),
		year 	= date.getFullYear(),
		$this 	= this;

	this.voting = Query('voting','id', year);
	this.teams  = this.voting['teams']; 

});