<?php
require_once '../modelo/articulos.php';
header('Content-Type: application/json');

$objArticulos = new Articulos();
$resultado = $objArticulos->verArticulosDestacados();

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