<?php
require_once './modelo/productos.php';

$objProductos = new Productos();
$resultado = $objProductos->verProductos();


?>