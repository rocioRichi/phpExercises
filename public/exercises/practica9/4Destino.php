<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h3>Método POST</h3>
  Nombre: <?= $_POST["nombre"]; ?>
  <br>
  Email: <?= $_POST["email"]; ?>
  <br>
  <br>
  <h3>Método GET</h3>
  Nombre: <?= $_GET["nombre"]; ?>
  <br>
  Email: <?= $_GET["email"]; ?>

</body>

</html>