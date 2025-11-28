<?php
require_once './modelo/articulos.php';

$objArticulos = new Articulos();
$resultado = $objArticulos->verArticulos();


?>