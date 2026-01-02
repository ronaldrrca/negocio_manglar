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
function crearCard(id_articulo, imagen_articulo, alt_articulo, nombre_articulo, descripcion_articulo, precio_articulo, contenedor_destino_articulo) {
    //Contenedor artículos 
    const contenedor_destino = document.getElementById(contenedor_destino_articulo);
    //Elemento imagen de card
    const card_articulos_imagen = document.createElement("img");
    
    if (contenedor_destino_articulo === "contenedor_articulo") {
        card_articulos_imagen.classList.add("card_articulo_pagina_individual_img");

    } else {
        card_articulos_imagen.classList.add("card_articulos_img");

    }

    card_articulos_imagen.setAttribute("src", "./imagenes/imagenes_productos/" + imagen_articulo);
    card_articulos_imagen.setAttribute("alt", alt_articulo);

    //elemento nombre card
    const card_articulos_nombre = document.createElement("p");
    card_articulos_nombre.classList.add("card_articulos_nombre");
    card_articulos_nombre.innerHTML = nombre_articulo;

    //elemento descripción artículo card
    const card_articulos_descripcion = document.createElement("p");
    card_articulos_descripcion.classList.add("card_articulos_descripcion");
    card_articulos_descripcion.innerHTML = descripcion_articulo;

    
    //elemento precio card
    const precio = precio_articulo;
    const precioFormateado = formatearPrecio(precio);
    const card_articulos_precio = document.createElement("span");
    card_articulos_precio.classList.add("card_articulos_precio");
    card_articulos_precio.innerHTML = precioFormateado;
    
    //Elemento card (Contenedor principal)
    let card_articulos;
    let contenedor_infoArticulo_articuloIndividual;
    
    if (contenedor_destino_articulo === "contenedor_articulo") {
        card_articulos = document.createElement("div");
        card_articulos.classList.add("card_articulo_pagina_individual");
        contenedor_infoArticulo_articuloIndividual = document.createElement("div");
        contenedor_infoArticulo_articuloIndividual.classList.add("contenedor_infoArticulo_individual");
    } else {
        card_articulos = document.createElement("a");
        card_articulos.id = id_articulo;
        card_articulos.setAttribute("href", "../articulo.php?id=" + id_articulo);
        card_articulos.classList.add("card_articulos");
    }

    card_articulos.appendChild(card_articulos_imagen);
    
    if (contenedor_infoArticulo_articuloIndividual) {
        contenedor_infoArticulo_articuloIndividual.appendChild(card_articulos_nombre);
        contenedor_infoArticulo_articuloIndividual.appendChild(card_articulos_descripcion);
        contenedor_infoArticulo_articuloIndividual.appendChild(card_articulos_precio);
        card_articulos.appendChild(contenedor_infoArticulo_articuloIndividual);
        contenedor_destino.appendChild(card_articulos);
    } else {
        card_articulos.appendChild(card_articulos_nombre);
        card_articulos.appendChild(card_articulos_precio);
        contenedor_destino.appendChild(card_articulos);
    }
    
    
}