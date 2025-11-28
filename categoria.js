// Crear un objeto URL para analizarla
const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro 'cat'
let categoria = urlParams.get('cat');

//Dependiendo del valoor de la variable categoría asignamos el subtitulo correspondiente
switch (categoria) {
    case "papeleria-y-utiles-escolares":
        document.getElementById("titulo_categoria").innerHTML = "Papelería y útiles escolares";
        break;
    case "manualidades-y-arte":
        document.getElementById("titulo_categoria").innerHTML = "Manualidades y arte";
        break;
    case "miscelaneos":
        document.getElementById("titulo_categoria").innerHTML = "Miscelaneos";
        break;
    case "fiestas-y-celebraciones":
        document.getElementById("titulo_categoria").innerHTML = "Fiestas y celebraciones";
        break;
    case "cuidado-personal":
        document.getElementById("titulo_categoria").innerHTML = "Cuidado personal";
        break;
    case "farmacia":
        document.getElementById("titulo_categoria").innerHTML = "Farmacia";
        break;
    default:
        break;
}


