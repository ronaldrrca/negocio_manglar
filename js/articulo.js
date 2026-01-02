const urlParamsT = new URLSearchParams(window.location.search);
const id_articulo = urlParamsT.get('id');

function formatearPrecio(precio) {
    // Definimos el formateador para el locale 'es-CO' (español/Colombia)
    const formateador = new Intl.NumberFormat('es-CO', {
        // Estilo: currency (moneda)
        style: 'currency', 
        // CRÍTICO: Definir la moneda (ej. COP para Pesos Colombianos)
        currency: 'COP', 
        // Aseguramos que NO se muestre ninguna posición decimal
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0,
    });
    
    // Aplicar el formato al número
    return formateador.format(precio);
}

fetch('./controlador/ver_articulo.php?id=' + id_articulo)
  .then(response => {
    return response.json(); 
  })
  .then(data => {
    
    const articulo = data.datos; 
        
        if (Array.isArray(articulo)) {
            articulo.forEach(articulo => {
                crearCard(
                    articulo.id_articulo,
                    articulo.imagen_articulos, 
                    articulo.alt_articulos,
                    articulo.nombre_articulos,
                    articulo.descripcion_articulos, 
                    articulo.precio_articulos, 
                    "contenedor_articulo"
                );
            });
        } 
    })
    .catch(error => {
        console.error("Hubo un error en la solicitud fetch:", error);
    });
 
