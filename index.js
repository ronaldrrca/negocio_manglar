// Función para formatear el precio a la moneda local
function formatearPrecio(precio) {
    // Definimos el formateador para el locale 'es-CO' (español/Colombia)
    const formateador = new Intl.NumberFormat('es-CO', {
        // Estilo: currency (moneda)
        style: 'currency', 
        // Definir la moneda (COP para Pesos Colombianos)
        currency: 'COP', 
        // Aseguramos que NO se muestre ninguna posición decimal
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0,
    });
    
    // Aplicar el formato al número
    return formateador.format(precio);
}

// Función para crear un elemento Card (Tarjeta de producto)
function crearCard(imagen_articulo, nombre_articulo, precio_articulo, contenedor_destino_articulo) {
    //Elemento imagen de card
    const card_articulos_imagen = document.createElement("img");
    card_articulos_imagen.classList.add("card_articulos_img");
    card_articulos_imagen.setAttribute("src", "./imagenes/imagenes_productos/" + imagen_articulo);

    //elemento nombre card
    const card_articulos_nombre = document.createElement("p");
    card_articulos_nombre.classList.add("card_articulos_nombre");
    card_articulos_nombre.innerHTML = nombre_articulo;

    //elemento precio card
    const precio = precio_articulo;
    const precioFormateado = formatearPrecio(precio);
    const card_articulos_precio = document.createElement("span");
    card_articulos_precio.classList.add("card_articulos_precio");
    card_articulos_precio.innerHTML = precioFormateado;
    
    //Elemento card (Contenedor principal)
    const card_articulos = document.createElement("div");
    card_articulos.setAttribute("id", "articulo.id_articulos");
    card_articulos.classList.add("card_articulos");
    card_articulos.appendChild(card_articulos_imagen);
    card_articulos.appendChild(card_articulos_nombre);
    card_articulos.appendChild(card_articulos_precio);

    //Artículos destacados
    const contenedor_destino = document.getElementById(contenedor_destino_articulo);
    contenedor_destino.appendChild(card_articulos);
}

// --- Lógica de Carga Inicial de Artículos Destacados ---

fetch('./controlador/ver_articulos_destacados.php')
    .then(response => response.json())
    .then(data => {
        const listaArticulos = data.datos; 
        
        if (Array.isArray(listaArticulos)) {
            listaArticulos.forEach(articulo => {
                crearCard(
                    articulo.imagen_articulos, 
                    articulo.nombre_articulos, 
                    articulo.precio_articulos, 
                    "articulos_destacados"
                );
            });
        } else {
            console.error("La respuesta JSON del servidor no contiene el array de artículos bajo la clave 'data'.");
        }
    })
    .catch(error => {
        console.error("Hubo un error en la solicitud fetch:", error);
    });


// --- Manejo de la Búsqueda de Artículos ---

const formulario_busqueda = document.getElementById("formulario_busqueda");
let campo_busqueda = document.getElementById("campo_busqueda");
let resultados_busqueda = document.getElementById("resultados_busqueda");

formulario_busqueda.addEventListener("submit", function(event){
    event.preventDefault();
    
    let valor_busqueda = campo_busqueda.value;

    if (valor_busqueda.length > 2) {
        fetch('./controlador/busqueda.php?termino=' + valor_busqueda)
            .then(response => response.json())
            .then(data => {
                // Limpiando la búsqueda anterior, en caso de existir   
                resultados_busqueda.innerHTML = "";
                const listaArticulos = data.datos; 
                
                if (Array.isArray(listaArticulos)) {
                    listaArticulos.forEach(articulo => {
                        crearCard(
                            articulo.imagen_articulos, 
                            articulo.nombre_articulos, 
                            articulo.precio_articulos, 
                            "resultados_busqueda"
                        );
                    });
                
                    document.getElementById("seccion_resultados").style.display = "flex";
                
                } 
            })
            .catch(error => {
                campo_busqueda.value = ""
                campo_busqueda.setAttribute("placeholder", "Intente con una palabra diferente")
            });
    }

});