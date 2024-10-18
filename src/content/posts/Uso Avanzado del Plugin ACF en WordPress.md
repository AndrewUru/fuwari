---
title: Uso Avanzado del Plugin ACF en WordPress
published: 2024-10-18
description: "Guía profesional para aprovechar el plugin Advanced Custom Fields (ACF) en WordPress con un ejemplo dinámico en JavaScript."
image: https://elsaltoweb.es/wp-content/uploads/2024/10/ACF.webp
tags: ["WordPress", "ACF", "Custom Fields", "JavaScript"]
category: "WordPress"
draft: false
---

**Advanced Custom Fields (ACF)** es uno de los plugins más poderosos y populares para WordPress. Permite a los desarrolladores agregar campos personalizados a las entradas, páginas, y cualquier tipo de contenido que necesiten, mejorando significativamente la flexibilidad y personalización de un sitio WordPress. En este artículo, exploraremos cómo usar ACF para enriquecer la experiencia de desarrollo, y presentaremos un ejemplo dinámico con JavaScript.

### ¿Qué es Advanced Custom Fields (ACF)?

ACF es un plugin que permite crear y agregar campos personalizados (custom fields) a las páginas, entradas, usuarios, entre otros elementos de WordPress. Estos campos son muy útiles para almacenar información adicional como textos, imágenes, selectores y mucho más. En lugar de recurrir a complejas soluciones de programación, ACF proporciona una interfaz amigable para configurar estos campos y gestionarlos fácilmente desde el panel de administración.

### Instalación y Configuración de ACF

Para instalar ACF:
1. Ve a **Plugins > Añadir nuevo** desde el panel de administración de WordPress.
2. Busca **Advanced Custom Fields**.
3. Instala y activa el plugin.

Una vez instalado, puedes crear campos personalizados desde el panel **Custom Fields**. Puedes definir el tipo de campo (texto, imagen, enlace, etc.), su nombre, etiquetas y la ubicación donde deseas mostrarlos (por ejemplo, solo en entradas de blog o en páginas específicas).

### Creación de un Campo Personalizado Dinámico

Supongamos que estamos creando un sitio de reseñas de películas. Queremos que cada entrada tenga un campo adicional donde el autor pueda agregar una puntuación (del 1 al 10) para la película. Vamos a ver cómo hacerlo.

1. **Crear el Campo Personalizado**:
   - Desde el panel de ACF, crea un grupo de campos llamado **Reseña de Película**.
   - Agrega un campo llamado **Puntuación**, de tipo **Número**, con un valor mínimo de 1 y máximo de 10.
   - Configura este grupo de campos para que se muestre en las entradas de tipo **Post**.

2. **Mostrar el Campo en el Front-End**:
   Para mostrar la puntuación en el front-end, agrega el siguiente código a tu plantilla `single.php` o en la plantilla correspondiente donde quieres mostrar la puntuación:

   ```php
   <?php if (function_exists('get_field')): ?>
       <div class="movie-rating">
           <strong>Puntuación: </strong>
           <?php echo get_field('puntuacion'); ?> / 10
       </div>
   <?php endif; ?>
   ```

   Esto mostrará la puntuación ingresada por el autor en cada entrada de película.

### Ejemplo Dinámico con JavaScript

Para hacer este campo aún más interesante, podemos agregar una barra de progreso que se actualice dinámicamente según la puntuación de la película. A continuación, mostramos cómo hacerlo con un poco de JavaScript.

1. **Agregar el HTML**:
   Dentro del código PHP anterior, agregaremos un contenedor para la barra de progreso:

   ```php
   <?php if (function_exists('get_field')): ?>
       <div class="movie-rating">
           <strong>Puntuación: </strong>
           <?php $rating = get_field('puntuacion'); ?>
           <?php echo $rating; ?> / 10
           <div class="rating-bar" data-rating="<?php echo $rating; ?>">
               <div class="rating-fill"></div>
           </div>
       </div>
   <?php endif; ?>
   ```

2. **Estilos CSS**:
   Agrega los siguientes estilos CSS para la barra de progreso:


   .rating-bar {
          width: 100%;
       height: 20px;
       background: #e0e0e0;
       border-radius: 10px;
       margin-top: 10px;
   }

   .rating-fill {
       height: 100%;
       width: 0;
       background: #0073aa;
       transition: width 0.5s ease;
   }



### Conclusión

Con ACF, puedes crear campos personalizados para enriquecer las entradas de tu sitio y hacerlas más dinámicas y personalizadas. En este ejemplo, hemos visto cómo crear un campo de **puntuación** y mostrarlo de manera interactiva usando JavaScript. Esta combinación de ACF y un toque de código personalizado puede hacer que tu sitio sea más atractivo y profesional, sin necesidad de plugins complicados.

¡Esperamos que esta guía te haya ayudado a entender mejor cómo aprovechar ACF y a crear contenido dinámico con JavaScript en WordPress! Si tienes alguna pregunta, ¡deja un comentario abajo!
