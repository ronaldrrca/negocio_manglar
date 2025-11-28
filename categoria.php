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
            <form action="#" class="buscador">
                <input type="search" name="q" placeholder="Buscar producto">
                <button id="boton_buscar" type="submit"><img src="./imagenes/imagenes_sitio/icono-lupa.svg" alt="icono de lupa"></button>
            </form>
        </div>
        <h2 id="titulo_categoria"></h2>
        <?php include './categorias.php'; ?>
    </main>
    <footer><?php require './footer.php';?></footer>
    
    <script src="./categoria.js"></script>
</body>
</html>