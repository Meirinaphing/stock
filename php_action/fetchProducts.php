<?php 	

require_once 'core.php';

$sql = "SELECT * FROM products";
$result = $connect->query($sql);

$output = array('data' => array());

if($result->num_rows > 0) { 

 // $row = $result->fetch_array();
 $activeProduct = ""; 

 while($row = $result->fetch_array()) {
 	$productId = $row[0];
 	// active 
 	if($row[6] == "Available") {
 		// activate member
 		$activeProduct = "<label class='label label-success'>Available</label>";
 	} else {
 		// deactivate member
 		$activeProduct = "<label class='label label-danger'>Not Available</label>";
 	}

 	$button = '<!-- Single button -->
	<div class="btn-group">
	    <button type="button" class="btn btn-default" data-toggle="modal" data-target="#editProductModel" onclick="editProduct('.$productId.')"> <i class="glyphicon glyphicon-edit"></i> Edit</button>
	</div>';

 	$output['data'][] = array( 		
 		$row[0], 		
 		$row[1],
 		$row[2],
 		$row[3],
 		$row[4],
 		$row[5],
 		$activeProduct,
 		$button
 		); 	
 } // /while 

} // if num_rows

$connect->close();

echo json_encode($output);