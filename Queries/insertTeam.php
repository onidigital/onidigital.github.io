<?php 
	
	include 'config.php';

	$data 	  = file_get_contents("php://input");
	$jsonData = json_decode($data);

	$name 	  = $jsonData->name;
	$project  = $jsonData->idProject;
	$image	  = 'Images/logos/placeholder.png';

	$sql 		 = 'CALL insertTeam("'.$name.'","'. $project .'","'. $image .'")';
	$result 	 = mysqli_query($con, $sql);

	if( !$result ){
		echo "DB Error, could not insert new project.";
		//echo "MySQL Error : " . mysqli_error();
		exit;
	}

	// Free result set.
	mysqli_free_result($result);
	mysqli_close($con);

?>