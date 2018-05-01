<?php 	

require_once 'core.php';

$valid['success'] = array('success' => false, 'messages' => array());

if($_POST) {	

	$suppliername = $_POST['suppliername'];
	$contact = $_POST['contact']; 
	$address = $_POST['address']; 
	$npwp = $_POST['npwp']; 
	$pic = $_POST['pic']; 

	$sql = "INSERT INTO supplier (suppliername, suppliercontact, supplieraddress, suppliernpwp, pic) VALUES ('$suppliername', '$contact', '$address', '$npwp', '$pic')";

	if($connect->query($sql) === TRUE) {
		$valid['success'] = true;
		$valid['messages'] = "Successfully Added";
		header("Location:../supplier.php");	
	} else {
		$valid['success'] = false;
		$valid['messages'] = "Error while adding the members";
	}


	$connect->close();

	echo json_encode($valid);

} // /if $_POST