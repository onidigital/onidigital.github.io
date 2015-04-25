<?php	

	include 'config.php';

	echo $POST_['file'];

	if(isset($_FILES['file'])){
		$file = $_FILES['file'];

		//File Properties.

		$file_name  = $file['name'];
		$file_tmp   = $file['tmp_name'];
		$file_size  = $file['size'];
		$file_error = $file['error'];

		// File extention

		$file_ext = explode('.', $file_name);
		$file_ext = strtolower(end($file_ext));

		$allowed = array('jpg','jpeg','png');

		if( in_array($file_ext, $allowed) ){
			if($file_error === 0){

				$file_name_new = uniqid('logo_',true) . '.' . $file_ext;
				$file_destination = 'uploads/' . $file_name_new;

				if(move_uploaded_file($file_tmp, '../'.$file_destination)){
					$sql 	= 'CALL updateTeamLogo("'.$file_destination.'")';
					$result = mysqli_query($con, $sql);
				}

			}
		}

	}
?>