<?php
// Habilita CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

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
    include("exercise-index.php");
}
?>
