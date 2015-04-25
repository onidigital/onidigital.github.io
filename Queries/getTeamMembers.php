<?php 
	
	include 'config.php';

	$data 	  = file_get_contents("php://input");
	$jsonData = json_decode($data);

	$id     = $jsonData->id;
	
	$sql 	= 'CALL getTeamMembers("'.$id.'")';
	$result = mysqli_query($con, $sql);

	if( !$result ){
		echo "DB Error, could not list personas.";
		//echo "MySQL Error : " . mysqli_error();
		exit;

	}

	$rows = array();

	while( $r = mysqli_fetch_assoc($result) ){
		$rows[] = $r;
	}

	// Free result set.
	mysqli_free_result($result);
	mysqli_close($con);

	echo json_encode($rows);

?>