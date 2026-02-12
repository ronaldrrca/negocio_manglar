// Crear un objeto URL para analizarla
const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro 'cat'
let categoria = urlParams.get('cat');

//Dependiendo del valoor de la variable categoría asignamos el subtitulo correspondiente
switch (categoria) {
    case "papeleria":
        document.getElementById("titulo_categoria").innerHTML = "Papelería y útiles escolares";
        break;
    case "miscelaneos":
        document.getElementById("titulo_categoria").innerHTML = "Miscelaneos";
        break;
    case "celebraciones":
        document.getElementById("titulo_categoria").innerHTML = "Fiestas y celebraciones";
        break;
    case "cuidado-personal":
        document.getElementById("titulo_categoria").innerHTML = "Cuidado personal";
        break;
    case "farmacia":
        document.getElementById("titulo_categoria").innerHTML = "Farmacia";
        break;
    case "mascotas":
        document.getElementById("titulo_categoria").innerHTML = "Mascotas";
        break;
    default:
        break;
}



// --- Lógica de Carga artículos por categoría ---

fetch(`./controlador/ver_articulos_por_categoria.php?categoria=${categoria}`)
    .then(response => response.json())
    .then(data => {
        const listaArticulos = data.datos; 
        
        if (Array.isArray(listaArticulos)) {
            listaArticulos.forEach(articulo => {
                crearCard(
                    articulo.id_articulos,
                    articulo.imagen_articulos, 
                    articulo.nombre_articulos, 
                    articulo.descripcion_articulos,
                    articulo.precio_articulos, 
                    articulo.codigo_barras_articulos,
                    "categoria"
                );
            });
        } 
    })
    .catch(error => {
        location.href = "../index.php";
    });








