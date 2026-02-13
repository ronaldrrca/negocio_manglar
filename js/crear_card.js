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
function crearCard(id_producto, imagen_producto, nombre_producto, descripcion_producto, precio_producto, codigo_barras_producto, marca_producto, contenedor_destino_producto) {
    //Contenedor artículos 
    const contenedor_destino = document.getElementById(contenedor_destino_producto);
    //Elemento imagen de card
    const card_productos_imagen = document.createElement("img");
    
    if (contenedor_destino_producto === "contenedor_producto") {
        card_productos_imagen.classList.add("card_producto_pagina_individual_img");

    } else {
        card_productos_imagen.classList.add("card_productos_img");

    }

    card_productos_imagen.setAttribute("src", "./imagenes/imagenes_productos/" + imagen_producto);
    card_productos_imagen.setAttribute("alt", nombre_producto);

    //elemento marca card
    const card_productos_marca = document.createElement("spam");
    card_productos_marca.classList.add("card_productos_marca");
    card_productos_marca.innerHTML = marca_producto;

    //elemento nombre card
    const card_productos_nombre = document.createElement("p");
    card_productos_nombre.classList.add("card_productos_nombre");
    card_productos_nombre.innerHTML = nombre_producto;

    //elemento descripción artículo card
    const card_productos_descripcion = document.createElement("p");
    card_productos_descripcion.classList.add("card_productos_descripcion");
    card_productos_descripcion.innerHTML = descripcion_producto;

    
    //elemento precio card
    const precio = precio_producto;
    const precioFormateado = formatearPrecio(precio);
    const card_productos_precio = document.createElement("span");
    card_productos_precio.classList.add("card_productos_precio");
    card_productos_precio.innerHTML = precioFormateado;

    //elemento identificadores
    const card_identificadores_producto = document.createElement("span");
    card_identificadores_producto.classList.add("card_identificadores_producto");
    card_identificadores_producto.innerHTML = "Id: " + id_producto + " / Cod:" + codigo_barras_producto;


    //elemento mensaje
    const mensaje_importante = document.createElement("span");
    mensaje_importante.classList.add("mensaje_importante");
    mensaje_importante.innerHTML = "* Venta solo a domicilio. <strong>Domicilio gratis por lanzamiento hasta nuevo aviso. </strong>";

    //elemento icono whatsapp
    const link_whatsapp_pagina_producto = document.createElement("a");
    link_whatsapp_pagina_producto.classList.add("link_whatsapp_pagina_producto");
    link_whatsapp_pagina_producto.setAttribute("href", "https://wa.me/573003581311");
    link_whatsapp_pagina_producto.setAttribute("target", "_blank");
    link_whatsapp_pagina_producto.innerHTML = "Comprar o preguntar"
   
    
    //Elemento card (Contenedor principal)
    let card_productos;
    let contenedor_infoproducto_productoIndividual;
    
    if (contenedor_destino_producto === "contenedor_producto") {
        card_productos = document.createElement("div");
        card_productos.classList.add("card_producto_pagina_individual");
        contenedor_infoproducto_productoIndividual = document.createElement("div");
        contenedor_infoproducto_productoIndividual.classList.add("contenedor_infoproducto_individual");
    } else {
        card_productos = document.createElement("a");
        card_productos.id = id_producto;
        card_productos.setAttribute("href", "../producto.php?id=" + id_producto);
        card_productos.classList.add("card_productos");
    }

    card_productos.appendChild(card_productos_imagen);
    
    if (contenedor_infoproducto_productoIndividual) {
        contenedor_infoproducto_productoIndividual.appendChild(card_productos_nombre);
        contenedor_infoproducto_productoIndividual.appendChild(card_productos_descripcion);
        contenedor_infoproducto_productoIndividual.appendChild(card_productos_precio);
        contenedor_infoproducto_productoIndividual.appendChild(card_identificadores_producto);
        contenedor_infoproducto_productoIndividual.appendChild(link_whatsapp_pagina_producto);
        contenedor_infoproducto_productoIndividual.appendChild(mensaje_importante);
        
        card_productos.appendChild(contenedor_infoproducto_productoIndividual);
        contenedor_destino.appendChild(card_productos);
    } else {
        card_productos.appendChild(card_productos_marca);
        card_productos.appendChild(card_productos_nombre);
        card_productos.appendChild(card_productos_precio);
        contenedor_destino.appendChild(card_productos);
    }
    
    
}