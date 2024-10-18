---
title: Rotación Continua de Imagen con CSS en Elementor en WordPress
published: 2024-10-18
description: "Demostración en vivo de cómo crear una animación de rotación continua de una imagen con CSS en WordPress usando Elementor."
image: https://elsaltoweb.es/wp-content/uploads/2024/04/Elementor.jpg
tags: ["WordPress", "CSS", "Elementor", "Animación"]
category: "WordPress"
draft: false
---

**CSS** nos permite crear animaciones simples y efectivas sin necesidad de librerías externas como GSAP. En este artículo, aprenderemos cómo usar CSS junto con Elementor en WordPress para crear una animación de rotación continua de una imagen. Esta demostración en vivo te permitirá experimentar el resultado directamente y jugar con la animación.

### ¿Por qué Usar CSS para Animaciones?

**CSS** es una excelente opción para realizar animaciones sencillas debido a su simplicidad y rendimiento. Al no requerir JavaScript, las animaciones en CSS son ligeras y eficientes, y son ideales para añadir pequeñas mejoras visuales e interactivas a nuestros sitios web.

### Añadir una Imagen para Rotar en Elementor

Para crear la animación de rotación de una imagen en un sitio de WordPress usando Elementor, primero debemos agregar la imagen en nuestra página.

1. **Crear una Imagen en Elementor**:
   - Abre la página con Elementor y arrastra un widget de **HTML**.
   - En el editor de HTML, agrega el siguiente código para la imagen:

   ```html
   <div id="rotating-image">
       <img src="https://elsaltoweb.es/wp-content/uploads/2024/05/rayo-1.png" alt="Imagen para rotar" width="200">
   </div>
   ```

   - Luego, agrega CSS personalizado para centrar la imagen y prepararla para la animación:

   ```css
   #rotating-image {
       text-align: center;
       margin: 20px auto;
       cursor: pointer;
   }

   #rotating-image img {
       display: block;
       margin: 0 auto;
   }
   ```

### Añadir la Animación de Rotación Continua con CSS

Vamos a añadir la animación de rotación utilizando solo CSS para hacer que la imagen rote continuamente.

1. **CSS para Rotación Continua**:
   - Añade el siguiente CSS para aplicar la animación de rotación continua a la imagen:

   ```css
   @keyframes rotateImage {
       0% {
           transform: rotate(0deg);
       }
       100% {
           transform: rotate(360deg);
       }
   }

   #rotating-image img {
       animation: rotateImage 5s linear infinite;
   }
   ```

### Explicación del Código

- **HTML**: Creamos un contenedor `div` con un id `rotating-image` que contiene la imagen que queremos rotar.
- **CSS**: Utilizamos la regla `@keyframes` para definir una animación llamada `rotateImage`, que rota la imagen de 0 a 360 grados. Luego aplicamos esta animación al elemento de la imagen con la propiedad `animation`, que establece una duración de 5 segundos, un movimiento lineal, y una repetición infinita.

### Conclusión

CSS ofrece una manera sencilla y eficaz de crear animaciones que no solo mejoran la experiencia visual del usuario, sino que también mantienen la carga del sitio ligera. En este ejemplo, hemos visto cómo crear una animación de rotación continua para una imagen utilizando únicamente CSS en combinación con Elementor en WordPress.

Este tipo de animación es ideal para destacar elementos visuales en tu página, captar la atención del usuario o simplemente añadir un toque divertido a tu diseño. ¡Prueba esta demostración y observa cómo CSS puede mejorar la experiencia visual en tu sitio!

Si tienes alguna pregunta o necesitas ayuda adicional, ¡deja un comentario abajo!