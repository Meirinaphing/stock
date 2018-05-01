<?php 
	
	class NewConnection //ini buat sebuah model class untuk koneksi ke database, kenapa di modelin? biar rapih aja.
	{
		var $localhost;
		var $username;
		var $password;
		var $dbname;

		var $conn;

		public function __construct()
		{
			//construct yang di codeigniter ingatkan.. sama persis..
			$this->localhost = "localhost";
			$this->username = "root";
			$this->password = "";
			$this->dbname = "stock";

			$this->conn = new PDO("mysql:host=$this->localhost;dbname=$this->dbname", $this->username, $this->password);
		}

		public function GetConnection()
		{
			//biar lebih secure seperti ini.. sebenarnya engga juga..
			return $this->conn;
		}
	}
?>