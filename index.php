<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La virtual en Manglar</title>
    <link rel="shortcut icon" href="./imagenes/imagenes_sitio/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header><?php require './header.php'; ?></header>
    <main>
        <?php require './banner.php'  ?>
        <?php require './seccion_resultados.php'  ?> 

        <div id="inicio_por_defecto">
            <div class="seccion_por_defecto">
                <h2 class="articulos_destacados_titulo">Destacados</h2>
                <section id="articulos_destacados" class="articulos_destacados"></section>
            </div>
            <div class="seccion_por_defecto">
                <h2 class="articulos_destacados_titulo">Nuevos</h2>
                <section id="articulos_nuevos" class="articulos_nuevos"></section>
            </div>
        </div>

        <div id="domicilio_flotante">
            <img src="./imagenes/imagenes_sitio/carrito.png" alt="carrito de compras">
            <span>Domicilio gratis <br> en Manglar</span>    
        </div>
    </main>
    <footer><?php include './footer.php' ?></footer>
    <script src="./js/header.js"></script>
    <script src="./js/crear_card.js"></script>
    <script src="./js/index.js"></script>
    <script src="./js/busqueda_articulos.js"></script>
</body>
</html>