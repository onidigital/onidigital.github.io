var users = [
{
	'id'		: 1,
	'email' 	: 'admin@ucenfotec.ac.cr',
	'password' 	: 'admin',
	'name'		: 'John',
	'lastName'	: 'Doe',
	'rol'		: 1,
	'pId'		: 'a-1',
	'image'		: ''
},
{
	'id'		: 2,
	'email'		: 'est1@ucenfotec.ac.cr',
	'password'	: 'estudiante',
	'name'		: 'estudiante1',
	'lastName'	: 'A-placeholder',
	'rol'		: 2,
	'pId'		: 's-1',
	'careers'	: [1, 2],
	'courses'	: [1, 2],
	'proyects'	: [1, 2],
	'teams'		: [1, 2],
	'image'		: ''	,
	'document' :	[1,2,3]//agregó Carolina	

},
{
	'id'		: 3,
	'email'		: 'est2@ucenfotec.ac.cr',
	'password'	: 'estudiante',
	'name'		: 'estudiante2',
	'lastName'	: 'B-placeholder',
	'rol'		: 2,
	'pId'		: 's-2',
	'careers'	: [2],
	'courses'	: [2],
	'proyects'	: [2],
	'teams'		: [2],
	'image'		: ''	,
	'document' :	[1,2,3]	//agregó Carolina	
},
{
	'id'		: 4,
	'email'		: 'est3@ucenfotec.ac.cr',
	'password'	: 'estudiante',
	'name'		: 'estudiante3',
	'lastName'	: 'C-placeholder',
	'rol'		: 2,
	'pId'		: 's-3',
	'careers'	: [1],
	'courses'	: [1],
	'proyects'	: [1],
	'teams'		: [1],
	'image'		: '',
	'document' :	[1,2,3]	//agregó Carolina		
},
{
	'id'		: 5,
	'email'		: 'dir-soft@ucenfotec.ac.cr',
	'password'	: 'director',
	'name'		: 'ditector1',
	'lastName'	: 'A-placeholder',
	'rol'		: 3,
	'pId'		: 'd-1',
	'careers'	: [1],
	'image'		: '../images/user.png'
},
{
	'id'		: 6,
	'email'		: 'dir-web@ucenfotec.ac.cr',
	'password'	: 'director',
	'name'		: 'ditector2',
	'lastName'	: 'B-placeholder',
	'rol'		: 3,
	'pId'		: 'd-2',
	'careers'	: [2],
	'image'		: '../images/user.png'
},
{
	'id'		: 7,
	'email'		: 'prof-alonso@ucenfotec.ac.cr',
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
	'email'		: 'prof-alvaro@ucenfotec.ac.cr',
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
	'email'		: 'prof-pablo@ucenfotec.ac.cr',
	'password'	: 'pabs',
	'name'		: 'Pablo',
	'lastName'	: 'Monestel',
	'rol'		: 4,
	'courses'	: [1, 2],
	'pId'		: 'p-3',
	'image'		: ''
},
{
	'id'		: 10,
	'email'		: 'decano@ucenfotec.ac.cr',
	'password'	: 'decano',
	'name'		: 'Decano',
	'lastName'	: 'Soy',
	'rol'		: 5,
	'pId'		: 'd-1',
	'image'		: ''
}
],
careers = [
{	
	'id'		: 1,
	'name'		: 'Ingeniería de software',
	'courses'	: [1]
},
{
	'id'		: 2,
	'name'		: 'Desarrollo Web',
	'courses'	: [2]
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
// agregó carolina
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
	'nombre'	: 'ERS - Software - v.1',
	'aspectos'	: 	[
						{
							'nombre' : 'Forma',
							'valor'	 : 10
						},
						{
							'nombre' : 'contenido',
							'valor'	 : 80
						},
						{
							'nombre' : 'Ortografia',
							'valor'  : 10
						}
					]
},
{
	'id'		: 2,
	'nombre'	: 'ERS - Diseno web - v.1',
	'aspectos'	: 	[
						{
							'nombre' : 'Forma',
							'valor'	 : 10
						},
						{
							'nombre' : 'contenido',
							'valor'	 : 80
						},
						{
							'nombre' : 'Ortografia',
							'valor'  : 10
						}
					]
},
{
	'id'		: 3,
	'nombre'	: 'ERS - TIC - v.1',
	'aspectos'	: 	[
						{
							'nombre' : 'Forma',
							'valor'	 : 10
						},
						{
							'nombre' : 'contenido',
							'valor'	 : 80
						},
						{
							'nombre' : 'Ortografia',
							'valor'  : 10
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
	'description' 	: 'Descripción del área'
},
{
	'id'			: 2,
	'name'  		: 'Técnico',
	'description' 	: 'Descripción del área'
},
{
	'id'			: 3,
	'name'  		: 'Factor Humano',
	'description' 	: 'Descripción del área'
}
]
groups = [
{
	'id'		: 1,
	'course'	: 1,
	'students'	: [3,4],
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
},
// agregó carolina
,{
	'id'		: 2,
	'course'	: 2,
	'students'	: [3,4],
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
proyects = [
{
	'id'			: 1,
	'name'  		: 'Biblioteca Virtual',
	'description' 	: 'Una biblioteca virtual muy completa.',
	'team'			: 1
}
],
teams = [
{
	'id'		: 1,
	'name'	 	: 'Oni',
	'proyect'	: 1,
	'students'	: [3, 4],
	'logo'		: ''
},
{
	'id'		: 2,
	'name'	 	: 'Superb',
	'proyect'	: 2,
	'students'	: [3, 4],
	'logo'		: ''
},
{
	'id'		: 3,
	'name'	 	: 'Fjorgyn',
	'proyect'	: 1,
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


var data 			= {};
data.users 			= users;
data.rol 			= rol;
data.studentRol     = studentRol;
data.careers 		= careers;
data.courses 		= courses;
data.rubrics 		= rubrics;
data.areas 			= areas;
data.documents 		= documents;
data.groups			= groups;
data.teams			= teams;
data.proyects		= proyects;
data.competitorTeam = competitorTeam;
data.winnerTeam		= winnerTeam;
data.voting			= voting;
data.documentsPerGroup =documentsPerGroup;
