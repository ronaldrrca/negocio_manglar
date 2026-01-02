<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="shortcut icon" href="./imagenes/imagenes_sitio/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header><?php require './header.php'; ?></header>
    <main>
        <?php require './banner.php'  ?>   
        <?php require './seccion_resultados.php'  ?> 
        
        <div class="seccion_por_defecto">
            <h2 id="titulo_categoria"></h2>
            <section id="categoria" class="seccion_productos_visibles"></section>
        </div>
        <img id="icono_whasapp" src="./imagenes/imagenes_sitio/icono_whatsapp.svg" alt="icono whatsaap">
    </main>
    <footer><?php require './footer.php';?></footer>
    <script src="./js/header.js"></script>
    <script src="./js/crear_card.js"></script>
    <script src="./js/categoria.js"></script>
    <script src="./js/busqueda_articulos.js"></script>
</body>
</html>