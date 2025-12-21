<?php
require_once 'conexion.php';

class Articulos {
    private $id;
    private $nombre;
    private $descripcion;
    private $precio;
    private $imagen;
    private $categoria;
    private $disponibilidad;
    private $destacado;
    private $termino;



    public function verArticulos() {
        $objConexion = new Conexion();
        $conexion = $objConexion->conectarse();
        $sql = "CALL verArticulos()";
        $stmt = $conexion->prepare($sql);
    
        if ($stmt === false) {
            die("Error en la preparación de la consulta: " . $conexion->error);
        }
    
        // Ejecutar y validar la consulta
        $stmt->execute();
        $resultado = $stmt->get_result();
        
        $stmt->close();
        $conexion->close();
    
        return $resultado;  // Devuelve true si se ejecutó correctamente, false en caso de error
    }


    public function busqueda($termino) {
        $this->termino = $termino;

        $objConexion = new Conexion();
        $conexion = $objConexion->conectarse();

        $sql = "CALL buscar(?)";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("s", $this->termino);

        $stmt->execute();
        $resultado = $stmt->get_result();

        $stmt->close();
        $conexion->close();
    
        return $resultado;  // Devuelve true si se ejecutó correctamente, false en caso de error
    }

    public function verArticulosDestacados() {
        $objConexion = new Conexion();
        $conexion = $objConexion->conectarse();
        $sql = "CALL verArticulosDestacados()";
        $stmt = $conexion->prepare($sql);
    
        if ($stmt === false) {
            die("Error en la preparación de la consulta: " . $conexion->error);
        }
    
        // Ejecutar y validar la consulta
        $stmt->execute();
        $resultado = $stmt->get_result();
        
        $stmt->close();
        $conexion->close();
    
        return $resultado;  // Devuelve true si se ejecutó correctamente, false en caso de error
    }

    public function verArticulosNuevos() {
        $objConexion = new Conexion();
        $conexion = $objConexion->conectarse();
        $sql = "CALL verArticulosNuevos()";
        $stmt = $conexion->prepare($sql);
    
        if ($stmt === false) {
            die("Error en la preparación de la consulta: " . $conexion->error);
        }
    
        // Ejecutar y validar la consulta
        $stmt->execute();
        $resultado = $stmt->get_result();
        
        $stmt->close();
        $conexion->close();
    
        return $resultado;  // Devuelve true si se ejecutó correctamente, false en caso de error
    }

    public function verArticulosPorCategoria($categoria) {
        $this->categoria = $categoria;

        $objConexion = new Conexion();
        $conexion = $objConexion->conectarse();

        $sql = "CALL verArticulosPorCategoria(?)";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("s", $this->categoria);

        $stmt->execute();
        $resultado = $stmt->get_result();

        $stmt->close();
        $conexion->close();
    
        return $resultado;  // Devuelve true si se ejecutó correctamente, false en caso de error
    }

    public function verArticulo($id) {
        $this->id = $id;

        $objConexion = new Conexion();
        $conexion = $objConexion->conectarse();

        $sql = "CALL verArticulo(?)";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("i", $this->id);

        $stmt->execute();
        $resultado = $stmt->get_result();

        $stmt->close();
        $conexion->close();
    
        return $resultado;  // Devuelve true si se ejecutó correctamente, false en caso de error
    }


    
}





?>