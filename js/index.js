// --- Lógica de Carga Inicial de Artículos Destacados ---

fetch('./controlador/ver_productos_destacados.php')
    .then(response => response.json())
    .then(data => {
        const listaproductos = data.datos; 
        
        if (Array.isArray(listaproductos)) { 
        
            listaproductos.forEach(producto => {
                crearCard(
                    producto.id_producto,
                    producto.imagen_producto, 
                    producto.nombre_producto, 
                    producto.descripcion_producto,
                    producto.precio_producto, 
                    producto.codigo_barras_producto,
                    producto.marca_producto,
                    "productos_destacados"
                );
            });
        } 
    })
    .catch(error => {
        console.error("Hubo un error en la solicitud fetch:", error);
    });



fetch('./controlador/ver_productos_nuevos.php')
    .then(response => response.json())
    .then(data => {
        const listaproductos = data.datos; 
        
        if (Array.isArray(listaproductos)) { 
        
            listaproductos.forEach(producto => {
                crearCard(
                    producto.id_producto,
                    producto.imagen_producto, 
                    producto.nombre_producto, 
                    producto.descripcion_producto,
                    producto.precio_producto, 
                    producto.codigo_barras_producto,
                    producto.marca_producto,
                    "productos_nuevos"
                );
            });
        } 
    })
    .catch(error => {
        console.error("Hubo un error en la solicitud fetch:", error);
    });

