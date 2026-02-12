// --- Lógica de Carga Inicial de Artículos Destacados ---

fetch('./controlador/ver_articulos_destacados.php')
    .then(response => response.json())
    .then(data => {
        const listaArticulos = data.datos; 
        
        if (Array.isArray(listaArticulos)) { console.log(listaArticulos);
        
            listaArticulos.forEach(articulo => {
                crearCard(
                    articulo.id_articulos,
                    articulo.imagen_articulos, 
                    articulo.nombre_articulos, 
                    articulo.descripcion_articulos,
                    articulo.precio_articulos, 
                    articulo.codigo_barras_articulos,
                    "articulos_destacados"
                );
            });
        } 
    })
    .catch(error => {
        console.error("Hubo un error en la solicitud fetch:", error);
    });



fetch('./controlador/ver_articulos_nuevos.php')
    .then(response => response.json())
    .then(data => {
        const listaArticulos = data.datos; 
        
        if (Array.isArray(listaArticulos)) { console.log(listaArticulos);
        
            listaArticulos.forEach(articulo => {
                crearCard(
                    articulo.id_articulos,
                    articulo.imagen_articulos, 
                    articulo.nombre_articulos, 
                    articulo.descripcion_articulos,
                    articulo.precio_articulos, 
                    articulo.codigo_barras_articulos,
                    "articulos_nuevos"
                );
            });
        } 
    })
    .catch(error => {
        console.error("Hubo un error en la solicitud fetch:", error);
    });

