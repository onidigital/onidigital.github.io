// -- Headers -- //
app.directive('adminHeader', function(){
	return { 
		restrict 	: 'E',
 		templateUrl	: '/Partials/menu-admin.html',
 		controller 	: 'menuController as menuCtrl'
	};
});

app.directive('teacherHeader', function(){
	return { 
		restrict 	: 'E',
 		templateUrl	: '/Partials/menu-teacher.html',
 		controller 	: 'menuController as menuCtrl'
	};
});

app.directive('deanHeader', function(){
	return { 
		restrict 	: 'E',
 		templateUrl	: '/Partials/menu-dean.html',
 		controller 	: 'menuController as menuCtrl'
	};
});

app.directive('directorHeader', function(){
	return { 
		restrict 	: 'E',
 		templateUrl	: '/Partials/menu-director.html',
 		controller 	: 'menuController as menuCtrl'
	};
});
app.directive('studentHeader', function(){
	return { 
		restrict 	: 'E',
 		templateUrl	: '/Partials/menu-student.html',
 		controller 	: 'menuController as menuCtrl'
	};
});
// -- End of Headers -- //