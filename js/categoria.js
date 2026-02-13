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

fetch(`./controlador/ver_productos_por_categoria.php?categoria=${categoria}`)
    .then(response => response.json())
    .then(data => {
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
                    "categoria"
                );
            });
        } 
    })
    .catch(error => {
        location.href = "../index.php";
    });








