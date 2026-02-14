<?php
if (!defined('LLAVE_MALLORQUIN')) {
    header("Location: index.php");//Redirección por ingreso directo al archivo por navegador
}
?>
<div id="header_seccion">
        <div id="header_inline">
            <a href="./index.php"><img class="logo_header" src="./imagenes/imagenes_sitio/logo.png" alt="logo mallorquin market"></a>
            <img id="icono_menu" src="./imagenes/imagenes_sitio/icono-menu.svg" alt="icono menu">
            <img id="icono_cerrar_menu" src="./imagenes/imagenes_sitio/icono-cerrar.svg" alt="icono cerrar menu">
            <!-- <div id="header_seccion_pc"> -->
                <div id="buscador_pc"><?php include './buscador.php'; ?></div>
                <div id="header_domicilio">
                    <img src="./imagenes/imagenes_sitio/carrito.png" alt="carrito de compras">
                    <span>Domicilio gratis <br> en Mallorquín</span>    
                </div>
            <!-- </div> -->
        </div>
        
    <nav id="nav">
        <ul id="menu">
            <li><a href="./index.php">Inicio</a></li>
            <li><a href="./categoria.php?cat=papeleria">Papelería</a></li>
            <li><a href="./categoria.php?cat=miscelaneos">Misceláneos</a></li>
            <li><a href="./categoria.php?cat=celebraciones">Celebraciones</a></li>
            <li><a href="./categoria.php?cat=cuidado-personal">Cuidado personal</a></li>
            <li><a href="./categoria.php?cat=farmacia">Farmacia</a></li>
            <li><a href="./categoria.php?cat=mascotas">Mascotas</a></li>
        </ul>
    </nav>
</div>

<div id="buscador_movil"><?php include './buscador.php'; ?></div>



    
    
    
    
    