<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mallorquín Market | Variedades, Belleza, Bienestar, Farmacia y Mascotas</title>
    <link rel="shortcut icon" href="./imagenes/imagenes_sitio/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header><?php require './header.php'; ?></header>
    <main>
        <h1>Papelería - Miscelánea - Celebraciones - Belleza y cuidado personal - Farmacia - Mascotas</h1>        

        <div id="seccion_resultados">
            <h2 class="seccion_resultados_titulo">Tus resultados</h2>
            <section id="resultados_busqueda" class="resultados_busqueda"></section>
        </div>
        <div id="contenedor_articulo"></div>
    </main>
    <footer><?php require './footer.php';?></footer>
    <script src="./js/header.js"></script>
    <script src="./js/crear_card.js"></script>
    <script src="./js/articulo.js"></script>
    <script src="./js/busqueda_articulos.js"></script>
</body>
</html>