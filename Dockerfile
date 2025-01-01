# Usa una imagen base que tenga PHP
FROM php:8.0-cli

# Instalar dependencias si es necesario
RUN apt-get update && apt-get install -y \
  libpng-dev \
  libjpeg-dev \
  libfreetype6-dev \
  && rm -r /var/lib/apt/lists/*

# Copiar los archivos del proyecto al contenedor
COPY . /var/www/html

# Configurar el directorio de trabajo
WORKDIR /var/www/html

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar el servidor PHP
CMD ["php", "-S", "0.0.0.0:${PORT:-3000}", "-t", "public"]
