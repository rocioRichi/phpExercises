<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio PHP</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="components/navigation-buttons.js" defer></script>
</head>
<body>
    <h1>Ejercicio 1: Suma de dos números</h1>
    
    <form method="POST">
        <input type="number" name="num1" placeholder="Número 1" required>
        <input type="number" name="num2" placeholder="Número 2" required>
        <button type="submit" name="sumar">Sumar</button>
    </form>

    <?php
    if (isset($_POST['sumar'])) {
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $suma = $num1 + $num2;
        echo "<p>Resultado: $suma</p>";
    }
    ?>

    <!-- Botones de navegación -->
    <navigation-buttons 
        prev="ejercicio0.php" 
        next="ejercicio2.php" 
        index-url="index.html">
    </navigation-buttons>
</body>
</html>
