---
title: Rotación continua de imágen con CSS en Elementor y WordPress
published: 2024-10-18
description: "Con este sencillo código lograrás hacer rotar cualquier imagen de Elementor sin necesidad de plugins adicionales."
image: https://elsaltoweb.es/wp-content/uploads/2024/04/Elementor.jpg
tags: ["WordPress", "CSS", "Elementor", "Animación"]
category: "WordPress"
draft: false
---

Con este sencillo código lograrás hacer rotar cualquier imagen de Elementor sin necesidad de plugins adicionales. A continuación, te explico cómo hacerlo paso a paso.

<style>
.rotacion-infinita {
    animation: rotar 3s infinite linear; /* ajusta la duración y el tipo de animación según sea necesario */
}

@keyframes rotar {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
<div class="rotacion-infinita">
    <img src="https://elsaltoweb.es/wp-content/uploads/2024/05/rayo-1.png" alt="Imagen en rotación" width="200">
</div>

### Paso 1: Agregar una Imagen en Elementor

Inicia sesión en tu sitio de WordPress y abre la página en la que deseas aplicar el efecto de rotación continua a una imagen utilizando Elementor.

- Añade un widget de imagen en la ubicación deseada de tu diseño.

### Paso 2: Crear una Clase Personalizada

- Haz clic derecho en el widget de imagen y selecciona **“Editar”**.
- Ve a la sección **“Opciones avanzadas”** del widget de imagen.
- En el campo de **“Clase CSS”**, añade una clase personalizada. Por ejemplo, puedes usar **“rotacion-infinita”**.

### Paso 3: Añadir el Código CSS

Ve a la sección de personalización de tu tema de WordPress o al editor de CSS personalizado y copia y pega el siguiente código CSS:

```css
.rotacion-infinita {
    animation: rotar 3s infinite linear; /* ajusta la duración y el tipo de animación según sea necesario */
}

@keyframes rotar {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
```

### Paso 4: Guardar y Publicar la Página

- Guarda los cambios en Elementor.
- Publica la página en tu sitio de WordPress.

Ahora, la imagen dentro del widget de Elementor que tiene la clase **“rotacion-infinita”** se rotará continuamente en sentido horario. Puedes ajustar la duración y el tipo de animación modificando los valores en la regla `animation`.

### Conclusión

CSS ofrece una forma sencilla y efectiva de crear animaciones sin necesidad de utilizar librerías o plugins adicionales. En este ejemplo, hemos visto cómo hacer que una imagen rote continuamente con solo unos pocos pasos en Elementor.

Este tipo de animación puede ser muy útil para resaltar elementos importantes en tu sitio web y captar la atención del usuario. ¡Pruébalo y observa cómo mejora la interacción y la experiencia visual de tu página!

Si tienes alguna pregunta o necesitas ayuda adicional, ¡deja un comentario abajo!
