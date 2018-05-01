<?php 	

require_once 'core.php';

$valid['success'] = array('success' => false, 'messages' => array());

if($_POST) {
	$a = $_POST['editProductName'];
	$b = $_POST['editQty']; 
	$c = $_POST['editPrice']; 
	$d = $_POST['editCid']; 
	$e = $_POST['editSid'];
	$f = $_POST['editStatus'];

	$id = $_POST['productid'];

	$sql = "UPDATE products SET name = '$a', qty = '$b', harga = '$c', categoryid = '$d', supplierid = '$e', status = '$f' WHERE productid = '$id'";

	if($connect->query($sql) === TRUE) {
		$valid['success'] = true;
		$valid['messages'] = "Successfully Updated";
		header("Location:../products.php");	
	} else {
		$valid['success'] = false;
		$valid['messages'] = "Error while adding the members";
	}

	$connect->close();

	echo json_encode($valid);

} // /if $_POST