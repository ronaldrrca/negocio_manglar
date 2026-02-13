const urlParamsT = new URLSearchParams(window.location.search);
const id_producto = urlParamsT.get('id');

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

fetch('./controlador/ver_producto.php?id=' + id_producto)
  .then(response => {
    return response.json(); 
  })
  .then(data => {
    
    const producto = data.datos; 
        
        if (Array.isArray(producto)) {
            producto.forEach(producto => {
                crearCard(
                    producto.id_producto,
                    producto.imagen_producto, 
                    producto.nombre_producto,
                    producto.descripcion_producto, 
                    producto.precio_producto,
                    producto.codigo_barras_producto, 
                    producto.marca_producto,
                    "contenedor_producto"
                );
            });
        } 
    })
    .catch(error => {
        location.href = "index.php";
    });
 
