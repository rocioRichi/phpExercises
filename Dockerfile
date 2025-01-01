# Usa una imagen base con PHP
FROM php:8.0-cli

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Inicia el servidor PHP
CMD ["php", "-S", "0.0.0.0:${PORT:-3000}", "-t", "public"]
