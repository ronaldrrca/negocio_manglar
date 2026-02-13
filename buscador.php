<?php
if (!defined('LLAVE_MALLORQUIN')) {
    die("Acceso denegado."); // O un redireccionamiento
}
?>
<div class="contenedor_buscador">
    <form class="formulario_busqueda buscador" action="#">
        <input class="campo_busqueda" type="search" name="q" placeholder="Buscar...">
        <button id="boton_buscar" type="submit"><img src="./imagenes/imagenes_sitio/icono-lupa.svg" alt="icono de lupa"></button>
    </form>
</div>