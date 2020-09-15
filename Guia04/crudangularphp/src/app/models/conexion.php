<?php
function retornarConexion() {
$con=mysqli_connect("localhost","root","","bd1");
return $con;
}
?>