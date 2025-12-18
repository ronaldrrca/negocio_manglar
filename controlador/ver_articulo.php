<?php
require_once '../modelo/articulos.php';
header('Content-Type: application/json');

$id = $_GET['id'];
$objArticulos = new Articulos();
$resultado = $objArticulos->verArticulo($id);


while ($fila = $resultado->fetch_assoc()) {
        $data[] = $fila;
    }

$respuesta = [
    "datos" => $data
];
    
echo json_encode($respuesta, JSON_UNESCAPED_UNICODE);  // Convertir array PHP a JSON


?>