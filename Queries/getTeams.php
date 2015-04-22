<?php 
	$data 	  = file_get_contents("php://input");
	$jsonData = json_decode($data);

	$con = mysqli_connect("localhost:3307", "root", "", "bdonidigital");

	// Check connection
	if( mysqli_connect_errno() ){
		echo "Failed to connect to MySQL:" . mysqli_connect_error();
	}


	$sql 	= 'CALL getTeams()';
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