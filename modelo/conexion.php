<?php
class Conexion{
  private $host="localhost";
  private $usuario="root";
  private $contrasena="";
  private $bd="mallorquin_market";

  public function conectarse(){ 
    // Esto obliga a PHP a mostrar el error real de MySQL si algo falla
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

    try {
        $conexion = new mysqli($this->host, $this->usuario, $this->contrasena, $this->bd);
        $conexion->set_charset("utf8");
        return $conexion; echo("ok");
        
    } catch (mysqli_sql_exception $e) {
        // Si hay error, enviamos un JSON para que el JS sepa qué pasó
        header('Content-Type: application/json');
        echo json_encode([
            "error" => "Fallo la conexión",
            "detalle" => $e->getMessage()
        ]);
        exit;
    }
}}

?>