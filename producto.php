<?php  
    define('LLAVE_MALLORQUIN', true);
    $url_completa = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Mallorquín Market | Variedades, Belleza, Bienestar, Farmacia y Mascotas</title>
    <meta name="description" content="Tu tienda virtual en Ciudad Mallorquín. Encuentra papelería, cosméticos, farmacia básica y cuidado para mascotas (shampoo, eliminador de olores) con domicilio inmediato.">
    <link rel="canonical" href="<?php echo $url_completa; ?>">

    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo $url_completa; ?>">
    <meta property="og:title" content="Mallorquín Market - Todo para tu hogar y tus mascotas">
    <meta property="og:description" content="Lo que necesitas, a un clic en Ciudad Mallorquín. Belleza, bienestar, papelería y productos para mascotas a domicilio.">
    <meta property="og:image" content="./imagenes/imagenes_sitio/banner_redes.png">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Mallorquín Market | Tu Miscelánea a Domicilio">
    <meta name="twitter:description" content="Variedades, belleza y bienestar para ti y tus mascotas en la puerta de tu casa.">
    <meta name="twitter:image" content="./imagenes/imagenes_sitio/banner_redes.png">

    <link rel="icon" href="./imagenes/imagenes_sitio/favicon.png" type="image/png">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
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
        <div id="contenedor_producto"></div>
        <?php include './preguntaas_frecuentes.php'  ?>
    </main>
    <footer><?php require './footer.php';?></footer>
    <script src="./js/header.js"></script>
    <script src="./js/crear_card.js"></script>
    <script src="./js/producto.js"></script>
    <script src="./js/busqueda_productos.js"></script>
</body>
</html>