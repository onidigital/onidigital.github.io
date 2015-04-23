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
	$keywords 	 = $jsonData->keywords;
	$sql 		 = 'CALL insertProject("'.$name.'","'. $description .'","'. $keywords .'")';
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