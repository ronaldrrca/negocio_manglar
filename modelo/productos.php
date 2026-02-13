<?php
require_once 'conexion.php';

class Productos {
    private $id;
    private $nombre;
    private $descripcion;
    private $precio;
    private $imagen;
    private $categoria;
    private $disponibilidad;
    private $destacado;
    private $termino;



    public function verProductos() {
        $objConexion = new Conexion();
        $conexion = $objConexion->conectarse();
        $sql = "CALL verProductos()";
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

    public function verProductosDestacados() {
        $objConexion = new Conexion();
        $conexion = $objConexion->conectarse();
        $sql = "CALL verProductosDestacados()";
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

    public function verProductosNuevos() {
        $objConexion = new Conexion();
        $conexion = $objConexion->conectarse();
        $sql = "CALL verProductosNuevos()";
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

    public function verProductosPorCategoria($categoria) {
        $this->categoria = $categoria;

        $objConexion = new Conexion();
        $conexion = $objConexion->conectarse();

        $sql = "CALL verProductosPorCategoria(?)";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("s", $this->categoria);

        $stmt->execute();
        $resultado = $stmt->get_result();

        $stmt->close();
        $conexion->close();
    
        return $resultado;  // Devuelve true si se ejecutó correctamente, false en caso de error
    }

    public function verProducto($id) {
        $this->id = $id;

        $objConexion = new Conexion();
        $conexion = $objConexion->conectarse();

        $sql = "CALL verProducto(?)";
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