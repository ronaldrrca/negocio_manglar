<?php
require_once '../modelo/productos.php';
header('Content-Type: application/json');

$termino = $_GET['termino'];
$objProductos = new Productos();
$resultado = $objProductos->busqueda($termino);

while ($fila = $resultado->fetch_assoc()) {
        $datos[] = $fila;
    }

$respuesta = [
    "datos" => $datos
];
    
echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);  // Convertir array PHP a JSON
die();

