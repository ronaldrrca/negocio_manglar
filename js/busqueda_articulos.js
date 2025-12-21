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
                            articulo.id_articulos,
                            articulo.imagen_articulos, 
                            articulo.alt_articulos,
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