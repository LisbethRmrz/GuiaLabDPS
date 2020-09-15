<?php
header('Access-Control-Allow-Origin: *');

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("conexion.php");
$con = retornarConexion();
mysqli_query($con, "delete from articulos where codigo=$_GET[codigo]");

class Result { }
$response = new Result();
$response -> resultado = 'OK';
$response -> mensaje = 'articulo borrado';
header('Content-Type: application/json');
echo json_encode($response);
?>