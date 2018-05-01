<?php 	

require_once 'core.php';

$valid['success'] = array('success' => false, 'messages' => array());

if($_POST) {	

	$categoriesname = $_POST['categoryname'];
	$desc = $_POST['description']; 

	$sql = "INSERT INTO categories (categories_name, description) VALUES ('$categoriesname', '$desc')";

	if($connect->query($sql) === TRUE) {
		$valid['success'] = true;
		$valid['messages'] = "Successfully Added";
		header("Location:../category.php");
	} else {
		$valid['success'] = false;
		$valid['messages'] = "Error while adding the members";
	}

	$connect->close();

	echo json_encode($valid);

} // /if $_POST