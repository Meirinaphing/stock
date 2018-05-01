<?php 	

require_once "NewConnection.php";//ini load file

$db = new NewConnection();//memakai model class tadi
$conn = $db->GetConnection();//tampung variabel conn yang tadi di balikkin melalui function GetConnection yang dibuat

$valid['success'] = array('success' => false, 'messages' => array());


if($_POST) {	

	$categoriesname = $_POST['categoriesname'];
	$desc = $_POST['desc']; 

	$query = "INSERT INTO categories (categories_name, description) VALUES (:categoriesName, :description)";
	//:categoriesName, :description maksudny temporary variabel yang di pake sebelum di execute querynya.
	$results = $conn->prepare($query);

	$results->execute(array("categoriesName" => $categoriesname, "description" => $desc));

	//ini sama aja kaya $results->bindParam(":categoriesName", isinya dari categoriesname maunya apa), $results->bindParam(":description",  isinya dari descirption maunya apa)

	if($results->rowCount() > 0) // dengan query yang tadi, ada row yang berefek atau engga? terjadi perubahan ga?
	{ //jika ya, queryna berhasil berarti untuk insert, update, delete.
		$valid['success'] = true;
		$valid['messages'] = "Successfully Added";
		header("Location:../categories.php");
	}
	else
	{
		//jika tidak
		$valid['success'] = false;
		$valid['messages'] = "Error while adding the members";
	}

	//karena tadi dataType yang dipakai json, data yang ingin dikirim ke ajax tadi harus di json_encode biar bisa kebaca.
	//mari balik lagi ke categories.js
	echo json_encode($valid);

} 
// /if $_POST