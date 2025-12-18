// --- Lógica de Carga Inicial de Artículos Destacados ---

fetch('./controlador/ver_articulos_destacados.php')
    .then(response => response.json())
    .then(data => {
        const listaArticulos = data.datos; 
        
        if (Array.isArray(listaArticulos)) {
            listaArticulos.forEach(articulo => {
                crearCard(
                    articulo.id_articulos,
                    articulo.imagen_articulos, 
                    articulo.nombre_articulos, 
                    articulo.precio_articulos, 
                    "articulos_destacados"
                );
            });
        } 
    })
    .catch(error => {
        console.error("Hubo un error en la solicitud fetch:", error);
    });


