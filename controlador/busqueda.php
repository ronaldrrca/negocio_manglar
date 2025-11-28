<?php
require_once '../modelo/articulos.php';
header('Content-Type: application/json');

$termino = $_GET['termino'];
$objArticulos = new Articulos();
$resultado = $objArticulos->busqueda($termino);

while ($fila = $resultado->fetch_assoc()) {
        $datos[] = $fila;
    }

$respuesta = [
    "datos" => $datos
];
    
echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);  // Convertir array PHP a JSON
die();

