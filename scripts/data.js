var users = [
{
	'id'		: 1,
	'email' 	: 'admin@ucenfotec.ac.cr',
	'password' 	: 'admin',
	'name'		: 'John',
	'lastName'	: 'Doe',
	'rol'		: 1,
	'pId'		: 'a-1'
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
	'teams'		: [1, 2]		
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
	'teams'		: [2]		
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
	'teams'		: [1]		
},
{
	'id'		: 5,
	'email'		: 'dir-soft@ucenfotec.ac.cr',
	'password'	: 'director',
	'name'		: 'ditector1',
	'lastName'	: 'A-placeholder',
	'rol'		: 3,
	'pId'		: 'd-1',
	'careers'	: [1]
},
{
	'id'		: 6,
	'email'		: 'dir-web@ucenfotec.ac.cr',
	'password'	: 'director',
	'name'		: 'ditector2',
	'lastName'	: 'B-placeholder',
	'rol'		: 3,
	'pId'		: 'd-2',
	'careers'	: [2]
},
{
	'id'		: 7,
	'email'		: 'prof-alonso@ucenfotec.ac.cr',
	'password'	: 'angular',
	'name'		: 'Alonso',
	'lastName'	: 'Guevara',
	'rol'		: 4,
	'courses'	: [1],
	'pId'		: 'p-1'
},
{
	'id'		: 8,
	'email'		: 'prof-alvaro@ucenfotec.ac.cr',
	'password'	: 'liga',
	'name'		: 'Álvaro',
	'lastName'	: 'Cordero',
	'rol'		: 4,
	'courses'	: [1, 2],
	'pId'		: 'p-2'
},
{
	'id'		: 9,
	'email'		: 'prof-pablo@ucenfotec.ac.cr',
	'password'	: 'pabs',
	'name'		: 'Pablo',
	'lastName'	: 'Monestel',
	'rol'		: 4,
	'courses'	: [1, 2],
	'pId'		: 'p-3'
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
],
documents = [
{
	'id'			: 1,
	'name'  		: 'ERS',
	'description' 	: 'Especificación de requerimientos de software.'
}
],
areas = [
{
	'id'	: 1,
	'name'  : 'Proceso',
},
{
	'id'	: 2,
	'name'  : 'Técnico',
},
{
	'id'	: 3,
	'name'  : 'Factor Humano',
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
	'students'	: [3, 4]
}
],
vote = [
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
];


var data 		= {};
data.users 		= users;
data.rol 		= rol;
data.careers 	= careers;
data.courses 	= courses;
data.rubrics 	= rubrics;
data.areas 		= areas;
data.documents 	= documents;
data.groups		= groups;
data.teams		= teams;
data.proyects	= proyects;

