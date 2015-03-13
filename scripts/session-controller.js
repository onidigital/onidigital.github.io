app.controller('sessionController',function(){
	this.info = JSON.parse(localStorage.getItem('sesion'));
});