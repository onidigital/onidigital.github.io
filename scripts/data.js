var Storage = {
	get   : function(key){
		return JSON.parse( localStorage.getItem(key) );
	},
	set   : function(key,item){
		localStorage.setItem(key, JSON.stringify(item) );
	},
	clear : function(){ 
		localStorage.clear() 
	}
};

var users = [
{
	'id'		: 1,
	'email' 	: 'admin@ucenfotec.ac.cr',
	'password' 	: 'admin',
	'name'		: 'John',
	'lastName'	: 'Doe',
	'rol'		: 1,
	'pId'		: 'a-1',
	'image'		: '../images/user.png'
},
{
	'id'		: 5,
	'email'		: 'pmonestel@ucenfotec.ac.cr',
	'password'	: 'director',
	'name'		: 'Pablo',
	'lastName'	: 'Monestel',
	'rol'		: 3,
	'pId'		: 'd-1',
	'careers'	: [1],
	'image'		: '../images/user.png'
},
{
	'id'		: 6,
	'email'		: 'jmatias@ucenfotec.ac.cr',
	'password'	: 'director',
	'name'		: 'Juan',
	'lastName'	: 'Matias',
	'rol'		: 3,
	'pId'		: 'd-2',
	'careers'	: [2],
	'image'		: '../images/user.png'
},
{
	'id'		: 7,
	'email'		: 'aguevara@ucenfotec.ac.cr',
	'password'	: 'angular',
	'name'		: 'Alonso',
	'lastName'	: 'Guevara',
	'rol'		: 4,
	'courses'	: [1],
	'pId'		: 'p-1',
	'image'		: ''
},
{
	'id'		: 8,
	'email'		: 'acordero@ucenfotec.ac.cr',
	'password'	: 'liga',
	'name'		: 'Álvaro',
	'lastName'	: 'Cordero',
	'rol'		: 4,
	'courses'	: [1, 2],
	'pId'		: 'p-2',
	'image'		: ''
},
{
	'id'		: 9,
	'email'		: 'jbeita@ucenfotec.ac.cr',
	'password'	: 'beita',
	'name'		: 'Jose',
	'lastName'	: 'Beita',
	'rol'		: 4,
	'courses'	: [1, 2],
	'pId'		: 'p-3',
	'image'		: ''
},
{
	'id'		: 7,
	'email'		: 'aguevara@ucenfotec.ac.cr',
	'password'	: 'angular',
	'name'		: 'Alonso',
	'lastName'	: 'Guevara',
	'rol'		: 4,
	'courses'	: [1],
	'pId'		: 'p-1',
	'image'		: ''
},
{
	'id'		: 8,
	'email'		: 'acordero@ucenfotec.ac.cr',
	'password'	: 'liga',
	'name'		: 'Álvaro',
	'lastName'	: 'Cordero',
	'rol'		: 4,
	'courses'	: [1, 2],
	'pId'		: 'p-2',
	'image'		: ''
},
{
	'id'		: 9,
	'email'		: 'jbeita@ucenfotec.ac.cr',
	'password'	: 'beita',
	'name'		: 'Jose',
	'lastName'	: 'Beita',
	'rol'		: 4,
	'courses'	: [1, 2],
	'pId'		: 'p-3',
	'image'		: ''
},
{
	'id'		: 7,
	'email'		: 'aguevara@ucenfotec.ac.cr',
	'password'	: 'angular',
	'name'		: 'Alonso',
	'lastName'	: 'Guevara',
	'rol'		: 4,
	'courses'	: [1],
	'pId'		: 'p-1',
	'image'		: ''
},
{
	'id'		: 8,
	'email'		: 'acordero@ucenfotec.ac.cr',
	'password'	: 'liga',
	'name'		: 'Álvaro',
	'lastName'	: 'Cordero',
	'rol'		: 4,
	'courses'	: [1, 2],
	'pId'		: 'p-2',
	'image'		: ''
},
{
	'id'		: 9,
	'email'		: 'jbeita@ucenfotec.ac.cr',
	'password'	: 'beita',
	'name'		: 'Jose',
	'lastName'	: 'Beita',
	'rol'		: 4,
	'courses'	: [1, 2],
	'pId'		: 'p-3',
	'image'		: ''
},
{
	'id'		: 10,
	'email'		: 'lvindas@ucenfotec.ac.cr',
	'password'	: 'decano',
	'name'		: 'Luis',
	'lastName'	: 'Vindas',
	'rol'		: 5,
	'pId'		: 'd-1',
	'image'		: ''
},
{
	'id'		: 11,
	'email'		: 'mucros@ucenfotec.ac.cr',
	'password'	: 'mucros',
	'name'		: 'María Eugenia',
	'lastName'	: 'Ucrós',
	'rol'		: 3,
	'careers'	: [3],
	'pId'		: 'd-6',
	'image'		: ''
}
],
careers = [
{	
	'id'		: 1,
	'name'		: 'Ingeniería de software',
	'director'  : 'María Eugenia Ucrós',
	'courses'	: [1]
},
{
	'id'		: 2,
	'name'		: 'Desarrollo Web',
	'director'  : 'María Eugenia Ucrós',
	'courses'	: [2]
},
{
	'id'		: 3,
	'name'		: 'Integración de tecnologías',
	'director'  : 'María Eugenia Ucrós',
	'courses'	: [3]
}
],
courses = [
{	
	'id'		: 1,
	'name'		: "Proyecto de desarrollo Web 1",
	'code'		: "web-proy-1",
	'credits'	: 10,
	'career'	: 2
},
{	
	'id'		: 2,
	'name'		: "Proyecto de Ingeniería de Software 1",
	'code'		: "web-soft-1",
	'credits'	: 15,
	'career'	: 1
}
],
rol = [
{
	'id' 	: 1,
	'code'	: 'admin',
	'name'	: 'Administrador'
},
{
	'id' 	: 2,
	'code'	: 'student',
	'name'	: 'Estudiante'
},
{
	'id' 	: 3,
	'code'	: 'director',
	'name'	: 'Director de Carrera'
},
{
	'id' 	: 4,
	'code'	: 'teacher',
	'name'	: 'Profesor'
},
{
	'id'	: 5,
	'code'	: 'dean',
	'name'	: 'Decano'
}
],
// Estudiantes
students = [
	{
		'id'		: 1,
		'email'		: 'dvargasa@ucenfotec.ac.cr',
		'name'		: 'Diego',
		'lastName'	: 'Vargas',
		'pId'		: 's-1',
		'proyects'	: [1, 2],
		'teams'		: [1, 2],

	},
	{
		'id'		: 3,
		'email'		: 'cborge@ucenfotec.ac.cr',
		'name'		: 'Carolina',
		'lastName'	: 'Borge',
		'pId'		: 's-2',
		'proyects'	: [2],
		'teams'		: [2],
	},
	{
		'id'		: 4,
		'email'		: 'iaraya@ucenfotec.ac.cr',
		'password'	: 'estudiante',
		'name'		: 'Irene',
		'lastName'	: 'Araya',
		'pId'		: 's-3',
		'teams'		: [1],
	}
]
studentRol = [
{
	'id' 	: 1,
	'name'	: 'Coordinador'
},
{
	'id' 	: 2,
	'name'	: 'Soporte'
},
{
	'id' 	: 3,
	'name'	: 'Calidad'
},
{
	'id' 	: 4,
	'name'	: 'Desarrollo'
}
],
rubrics = [
{
	'id'		: 1,
	'name'	: 'ERS - Software - v.1',
	'aspects'	: 	[
						{
							'name' 	 : 'Forma',
							'value'	 : 10
						},
						{
							'name' 	 : 'contenido',
							'value'	 : 80
						},
						{
							'name' 	 : 'Ortografia',
							'value'  : 10
						}
					]
},
{
	'id'		: 2,
	'name'	: 'ERS - Diseno web - v.1',
	'aspects'	: 	[
						{
							'name' 	 : 'Forma',
							'value'	 : 10
						},
						{
							'name' 	 : 'contenido',
							'value'	 : 80
						},
						{
							'name' 	 : 'Ortografia',
							'value'  : 10
						}
					]
},
{
	'id'		: 3,
	'name'	: 'ERS - TIC - v.1',
	'aspects'	: 	[
						{
							'name' 	 : 'Forma',
							'value'	 : 10
						},
						{
							'name' 	 : 'contenido',
							'value'	 : 80
						},
						{
							'name' 	 : 'Ortografia',
							'value'  : 10
						}
					]
},
],
documents = [
{
	'id'			: 1,
	'name'  		: 'ERS',
	'description' 	: 'Especificación de requerimientos de software.',
	'area'			: 'Proceso'
},
// agregó carolina
{
	'id'			: 2,
	'name'  		: 'Disenno',
	'description' 	: 'Documento de Disenno.',
	'area'			: 'Proceso'
},
// agregó carolina
{
	'id'			: 3,
	'name'  		: 'Analisis',
	'description' 	: 'Documento de Analisis.',
	'area'			: 'Proceso'
}
],
// agregó carolina
documentsPerGroup=[{
	'id'			: 1,
	'document'  	: 1,
	'area'			: 1,
	'group'			: 1
},
{
	'id'			: 2,
	'document'  	: 2,
	'area'			: 2,
	'group'			: 2
},
{
	'id'			: 3,
	'document'  	: 3,
	'area'			: 3,
	'group'			: 3
}
],
areas = [
{
	'id'			: 1,
	'name'  		: 'Proceso',
	'description' 	: 'Area del curso que se encarga de las documentaciones.'
},
{
	'id'			: 2,
	'name'  		: 'Técnico',
	'description' 	: 'Tecnicas, lenguajes de programacion y trabajos practicos.'
},
{
	'id'			: 3,
	'name'  		: 'Factor Humano',
	'description' 	: 'Parte encargada de mejorar la relacion entre los grupos.'
}
]
groups = [
{
	'id'		    : 1,
	'course'	    : 1,
	'students'	    : [3,4],
	'initialDate'  : "2015-01-09",
	'finalDate'     : "2015-05-14",
	'documents'     : 	[
						{
							'id' 	 : 1,
							'rubric' : 1
						}
					],
	'areas'		: 	[
						{
							'area'		: 3,
							'professor' : 9
						},
						{
							'area'		: 1,
							'professor' : 8
						},
						{
							'area'		: 2,
							'professor' : 7
						}
					],
	'grades'	: 	[
						{
							'student'  : 3,
							'document' : 1,
							'grade'	   : 90
						}
					]
},
// agregó carolina
{
	'id'		: 2,
	'course'	: 2,
	'students'	: [3,4],
	'initialDate'  : "2015-01-09",
	'finalDate'     : "2015-05-14",
	'documents' : 	[
						{
							'id' 	 : 1,
							'rubric' : 1
						}
					],
	'areas'		: 	[
						{
							'area'		: 3,
							'professor' : 9
						},
						{
							'area'		: 1,
							'professor' : 8
						},
						{
							'area'		: 2,
							'professor' : 7
						}
					],
	'grades'	: 	[
						{
							'student'  : 3,
							'document' : 1,
							'grade'	   : 90
						}
					]
}
],
projects = [
{
	'id'			: 1,
	'name'  		: 'Biblioteca Virtual',
	'description' 	: 'Una biblioteca virtual muy completa.',
	'keywords'		: 'biblioteca virtual completa'
},
{
	'id'			: 1,
	'name'  		: 'Biblioteca Virtual',
	'description' 	: 'Una biblioteca virtual muy completa.',
	'keywords'		: 'biblioteca virtual completa'
},
{
	'id'			: 1,
	'name'  		: 'Biblioteca Virtual',
	'description' 	: 'Una biblioteca virtual muy completa.',
	'keywords'		: 'biblioteca virtual completa'
}
],
teams = [
{
	'id'		: 1,
	'name'	 	: 'Oni',
	'project'	: 1,
	'students'	: [3, 4],
	'logo'		: ''
},
{
	'id'		: 2,
	'name'	 	: 'Superb',
	'project'	: 1,
	'students'	: [3, 4],
	'logo'		: ''
},
{
	'id'		: 3,
	'name'	 	: 'Fjorgyn',
	'project'	: 1,
	'students'	: [3, 4],
	'logo'		: ''
}
],
competitorTeam=[
{
	'logo':'href:',
	'video':'url',
	'information':'este equipo esta participando',
	'puntaje':80
}],
winnerTeam=[
{
	'logo':'href',
	'video':'url',
	'information':'este equipo es el ganador',
	'puntaje':100
}],
votes = [
{
	'id'		: 1,
	'teams'		: 	[
						{
							'idTeam'	: 1,
							'votes'		: 900,
							'video'	    : 'URL'
						}
					] 
}
],
voting = [
{
	'id'			: 2015,
	'voters'    	: [1,5,6],
	'teams'		  	: [2,1], 
	'initialDate' 	: 'Thu Mar 12 2015 07:17:56 GMT-0600 (Central America Standard Time)', 
	'finalDate'		: 'Thu Mar 19 2015 00:00:00 GMT-0600 (Central America Standard Time)', 
}
];


var data 				= {};
data.users 				= users;
data.students 			= students;
data.rol 				= rol;
data.studentRol     	= studentRol;
data.careers 			= careers;
data.courses 			= courses;
data.rubrics	 		= rubrics;
data.areas 				= areas;
data.documents 			= documents;
data.groups				= groups;
data.teams				= teams;
data.projects			= projects;
data.competitorTeam 	= competitorTeam;
data.winnerTeam			= winnerTeam;
data.voting				= voting;
data.documentsPerGroup 	= documentsPerGroup;
