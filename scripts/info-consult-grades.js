var gradesPerStudent = [
	{
		'student' 	: {
			'id'   		: 2,
			'email'		: 'est1@ucenfotec.ac.cr',
			'name'		: 'estudiante1',
			'lastName'	: 'A-placeholder',
		},
		'courses'	: 	[
							{
								'name'	 		: 'Proyecto de Desarrollo Web',
								'group'  		: 1,
								'initialDate' 	: '1/1/2015',
								'finalDate' 	: '1/4/2015',
								'grade'			: 80
							}
						]
 	},
 	{
		'student' 	: {
			'id'   		: 3,
			'email'		: 'est2@ucenfotec.ac.cr',
			'name'		: 'estudiante2',
			'lastName'	: 'B-placeholder',
		},
		'courses'	: 	[
							{
								'name'	 		: 'Proyecto de Desarrollo de Software',
								'group'  		: 1,
								'initialDate' 	: '1/1/2015',
								'finalDate' 	: '1/4/2015',
								'grade'			: 85
							}
						]
 	},
 	{
		'student' 	: {
			'id'   		: 4,
			'email'		: 'est3@ucenfotec.ac.cr',
			'name'		: 'estudiante3',
			'lastName'	: 'C-placeholder',
		},
		'courses'	: 	[
							{
								'name'	 		: 'Proyecto de TIC',
								'group'  		: 1,
								'initialDate' 	: '1/1/2015',
								'finalDate' 	: '1/4/2015',
								'grade'			: 83
							}
						]
 	}
];

app.controller('consultGradesController',function(){
	var $this 				= this;
	this.students 			= Query('users','rol',2);
	this.currentStudent 	= 2;
	this.gradesPerStudent 	= gradesPerStudent;
	this.academicRecord 	= this.gradesPerStudent[0];

	this.displayGrades = function(){
		var id 	= $this.currentStudent,
			i 	= 0,
			l 	= $this.gradesPerStudent.length;

		for(; (i<l); i++){
			if( $this.gradesPerStudent[i]['student']['id'] == id ){
				$this.academicRecord = $this.gradesPerStudent[i];
				break;
			}
		}

	}

});