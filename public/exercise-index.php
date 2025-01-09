<?php
header("Access-Control-Allow-Origin: *");

$exercises = [
    ["id" => "exercise1", "title" => "Sumar dos números"],
    ["id" => "exercise2", "title" => "Mostrar una tabla"],
    ["id" => "exercise3", "title" => "Formulario de entrada"],
];

echo "<h1>Índice de Ejercicios</h1>";
echo "<ul>";
foreach ($exercises as $exercise) {
    echo "<li><button class='load-exercise' data-id='{$exercise['id']}'>{$exercise['title']}</button></li>";}
echo "</ul>";
?>
