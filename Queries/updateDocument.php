<?php 
	
	include 'config.php'; 

	$data 	  = file_get_contents("php://input");
	$jsonData = json_decode($data);
	
	$documentName    = $jsonData->documentName;
	$description 	 = $jsonData->description;
	$idDocument      = $jsonData->idDocument;
	$sql 		     = 'CALL updateDocument("'.$documentName.'","'. $description .'","'.$idDocument.'")';
	$result 	     = mysqli_query($con, $sql);

	if( !$result ){
		echo "DB Error, could not insert new document.";
		//echo "MySQL Error : " . mysqli_error();
		exit;
	}

	// Free result set.
	mysqli_free_result($result);
	mysqli_close($con);

?>