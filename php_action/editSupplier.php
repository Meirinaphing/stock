<?php 	

require_once 'core.php';

$valid['success'] = array('success' => false, 'messages' => array());

if($_POST) {
	$suppliername = $_POST['editSupplierName'];
	$contact = $_POST['editContact']; 
	$address = $_POST['editAddress']; 
	$npwp = $_POST['editNpwp']; 
	$pic = $_POST['editPic']; 
	$supplierid = $_POST['supplierid'];

	// echo $supplierid," ", $suppliername, " ", $contact, " ", $address, " ", $npwp, " ", $pic;

	$sql = "UPDATE supplier SET suppliername = '$suppliername', suppliercontact = '$contact', supplieraddress = '$address', suppliernpwp = '$npwp', pic = '$pic' WHERE supplierid = '$supplierid'";

	if($connect->query($sql) === TRUE) {
		$valid['success'] = true;
		$valid['messages'] = "Successfully Updated";
		header("Location:../supplier.php");	
	} else {
		$valid['success'] = false;
		$valid['messages'] = "Error while adding the members";
	}

	$connect->close();

	echo json_encode($valid);

} // /if $_POST