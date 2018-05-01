<?php 	

require_once 'core.php';

$valid['success'] = array('success' => false, 'messages' => array());

if($_POST) {	
	$a = $_POST['editCategoryName'];
	$b = $_POST['editDescription'];
	$id = $_POST['categoryid'];

	echo $a;
	$sql = "UPDATE categories SET categories_name = '$a', description = '$b' WHERE categories_id = '$id'";

	if($connect->query($sql) === TRUE) {
		$valid['success'] = true;
		$valid['messages'] = "Successfully Updated";
		header("Location:../category.php");	
	} else {
		$valid['success'] = false;
		$valid['messages'] = "Error while updating the categories";
	}

	$connect->close();

	echo json_encode($valid);

} // /if $_POST