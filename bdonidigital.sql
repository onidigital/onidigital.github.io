-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3307
-- Tiempo de generación: 22-04-2015 a las 23:37:32
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `getUser`(IN `ced` VARCHAR(50))
    NO SQL
    COMMENT 'Retorna todos los usuarios.'
begin
	Select  p.first_name as Nombre,
    		p.last_name  as	Apellidos,
            p.idPersonal as Cedula,
            p.email 	 as Email,
            u.password   as Password
    From person as p
    		Inner Join tbuser as u
            	on p.idPerson = u.idPerson
    Where ced = p.idPersonal;
end$$

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateStudent`(IN `pFirstName` VARCHAR(500), IN `pPastName` VARCHAR(500), IN `pIdPersonal` VARCHAR(50), IN `pEmail` VARCHAR(50), IN `pIdPerson` INT)
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
  `idDocument` int(10) DEFAULT NULL,
  `documentName` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `person`
--

INSERT INTO `person` (`idPerson`, `first_name`, `last_name`, `idPersonal`, `email`) VALUES
(1, 'Jorge ', 'Valverde ', '30487042', 'jvalverdem@ucenfotec.ac.cr'),
(2, 'Leslie Daniela', 'Andrade', '3045871', 'landrade@ucenfotec.ac.cr'),
(8, 'Brandon De Jesus', 'Rojas', '30584561', 'brojas@ucenfotec.ac.cr'),
(14, 'Rebeca Raquel', 'Poveda Rojas', '30578456', 'rpovedar@ucenfotec.ac.cr');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project`
--

CREATE TABLE IF NOT EXISTS `project` (
`idProject` int(10) NOT NULL,
  `projectName` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `keywords` varchar(250) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `project`
--

INSERT INTO `project` (`idProject`, `projectName`, `description`, `keywords`) VALUES
(1, 'Biblioteca Virtual', 'Una biblioteca virtual muy completa.', 'biblioteca virtual completa.'),
(2, 'Registro medico', 'Registro medico para el hospital de San Jose.', 'Registro medico hospital San Jose'),
(3, 'Red social', 'Una red social para estudiantes de una universidad.', 'red social universidad'),
(4, 'Tienda virtual', 'Tienda virtual de articulos varios', 'tienda virtual articulos varios'),
(7, 'Nuevo Proyecto', 'Aqui una descripcion para un nuevo proyecto.', 'nuevo proyecto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `student`
--

CREATE TABLE IF NOT EXISTS `student` (
`idStudent` int(10) NOT NULL,
  `idPerson` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `student`
--

INSERT INTO `student` (`idStudent`, `idPerson`) VALUES
(1, 1),
(2, 2),
(10, 14);

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
  `logo` binary(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `team`
--

INSERT INTO `team` (`idTeam`, `teamName`, `idProject`, `logo`) VALUES
(1, 'Oni', 2, 0x31303130313000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teammembers`
--

CREATE TABLE IF NOT EXISTS `teammembers` (
  `idTeam` int(10) NOT NULL,
  `idStudent` int(10) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `grade` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `teammembers`
--

INSERT INTO `teammembers` (`idTeam`, `idStudent`, `rol`, `grade`) VALUES
(1, 1, 'Coordinador', 90),
(1, 2, 'Calidad', 95);

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
 ADD UNIQUE KEY `idTeam` (`idTeam`,`idStudent`,`rol`);

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
-- AUTO_INCREMENT de la tabla `person`
--
ALTER TABLE `person`
MODIFY `idPerson` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `project`
--
ALTER TABLE `project`
MODIFY `idProject` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `student`
--
ALTER TABLE `student`
MODIFY `idStudent` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `tbuser`
--
ALTER TABLE `tbuser`
MODIFY `idUser` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `team`
--
ALTER TABLE `team`
MODIFY `idTeam` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `vote`
--
ALTER TABLE `vote`
MODIFY `idVote` int(10) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
