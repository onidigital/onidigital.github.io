-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3307
-- Tiempo de generación: 25-04-2015 a las 03:43:28
-- Versión del servidor: 5.6.21
-- Versión de PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `bdonidigital`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteDocument`(IN `pIdDocument` INT(11))
    NO SQL
Begin

	Delete 
    From bdonidigital.document
    Where document.idDocument = pIdDocument;
    
    Call getDocuments();

End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteProject`(IN `pIdProject` INT(11))
    NO SQL
Begin

	Delete 
    From bdonidigital.project
    Where project.idProject = pIdProject;
    
    Call getProjects();

End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteStudent`(IN `pIdPerson` INT(11))
    NO SQL
Begin

	Delete 
    From bdonidigital.person
    Where person.idPerson = pIdPerson;
    
    Delete 
    From bdonidigital.student
    Where student.idPerson = pIdPerson;
    
    Call getStudents();

End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteTeam`(IN `pIdTeam` INT(11))
    NO SQL
Begin

	Delete 
    From bdonidigital.team
    Where team.idTeam = pIdTeam;
    
    Call getTeams();

End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getDocument`(IN `pIdDocument` INT(11))
    NO SQL
begin
    Select *
    From   document
    Where document.idDocument = pIdDocument;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getDocuments`()
    NO SQL
begin

	Select *
	From document;

end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getProject`(IN `project` INT(11))
    NO SQL
    COMMENT 'Devuelve el proyecto solicitado.'
begin
    Select *
    From   project
    Where  project.idProject = project;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getProjects`()
    NO SQL
    COMMENT 'Retorna todos los proyectos.'
begin
    Select * 
    From   project;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getStudent`(IN `pIdPerson` INT(11))
    NO SQL
Begin

	Select *
    From   person as p
    Where  p.idPerson = pIdPerson;

End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getStudents`()
    NO SQL
    COMMENT 'Retorna todos los estudiantes.'
begin
    Select  p.idPerson,
    		p.idPersonal,
    		p.first_name,
            p.last_name,
            p.email
    From	person as p
    		Inner Join student as s
            	On s.idPerson = p.idPerson;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getTeam`(IN `pIdTeam` INT(11))
    NO SQL
begin

	Select  t.teamName,
    		t.idProject,
            t.logo,
            p.first_name,
            p.last_name,
            p.idPersonal,
            d.idDocument,
            d.documentName,
            td.documentLocation
    From	team as t
    			Inner Join 
                	teammembers as tm
                     On tm.idTeam = t.idTeam
                Inner Join 
                	teamdocuments as td
                     On td.idTeam = t.idTeam
                Inner Join 
                	student as s
                	 On s.idStudent = tm.idStudent
                Inner Join
                	person as p
                     on p.idPerson = s.idPerson
                Inner Join 
                	project as pj
                	 On pj.idProject = t.idProject
                Inner Join 
                	document as d
              On d.idDocument = td.idDocument                	    Where	t.idTeam = pIdTeam;
    
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getTeamBasicInfo`(IN `pIdTeam` INT(11))
    NO SQL
Begin

	Select t.teamName,
    	   t.idProject
    From   team as t
    Where  t.idTeam = pIdTeam;

End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getTeamRols`()
    NO SQL
Begin

	Select *
    From teamrols;

End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getTeams`()
    NO SQL
    COMMENT 'Retorna todos los equipos.'
begin

	Select t.idTeam,
    	   t.teamName    as name,
    	   p.projectName as project
    From   team as t
           Inner Join project as p
           	On p.idProject = t.idProject;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getUser`(IN `pEmail` VARCHAR(50))
    NO SQL
    COMMENT 'Retorna un usuario.'
begin
	Select p.email,
    	   p.first_name,
           p.last_name,
           u.password
    From   person as p
    		Inner Join tbuser as u
            	On u.idPerson = p.idPerson
    Where  p.email = pEmail;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertDocument`(IN `pName` VARCHAR(50), IN `pDescription` VARCHAR(500))
    NO SQL
Begin

Insert Into bdonidigital.document 
	(
       idDocument, 
       documentName, 
       description 
    ) 
	Values 
    (	
        NULL,
     	pName, 
     	pDescription	 
     );

End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertProject`(IN `pName` VARCHAR(50), IN `pDescription` VARCHAR(500), IN `pKeywords` VARCHAR(250))
    NO SQL
    COMMENT 'Inserta un proyecto.'
Begin

Insert Into bdonidigital.project 
	(
       idProject, 
       projectName, 
       description, 
       keywords
    ) 
	Values 
    (	
        NULL, 
     	pName, 
     	pDescription, 	 
        pKeywords
     );

End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertStudent`(IN `pFirst_Name` VARCHAR(500), IN `pLast_Name` VARCHAR(500), IN `pPersonalId` VARCHAR(50), IN `pEmail` VARCHAR(50))
    NO SQL
    COMMENT 'Inserta una nueva persona.'
Begin 

INSERT INTO bdonidigital.person 
	(
        idPerson, 
        first_name, 
        last_name, 
        idPersonal, 
        email
     )
    VALUES 
    	(
            NULL, 
            pFirst_Name, 
            pLast_Name, 
            pPersonalId, 
            pEmail
         );
    
    Set @udIdPersonal = (	Select p.idPerson
    						From   person as p
                     Where  p.idPersonal = pPersonalId);
 
    
    INSERT INTO bdonidigital.student 
	(
        idStudent, 
        idPerson 
     )
    VALUES 
    	(
            NULL, 
            @udIdPersonal
         );
  
End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertTeam`(IN `pName` VARCHAR(50), IN `pIdProject` INT(11), IN `pLogo` VARCHAR(500))
    NO SQL
Begin

Insert Into bdonidigital.team 
	(
       idTeam, 
       teamName, 
       idProject, 
       logo
    ) 
	Values 
    (	
        NULL, 
     	pName, 
     	pIdProject, 	 
        pLogo
     );

End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateProject`(IN `pName` VARCHAR(50), IN `pDescription` VARCHAR(500), IN `pKeywords` VARCHAR(250), IN `pIdProject` INT(11))
    NO SQL
Begin

	Update bdonidigital.project
    	Set projectName = pName, 
        	description = pDescription, 
            keywords	= pKeywords
        WHERE project.idProject = pIdProject;

End$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateStudent`(IN `pFirstName` VARCHAR(500), IN `pLastName` VARCHAR(500), IN `pIdPersonal` VARCHAR(50), IN `pEmail` VARCHAR(50), IN `pIdPerson` INT(11))
    NO SQL
Begin

	Update bdonidigital.person
    	Set first_name = pFirstName, 
        	last_name  = pLastName, 
            idPersonal = pIdPersonal, 
            email 	   = pEmail
        WHERE person.idPerson = pIdPerson;

End$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `document`
--

CREATE TABLE IF NOT EXISTS `document` (
`idDocument` int(10) NOT NULL,
  `documentName` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `document`
--

INSERT INTO `document` (`idDocument`, `documentName`, `description`) VALUES
(39, 'ERS', 'Especificacion de Requerimientos de Software'),
(40, 'IAS', 'Informe de Analisis de Software');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participants`
--

CREATE TABLE IF NOT EXISTS `participants` (
  `idVote` int(10) NOT NULL,
  `idTeam` int(10) NOT NULL,
  `finalScore` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person`
--

CREATE TABLE IF NOT EXISTS `person` (
`idPerson` int(10) unsigned NOT NULL,
  `first_name` varchar(500) NOT NULL,
  `last_name` varchar(500) NOT NULL,
  `idPersonal` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `person`
--

INSERT INTO `person` (`idPerson`, `first_name`, `last_name`, `idPersonal`, `email`) VALUES
(1, 'Jorge Daniel', 'Valverde Matarrita', '304870421', 'jvalverde@ucenfotec.ac.cr'),
(2, 'Leslie Daniela', 'Andrade', '3045871', 'landrade@ucenfotec.ac.cr'),
(8, 'Alonso', 'Guevara', '30584561', 'aguevara@ucenfotec.ac.cr'),
(14, 'Rebeca Raquel', 'Poveda Rojas', '30578456', 'rpovedar@ucenfotec.ac.cr'),
(16, 'Alberto', 'Palacios', '3065123', 'apalacios@ucenfotec.ac.cr');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project`
--

CREATE TABLE IF NOT EXISTS `project` (
`idProject` int(10) NOT NULL,
  `projectName` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `keywords` varchar(250) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `project`
--

INSERT INTO `project` (`idProject`, `projectName`, `description`, `keywords`) VALUES
(1, 'Biblioteca', 'Una biblioteca virtual muy completa.', 'biblioteca virtual completa.'),
(2, 'Registro medico', 'Registro medico para el hospital de San Jose.', 'Registro medico hospital San Jose'),
(3, 'Red social', 'Una red social para estudiantes de una universidad.', 'red social universidad'),
(4, 'Tienda virtual', 'Tienda virtual de articulos varios', 'tienda virtual articulos varios'),
(8, 'Una pÃ¡gina similar a Spotify', 'Una pÃ¡gina similar a Spotify', 'spotify');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `student`
--

CREATE TABLE IF NOT EXISTS `student` (
`idStudent` int(10) NOT NULL,
  `idPerson` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `student`
--

INSERT INTO `student` (`idStudent`, `idPerson`) VALUES
(1, 1),
(2, 2),
(10, 14),
(12, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbuser`
--

CREATE TABLE IF NOT EXISTS `tbuser` (
`idUser` int(10) unsigned NOT NULL,
  `idPerson` int(10) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbuser`
--

INSERT INTO `tbuser` (`idUser`, `idPerson`, `password`) VALUES
(1, 8, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `team`
--

CREATE TABLE IF NOT EXISTS `team` (
`idTeam` int(10) NOT NULL,
  `teamName` varchar(50) NOT NULL,
  `idProject` int(10) NOT NULL,
  `logo` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `team`
--

INSERT INTO `team` (`idTeam`, `teamName`, `idProject`, `logo`) VALUES
(4, 'Innova', 3, '101010\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),
(6, 'Ion', 1, '10101010\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),
(7, 'Avalon', 3, 'Images/logos/avalon.jpg'),
(18, 'Los Ultra mejores', 4, 'Images/logos/placeholder.png'),
(19, 'Geezbla', 3, 'Images/logos/placeholder.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teamdocuments`
--

CREATE TABLE IF NOT EXISTS `teamdocuments` (
  `idTeam` int(11) NOT NULL,
  `documentLocation` varchar(500) NOT NULL,
  `idDocument` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `teamdocuments`
--

INSERT INTO `teamdocuments` (`idTeam`, `documentLocation`, `idDocument`) VALUES
(7, 'documents/', 39),
(7, 'documents/', 40);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teammembers`
--

CREATE TABLE IF NOT EXISTS `teammembers` (
  `idTeam` int(10) NOT NULL,
  `idStudent` int(10) NOT NULL,
  `idRol` int(11) NOT NULL,
  `grade` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `teammembers`
--

INSERT INTO `teammembers` (`idTeam`, `idStudent`, `idRol`, `grade`) VALUES
(7, 2, 1, 90),
(7, 8, 3, 85);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teamrols`
--

CREATE TABLE IF NOT EXISTS `teamrols` (
`idRol` int(11) NOT NULL,
  `rolName` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `teamrols`
--

INSERT INTO `teamrols` (`idRol`, `rolName`) VALUES
(1, 'Coordinador'),
(2, 'Soporte'),
(3, 'Calidad'),
(4, 'Desarrollo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vote`
--

CREATE TABLE IF NOT EXISTS `vote` (
`idVote` int(10) NOT NULL,
  `idVoteCreator` int(10) NOT NULL,
  `initialDate` date NOT NULL,
  `finalDate` date NOT NULL,
  `year` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `voters`
--

CREATE TABLE IF NOT EXISTS `voters` (
  `idVote` int(10) NOT NULL,
  `idUser` int(10) NOT NULL,
  `grade` int(10) NOT NULL,
  `idTeam` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `document`
--
ALTER TABLE `document`
 ADD UNIQUE KEY `idDocument` (`idDocument`,`documentName`);

--
-- Indices de la tabla `participants`
--
ALTER TABLE `participants`
 ADD UNIQUE KEY `idVote` (`idVote`,`idTeam`);

--
-- Indices de la tabla `person`
--
ALTER TABLE `person`
 ADD PRIMARY KEY (`idPerson`), ADD UNIQUE KEY `idPersonal` (`idPersonal`);

--
-- Indices de la tabla `project`
--
ALTER TABLE `project`
 ADD PRIMARY KEY (`idProject`), ADD UNIQUE KEY `idProject` (`idProject`,`projectName`);

--
-- Indices de la tabla `student`
--
ALTER TABLE `student`
 ADD PRIMARY KEY (`idStudent`);

--
-- Indices de la tabla `tbuser`
--
ALTER TABLE `tbuser`
 ADD PRIMARY KEY (`idUser`);

--
-- Indices de la tabla `team`
--
ALTER TABLE `team`
 ADD PRIMARY KEY (`idTeam`), ADD UNIQUE KEY `idTeam` (`idTeam`);

--
-- Indices de la tabla `teammembers`
--
ALTER TABLE `teammembers`
 ADD UNIQUE KEY `idTeam` (`idTeam`,`idStudent`,`idRol`);

--
-- Indices de la tabla `teamrols`
--
ALTER TABLE `teamrols`
 ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `vote`
--
ALTER TABLE `vote`
 ADD PRIMARY KEY (`idVote`);

--
-- Indices de la tabla `voters`
--
ALTER TABLE `voters`
 ADD UNIQUE KEY `idVote` (`idVote`,`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `document`
--
ALTER TABLE `document`
MODIFY `idDocument` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT de la tabla `person`
--
ALTER TABLE `person`
MODIFY `idPerson` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `project`
--
ALTER TABLE `project`
MODIFY `idProject` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `student`
--
ALTER TABLE `student`
MODIFY `idStudent` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `tbuser`
--
ALTER TABLE `tbuser`
MODIFY `idUser` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `team`
--
ALTER TABLE `team`
MODIFY `idTeam` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT de la tabla `teamrols`
--
ALTER TABLE `teamrols`
MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `vote`
--
ALTER TABLE `vote`
MODIFY `idVote` int(10) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
