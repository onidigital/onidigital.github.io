-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-04-2015 a las 04:56:56
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStudents`()
    NO SQL
    COMMENT 'Retorna todos los estudiantes.'
begin
    Select  p.idPersonal as pId,
    		p.first_name as name,
            p.last_name  as lastName,
            p.email
    From	person as p
    		Inner Join student as s
            	On s.idPerson = p.idPerson;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `person`
--

INSERT INTO `person` (`idPerson`, `first_name`, `last_name`, `idPersonal`, `email`) VALUES
(1, 'Jorge Daniel', 'Valverde Matarrita', '304870421', 'jvalverdem@ucenfotec.ac.cr');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project`
--

CREATE TABLE IF NOT EXISTS `project` (
`idProject` int(10) NOT NULL,
  `projectName` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `student`
--

CREATE TABLE IF NOT EXISTS `student` (
`idStudent` int(10) NOT NULL,
  `idPerson` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `student`
--

INSERT INTO `student` (`idStudent`, `idPerson`) VALUES
(1, 1);

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
(1, 1, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `team`
--

CREATE TABLE IF NOT EXISTS `team` (
`idTeam` int(10) NOT NULL,
  `teamName` varchar(50) NOT NULL,
  `idProject` int(10) NOT NULL,
  `logo` binary(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
MODIFY `idPerson` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `project`
--
ALTER TABLE `project`
MODIFY `idProject` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `student`
--
ALTER TABLE `student`
MODIFY `idStudent` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `tbuser`
--
ALTER TABLE `tbuser`
MODIFY `idUser` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `team`
--
ALTER TABLE `team`
MODIFY `idTeam` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `vote`
--
ALTER TABLE `vote`
MODIFY `idVote` int(10) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
