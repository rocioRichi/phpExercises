FROM ubuntu:20.04

RUN apt-get update && \
    apt-get install -y tzdata && \
    echo "Etc/UTC" > /etc/timezone && \
    ln -sf /usr/share/zoneinfo/Etc/UTC /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata

# Actualizar e instalar dependencias
RUN apt-get update && \
    apt-get install -y php php-cli php-fpm php-mbstring php-xml php-curl php-json && \
    rm -r /var/lib/apt/lists/*

# Configuración del contenedor
WORKDIR /app

# Copiar el código del proyecto al contenedor
COPY . /app

# Exponer el puerto que usará PHP
EXPOSE 3000

# Comando de inicio para PHP
CMD ["php", "-S", "0.0.0.0:3000", "-t", "public"]
