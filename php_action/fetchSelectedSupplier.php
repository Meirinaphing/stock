<?php 	

require_once 'core.php';

$supplierid = $_POST['supplierId'];

$sql = "SELECT supplierid, suppliername, suppliercontact, supplieraddress, suppliernpwp, pic FROM supplier WHERE supplierid = $supplierid";
$result = $connect->query($sql);

if($result->num_rows > 0) { 
 $row = $result->fetch_array();
} // if num_rows

$connect->close();

echo json_encode($row);