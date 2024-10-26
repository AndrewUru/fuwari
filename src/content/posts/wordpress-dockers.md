---
title: Desplegar un proyecto WordPress en segundos con Docker
published: 2024-10-17
description: Aprende a levantar un proyecto de WordPress de manera rápida y eficiente utilizando Docker para agilizar tu desarrollo.
image: 'https://elsaltoweb.es/wp-content/uploads/2024/10/docker-y-wordpress.webp' # Reemplaza esta URL por la imagen correcta
tags: [WordPress, Docker, Desarrollo Web, Hosting, Contenedores]
category: Desarrollo Web
draft: false 
lang: es
---

Levantar un proyecto de **WordPress con Docker** es una excelente manera de trabajar con un entorno listo para desarrollo o pruebas sin las complicaciones de configuraciones manuales. **Docker** permite empaquetar todo lo necesario en contenedores, reduciendo considerablemente el tiempo y los errores de configuración. En esta guía, aprenderás cómo crear un entorno de WordPress en cuestión de segundos utilizando Docker.

## ¿Por qué usar Docker para WordPress?

Docker ofrece múltiples ventajas para trabajar con **WordPress**:

- **Rápida configuración**: Todo el entorno (WordPress, base de datos, etc.) se levanta automáticamente con unos pocos comandos.
- **Portabilidad**: Puedes mover tu proyecto fácilmente a diferentes máquinas sin preocuparte por las dependencias.
- **Aislamiento**: Cada proyecto tiene su propio entorno aislado, evitando conflictos con otros proyectos en tu máquina.
- **Eficiencia**: Evita la instalación y configuración manual de Apache, MySQL, PHP, etc., todo se maneja a través de contenedores predefinidos.

## Requisitos previos

Para empezar con Docker necesitarás lo siguiente:

- **Docker instalado** en tu máquina. Puedes descargarlo desde [docker.com](https://www.docker.com/).
- **Docker Compose**: Suele venir incluido con Docker Desktop.
- **Terminal**: Para ejecutar los comandos necesarios.

## Pasos para levantar un proyecto de WordPress con Docker

A continuación, te mostramos cómo levantar un entorno de WordPress con Docker usando **Docker Compose**:

### 1. Crear un archivo `docker-compose.yml`

Crea un archivo llamado `docker-compose.yml` en una carpeta vacía donde desees tener tu proyecto. Este archivo describe cómo Docker debe levantar los contenedores para WordPress y la base de datos.

```yaml
version: '3.1'

services:
  wordpress:
    image: wordpress:latest
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: exampleuser
      WORDPRESS_DB_PASSWORD: examplepass
      WORDPRESS_DB_NAME: exampledb
    volumes:
      - ./wp-content:/var/www/html/wp-content

  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_DATABASE: exampledb
      MYSQL_USER: exampleuser
      MYSQL_PASSWORD: examplepass
      MYSQL_ROOT_PASSWORD: rootpass

volumes:
  db_data:
```

Este archivo `docker-compose.yml` define dos servicios:

- **wordpress**: El contenedor que correrá WordPress.
- **db**: El contenedor que proveerá la base de datos MySQL para WordPress.

### 2. Levantar los contenedores

Una vez creado el archivo `docker-compose.yml`, abre una terminal y navega hasta la carpeta donde se encuentra el archivo. Luego ejecuta el siguiente comando:

```bash
docker-compose up -d
```

Este comando hará lo siguiente:

- Descargar las imágenes necesarias (WordPress y MySQL).
- Crear y levantar los contenedores.
- Ejecutar el entorno de WordPress en el puerto `8080` de tu máquina local.

![Docker Levantando Contenedores](https://www.pexels.com/photo/close-up-of-computer-keyboard-1714208/) <!-- Imagen de Pexels: Sustituir por una real -->

### 3. Acceder a tu instalación de WordPress

Después de ejecutar el comando anterior, podrás acceder a tu instalación de WordPress en tu navegador abriendo la dirección:

```
http://localhost:8080
```

Aquí podrás configurar WordPress como lo harías normalmente.

![Configuración de WordPress](https://www.pexels.com/photo/high-angle-photo-of-person-typing-on-laptop-5474296/) <!-- Imagen de Pexels: Sustituir por una real -->

### 4. Editar archivos de WordPress con Visual Studio Code

Para facilitar la edición de los archivos de WordPress, puedes usar **Visual Studio Code**:

1. **Abrir la carpeta del proyecto**: Abre la carpeta que contiene el archivo `docker-compose.yml` en Visual Studio Code.
2. **Navegar a los archivos de WordPress**: La carpeta `wp-content` está mapeada directamente desde tu máquina al contenedor, por lo que cualquier cambio que realices en `wp-content` se reflejará inmediatamente en tu instalación de WordPress.
3. **Instalar la extensión Docker en VS Code** (opcional): Esta extensión te permitirá gestionar los contenedores directamente desde Visual Studio Code, facilitando el monitoreo y la administración del entorno.

![Edición con Visual Studio Code](https://www.pexels.com/photo/person-using-black-laptop-computer-1181675/) <!-- Imagen de Pexels: Sustituir por una real -->

### 5. Comandos útiles para Docker

- **Levantar los contenedores**: 
  ```bash
  docker-compose up -d
  ```
- **Detener los contenedores**: 
  ```bash
  docker-compose down
  ```
- **Ver los logs**: 
  ```bash
  docker-compose logs
  ```
- **Acceder al contenedor de WordPress**: 
  ```bash
  docker exec -it nombre_del_contenedor /bin/bash
  ```

![Comandos Docker](https://www.pexels.com/photo/person-holding-white-printer-paper-near-macbook-pro-374074/) <!-- Imagen de Pexels: Sustituir por una real -->

## Conclusión

Levantar un entorno de WordPress utilizando Docker es extremadamente rápido y eficiente. Con un solo comando puedes tener un entorno completo de WordPress corriendo en tu máquina. Además, la integración con **Visual Studio Code** facilita la edición de archivos y el manejo del proyecto.

Docker te permite no solo ahorrar tiempo, sino también trabajar con entornos consistentes y sin preocupaciones de dependencias, lo que lo hace una herramienta imprescindible para desarrolladores que trabajan con WordPress y otros sistemas web.

![Levantar WordPress con Docker](https://www.pexels.com/photo/photo-of-person-holding-up-a-drone-1125957/) <!-- Imagen de Pexels: Sustituir por una real -->
