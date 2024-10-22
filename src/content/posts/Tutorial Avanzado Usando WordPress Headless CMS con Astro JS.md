---
title:  Tutorial Avanzado  WordPress Headless CMS con Astro JS
published: 2024-10-22
description: Aprende a integrar WordPress como un Headless CMS con Astro JS para obtener un sitio web rápido y escalable, combinando la facilidad de gestión de contenido de WordPress con la modernidad de Astro.
image: '' # Reemplaza esta URL por la imagen correcta
tags: ["WordPress", "Astro JS", "Headless CMS", "Desarrollo Web", "Tutorial Avanzado"]
category: "Desarrollo Web"
draft: false
lang: es
---

## Tutorial Avanzado: Usando WordPress Headless CMS con Astro JS

En el mundo del desarrollo web moderno, la necesidad de tener sitios rápidos, escalables y fáciles de gestionar nos lleva a explorar nuevas combinaciones de herramientas y tecnologías. Hoy quiero compartir un tutorial avanzado sobre cómo he integrado WordPress como un Headless CMS con Astro JS. Esta combinación permite utilizar la familiaridad de WordPress en la gestión de contenido, al tiempo que se obtiene la velocidad y eficiencia de Astro para la presentación en el frontend.

### ¿Por qué WordPress como Headless CMS?
WordPress ha sido la opción de cabecera para muchos desarrolladores cuando se trata de gestionar contenido. Es popular, fácil de usar y tiene un ecosistema masivo de plugins. Sin embargo, cuando se quiere maximizar el rendimiento, se busca desacoplar el frontend del backend, convirtiendo WordPress en un "Headless CMS". De esta manera, WordPress se encarga solo del contenido, mientras que un framework moderno maneja la visualización.

Astro JS es perfecto para el frontend, ya que permite la generación estática con la capacidad de integrar JavaScript solo donde se necesita. La combinación de WordPress y Astro ofrece un frontend rápido y un backend de gestión de contenido fácil.

### Configurando WordPress como Headless CMS

1. **Preparar el Backend en WordPress**
   
   - Primero, instala y configura WordPress en tu servidor o entorno de desarrollo local. Puedes usar herramientas como XAMPP, Local WP o simplemente instalarlo en un hosting remoto.
   - Asegúrate de tener el plugin **REST API** activo. En versiones recientes de WordPress, la REST API ya está integrada por defecto, lo cual es clave para usar WordPress como Headless CMS.
   - Puedes instalar plugins adicionales como **ACF (Advanced Custom Fields)** para personalizar los campos y tener más control sobre los datos que necesitas enviar al frontend.

2. **Creando el Frontend con Astro JS**
   
   - Instala Astro JS en tu proyecto utilizando el siguiente comando:
     ```bash
     npm create astro@latest
     ```
   - Una vez creado el proyecto, configura la estructura básica y asegúrate de tener un entorno limpio para empezar a consumir los datos desde WordPress.

3. **Conectando WordPress y Astro JS**
   
   - Para conectar ambos, necesitas hacer peticiones a la REST API de WordPress desde Astro.
   - Puedes utilizar **fetch** para obtener los datos desde la URL de la API de WordPress. Por ejemplo, si tu sitio WordPress está en `https://midominio.com`, puedes hacer una petición a `https://midominio.com/wp-json/wp/v2/posts` para obtener las publicaciones.
   
   - A continuación, un ejemplo simple de cómo obtener los posts en Astro:
     ```javascript
     ---
     import { onMount } from 'solid-js';
     let posts = [];
     
     onMount(async () => {
       const response = await fetch('https://midominio.com/wp-json/wp/v2/posts');
       posts = await response.json();
     });
     ---
     
     <div>
       {posts.map(post => (
         <article>
           <h2>{post.title.rendered}</h2>
           <div innerHTML={post.content.rendered}></div>
         </article>
       ))}
     </div>
     ```
   - Este código se encargará de obtener las publicaciones de WordPress y renderizarlas en el frontend utilizando Astro.

### Optimizando el Rendimiento
Uno de los mayores beneficios de usar Astro es que permite generar sitios estáticos, lo que resulta en un rendimiento excelente. Puedes configurar Astro para generar las páginas estáticas durante el proceso de build, asegurándote de que todo el contenido se renderice estáticamente.

- Para ello, puedes aprovechar los hooks de `getStaticPaths` y `getStaticProps` de Astro para crear páginas para cada post dinámicamente en el momento de build.

```javascript
---
export async function getStaticPaths() {
  const response = await fetch('https://midominio.com/wp-json/wp/v2/posts');
  const posts = await response.json();

  return posts.map((post) => ({
    params: { slug: post.slug }
  }));
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://midominio.com/wp-json/wp/v2/posts?slug=${params.slug}`);
  const post = await response.json();
  return { props: { post: post[0] } };
}
---
```

### Ventajas de Esta Configuración
1. **Rendimiento**: Astro genera HTML estático, lo que hace que las páginas sean muy rápidas.
2. **Escalabilidad**: Al desacoplar el frontend y el backend, puedes escalar ambas partes de forma independiente.
3. **Flexibilidad**: Puedes seguir usando WordPress para lo que mejor hace: gestionar contenido, mientras utilizas una tecnología moderna para el frontend.

### Conclusión
Integrar WordPress como Headless CMS con Astro JS es una excelente forma de sacar lo mejor de ambos mundos: la facilidad de uso y flexibilidad de WordPress junto con el rendimiento y modernidad de Astro. Aunque la configuración puede parecer desafiante al principio, los resultados valen la pena.

¡Espero que este tutorial te haya sido útil y te inspire a probar esta combinación en tus proyectos! Si tienes preguntas o comentarios, ¡deja tu opinión abajo!

