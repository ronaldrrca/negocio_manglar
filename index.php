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
        <?php require './banner.php'  ?>
        <?php require './seccion_resultados.php'  ?> 

        <div id="seccion_por_defecto">
            <h2 class="articulos_destacados_titulo">Artículos destacados</h2>
            <section id="articulos_destacados" class="articulos_destacados"></section>
        </div>
        
    </main>
    <footer><?php include './footer.php' ?></footer>
    <script src="./js/header.js"></script>
    <script src="./js/crear_card.js"></script>
    <script src="./js/index.js"></script>
    <script src="./js/busqueda_articulos.js"></script>
</body>
</html>