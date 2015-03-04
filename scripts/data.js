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
	'email'		: 'dir-web@ucenfotec.ac.cr',
	'password'	: 'director',
	'name'		: 'ditector2',
	'lastName'	: 'B-placeholder',
	'rol'		: 3,
	'pId'		: 'd-2',
	'careers'	: [2]
}
],
carrers = [
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
	'carreer'	: 2
},
{	
	'id'		: 2,
	'name'		: "Proyecto de Ingeniería de Software 1",
	'code'		: "web-soft-1",
	'credits'	: 15,
	'carreer'	: 1
}
];


var data = {};
data.users = users;
data.carrers = carrers;