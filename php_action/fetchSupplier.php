<?php 	

require_once 'core.php';

$sql = "SELECT * FROM supplier";
$result = $connect->query($sql);

$output = array('data' => array());

if($result->num_rows > 0) { 

 // $row = $result->fetch_array();
 // $activeBrands = ""; 

 while($row = $result->fetch_array()) {
 	$supplierId = $row[0];
 	// active 
 	// if($row[2] == 1) {
 	// 	// activate member
 	// 	$activeBrands = "<label class='label label-success'>Available</label>";
 	// } else {
 	// 	// deactivate member
 	// 	$activeBrands = "<label class='label label-danger'>Not Available</label>";
 	// }

 	$button = '<!-- Single button -->
	<div class="btn-group">
	    <button type="button" class="btn btn-default" data-toggle="modal" data-target="#editBrandModel" onclick="editSupplier('.$supplierId.')"> <i class="glyphicon glyphicon-edit"></i> Edit</button>
	</div>';

 	$output['data'][] = array( 		
 		$row[0], 		
 		$row[1],
 		$row[2],
 		$row[3],
 		$row[4],
 		$row[5],
 		$button
 		); 	
 } // /while 

} // if num_rows

$connect->close();

echo json_encode($output);