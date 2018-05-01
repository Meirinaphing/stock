<?php 	

require_once 'core.php';

$valid['success'] = array('success' => false, 'messages' => array());

if($_POST) {	
	$editCategoriesName = $_POST['editCategoriesName'];
	$editDesc = $_POST['editDesc'];
	$categoriesId = $_POST['categoriesid'];

	$sql = "UPDATE categories SET categories_name = '$editCategoriesName', description = '$editDesc' WHERE categories_id = '$categoriesid'";

	if($connect->query($sql) === TRUE) {
		$valid['success'] = true;
		$valid['messages'] = "Successfully Updated";
		header("Location:../categories.php");	
	} else {
		$valid['success'] = false;
		$valid['messages'] = "Error while updating the categories";
	}

	$connect->close();

	echo json_encode($valid);

} // /if $_POST