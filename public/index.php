<?php
// Verifica si se ha solicitado un ejercicio específico
if (isset($_GET['exercise'])) {
    $exercise = $_GET['exercise'];
    $file = "exercises/$exercise.php";

    // Verifica si el archivo existe
    if (file_exists($file)) {
        include($file);
    } else {
        echo "El ejercicio solicitado no existe.";
    }
} else {
    echo "Bienvenido. Por favor, selecciona un ejercicio para continuar.";
}
?>
