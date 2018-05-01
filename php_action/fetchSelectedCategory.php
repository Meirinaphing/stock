<?php 	

require_once 'core.php';

$categoryId = $_POST['categoryId'];

$sql = "SELECT categories_id, categories_name, description FROM categories WHERE categories_id = $categoryId";
$result = $connect->query($sql);

if($result->num_rows > 0) { 
 $row = $result->fetch_array();
} // if num_rows

$connect->close();

echo json_encode($row);