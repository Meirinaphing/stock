<?php 	

require_once 'core.php';

$valid['success'] = array('success' => false, 'messages' => array());

if($_POST) {	

	$a = $_POST['productname'];
	$b = $_POST['qty']; 
	$c = $_POST['price']; 
	$d = $_POST['cid']; 
	$e = $_POST['sid'];
	$f = $_POST['status']; 

	$sql = "INSERT INTO products (name, qty, harga, categoryid, supplierid, status) VALUES ('$a', '$b', '$c', '$d', '$e', '$f')";

	if($connect->query($sql) === TRUE) {
		$valid['success'] = true;
		$valid['messages'] = "Successfully Added";
		header("Location:../products.php");	
	} else {
		$valid['success'] = false;
		$valid['messages'] = "Error while adding the members";
	}


	$connect->close();

	echo json_encode($valid);

} // /if $_POST