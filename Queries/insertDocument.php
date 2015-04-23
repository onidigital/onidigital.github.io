<?php 
	$data 	  = file_get_contents("php://input");
	$jsonData = json_decode($data);

	$con = mysqli_connect("localhost", "root", "", "bdonidigital");

	// Check connection
	if( mysqli_connect_errno() ){
		echo "Failed to connect to MySQL:" . mysqli_connect_error();
	}

	$name   	 = $jsonData->name;
	$description = $jsonData->description;
	$sql 		 = 'CALL insertDocument("'.$name.'","'. $description .'")';
	$result 	 = mysqli_query($con, $sql);

	if( !$result ){
		echo "DB Error, could not insert new document.";
		//echo "MySQL Error : " . mysqli_error();
		exit;
	}

	// Free result set.
	mysqli_free_result($result);
	mysqli_close($con);

?>