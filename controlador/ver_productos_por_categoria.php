<?php
require_once '../modelo/productos.php';
header('Content-Type: application/json');

$categoria = $_GET['categoria'];
$objProductos = new Productos();
$resultado = $objProductos->verProductosPorCategoria($categoria);


while ($fila = $resultado->fetch_assoc()) {
        $data[] = $fila;
    }

$respuesta = [
    "datos" => $data
];
    
echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);  // Convertir array PHP a JSON


?>