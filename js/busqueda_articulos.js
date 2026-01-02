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
                    const listaArticulos = data.datos; 
                    
                    if (Array.isArray(listaArticulos)) {
                        listaArticulos.forEach(articulo => {
                            crearCard(
                                articulo.id_articulos,
                                articulo.imagen_articulos, 
                                articulo.alt_articulos,
                                articulo.nombre_articulos, 
                                articulo.descripcion_articulos,
                                articulo.precio_articulos, 
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