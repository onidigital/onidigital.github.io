<?php 
	
	include 'config.php'; 

	$data 	  = file_get_contents("php://input");
	$jsonData = json_decode($data);
	
	$teamName   = $jsonData->teamName;
	$idProject 	= $jsonData->idProject;
	$idTeam 	= $jsonData->idTeam;

	$sql    = 'CALL updateBasicTeamInfo("'.$teamName.'","'. $idProject .'","'.$idTeam.'")';
	$result = mysqli_query($con, $sql);

	if( !$result ){
		echo "DB Error, could not insert new document.";
		//echo "MySQL Error : " . mysqli_error();
		exit;
	}

	// Free result set.
	mysqli_free_result($result);
	mysqli_close($con);

?>