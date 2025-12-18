const icono_menu = document.getElementById("icono_menu");
const icono_cerrar_menu = document.getElementById("icono_cerrar_menu");
const menu = document.getElementById("menu");

icono_menu.addEventListener("click", ()=> {
    icono_menu.style.display = "none";
    icono_cerrar_menu.style.display = "flex";
    menu.style.display = "flex";
});

icono_cerrar_menu.addEventListener("click", ()=>{
    icono_cerrar_menu.style.display = "none";
    icono_menu.style.display = "flex";
    menu.style.display = "none";
})

