<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header><?php require './header.php'; ?></header>
    <main>
        <div class="contenedor_buscador">
            <form id="formulario_busqueda" action="#" class="buscador">
                <input id="campo_busqueda" type="search" name="q" placeholder="Buscar producto">
                <button id="boton_buscar" type="submit"><img src="./imagenes/imagenes_sitio/icono-lupa.svg" alt="icono de lupa"></button>
            </form>
        </div>
        <?php include './categorias.php'; ?>
        <div id="seccion_resultados">
            <h2 class="seccion_resultados_titulo">Tus resultados</h2>
            <section id="resultados_busqueda" class="resultados_busqueda"></section>
        </div>
        <div id="seccion_por_defecto">
            <h2 class="articulos_destacados_titulo">Artículos destacados</h2>
            <section id="articulos_destacados" class="articulos_destacados"></section>
        </div>
        
    </main>
    <footer><?php include './footer.php' ?></footer>
    
    <script src="./index.js"></script>
</body>
</html>