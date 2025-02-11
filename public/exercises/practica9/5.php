<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles/5.css">
  <title>Document</title>
</head>

<body>
  <form action=" 5Destino.php" method="get">
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" required>
    <br>
    <label for="apellidos">Apellidos</label>
    <input type="text" id="apellidos" name="apellidos" required>
    <br>
    <label for="direccion">Dirección</label>
    <input type=" text" name="direccion" id="direccion" required>
    <br>
    <label for="codigo">Código Postal</label>
    <input type="text" id="codigo" name="codigo" required>
    <br>
    <label for="telefono">Teléfono</label>
    <input type="text" id="telefono" name="telefono" required>
    <br>
    <label for="correo">Correo</label>
    <input type="text" id="correo" name="correo" required>
    <br>
    <br>
    <button>Enviar</button>
  </form>
</body>

</html>