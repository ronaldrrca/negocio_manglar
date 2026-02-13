<?php
require_once '../modelo/productos.php';
header('Content-Type: application/json');

$objProductos = new Productos();
$resultado = $objProductos->verProductosDestacados();

while ($fila = $resultado->fetch_assoc()) {
        $data[] = $fila;
    }

$respuesta = [
    "mensaje" => "Productos obtenidos correctamente.",
    "status" => "success",
    "datos" => $data
];
    
echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);  // Convertir array PHP a JSON

?>