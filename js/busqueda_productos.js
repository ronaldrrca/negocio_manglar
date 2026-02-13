// Seleccionamos todos los formularios que tengan esa clase
const formularios = document.querySelectorAll(".formulario_busqueda");

formularios.forEach(formulario => {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Buscamos el input que está DENTRO del formulario que se acaba de enviar
        // 'this' hace referencia al formulario específico que disparó el evento
        let campo = this.querySelector(".campo_busqueda");
        let valor_busqueda = campo.value;

        if (valor_busqueda.length > 2) {
            fetch('./controlador/busqueda.php?termino=' + encodeURIComponent(valor_busqueda))
                .then(response => response.json())
                .then(data => {
                    let resultados_busqueda = document.getElementById("resultados_busqueda");
                    resultados_busqueda.innerHTML = "";
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
                                "resultados_busqueda"
                            );
                        });
                        document.getElementById("seccion_resultados").style.display = "flex";
                    } 
                })
                .catch(error => {
                    console.error("Error en el fetch:", error);
                    campo.value = "";
                    campo.setAttribute("placeholder", "Intente con otra palabra");
                });
        }
    });
});