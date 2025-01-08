<?php
// Simula datos de ejemplo
$data = [
    ["Nombre" => "Alice", "Edad" => 25, "Ciudad" => "Nueva York"],
    ["Nombre" => "Bob", "Edad" => 30, "Ciudad" => "San Francisco"],
    ["Nombre" => "Charlie", "Edad" => 35, "Ciudad" => "Chicago"],
];

echo "<h1>Ejercicio 2: 2Tabla Dinámica</h1>";
echo "<table border='1'>";
echo "<thead><tr><th>Nombre</th><th>Edad</th><th>Ciudad</th></tr></thead>";
echo "<tbody>";
foreach ($data as $row) {
    echo "<tr>";
    foreach ($row as $cell) {
        echo "<td>$cell</td>";
    }
    echo "</tr>";
}
echo "</tbody>";
echo "</table>";
?>
