---
title:  Creamos un Plugin de WordPress con la API de OpenAI
published: 2024-10-22
description: Aprende cómo crear un plugin para WordPress que integre la API de OpenAI, permitiendo generar contenido automático directamente desde el panel de administración de tu sitio.
image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' # Imagen de Unsplash para ilustrar el tutorial
category: "Desarrollo Web"
tags: ["WordPress", "Plugin", "OpenAI", "API", "PHP"]
draft: false
lang: es
---

## Introducción

En este tutorial aprenderás a crear un **plugin de WordPress** que integre la **API de OpenAI**, lo cual permitirá generar contenido automático directamente desde el panel de administración de tu sitio. OpenAI tiene el potencial de mejorar la productividad, especialmente si quieres generar contenido para publicaciones de blog, respuestas automatizadas o incluso asistencias en línea.

## ¿Por qué Crear un Plugin con la API de OpenAI?

Integrar la API de **OpenAI** en un plugin de WordPress te permitirá automatizar procesos y generar contenido de calidad con gran rapidez. Algunas ventajas son:

- **Aumentar la productividad**: Genera contenido automatizado para ahorrar tiempo.
- **Calidad del contenido**: Utiliza la inteligencia artificial para redactar texto coherente y atractivo.
- **Personalización**: Puedes adaptar el plugin para que se ajuste perfectamente a las necesidades de tu sitio web.

## Requisitos Previos

Para seguir este tutorial necesitarás tener conocimientos básicos sobre:

- **PHP** y **WordPress** (creación de plugins).
- **JavaScript** (para integrar AJAX si se necesita).
- Familiaridad con **APIs** y cómo funcionan las solicitudes HTTP.

Además, necesitarás una **clave API de OpenAI** que puedes obtener registrándote en la página oficial de OpenAI.

## Paso 1: Crear la Estructura del Plugin

Para crear un plugin de WordPress, comenzaremos creando la estructura de archivos del plugin.

1. **Crear la carpeta del plugin**: Navega a la carpeta `wp-content/plugins` y crea una nueva carpeta llamada `openai-content-generator`.
2. **Crear el archivo principal del plugin**: Dentro de esa carpeta, crea un archivo `openai-content-generator.php` y agrega la cabecera del plugin:

   ```php
   <?php
   /**
    * Plugin Name: Generador de Contenido con OpenAI
    * Description: Plugin para generar contenido automático utilizando la API de OpenAI.
    * Version: 1.0
    * Author: Tu Nombre
    */
   
   if (!defined('ABSPATH')) {
       exit; // Exit if accessed directly.
   }
   ```

## Paso 2: Registrar un Menú en el Panel de Administración

Necesitamos agregar una página de configuración para nuestro plugin en el panel de administración de WordPress.

1. **Agregar el menú de administración**:

   ```php
   add_action('admin_menu', 'openai_content_generator_menu');
   
   function openai_content_generator_menu() {
       add_menu_page(
           'Generador OpenAI',
           'Generador OpenAI',
           'manage_options',
           'openai-content-generator',
           'openai_content_generator_page',
           'dashicons-admin-generic'
       );
   }
   
   function openai_content_generator_page() {
       ?>
       <div class="wrap">
           <h1>Generador de Contenido con OpenAI</h1>
           <form method="post" action="">
               <textarea name="openai_prompt" rows="5" cols="50" placeholder="Escribe tu prompt aquí..."></textarea><br>
               <input type="submit" name="generate_content" value="Generar Contenido" class="button button-primary">
           </form>
       </div>
       <?php
   }
   ```

## Paso 3: Conectar con la API de OpenAI

Una vez que tengamos la interfaz básica del plugin, necesitamos integrar la funcionalidad para conectar con la API de OpenAI y generar contenido.

1. **Agregar el código para realizar la solicitud a OpenAI**:

   ```php
   if (isset($_POST['generate_content'])) {
       add_action('admin_init', 'generate_openai_content');
   }
   
   function generate_openai_content() {
       $prompt = sanitize_text_field($_POST['openai_prompt']);
       $api_key = 'TU_CLAVE_API_OPENAI';
       
       $response = wp_remote_post('https://api.openai.com/v1/completions', array(
           'headers' => array(
               'Content-Type' => 'application/json',
               'Authorization' => 'Bearer ' . $api_key
           ),
           'body' => json_encode(array(
               'model' => 'text-davinci-003',
               'prompt' => $prompt,
               'max_tokens' => 150
           )),
       ));
       
       if (is_wp_error($response)) {
           echo '<div class="notice notice-error"><p>Error al conectar con la API de OpenAI.</p></div>';
           return;
       }
       
       $body = wp_remote_retrieve_body($response);
       $data = json_decode($body);
       
       if (isset($data->choices[0]->text)) {
           echo '<div class="notice notice-success"><p>Contenido Generado:</p><pre>' . esc_html($data->choices[0]->text) . '</pre></div>';
       }
   }
   ```

## Paso 4: Mejorar la Experiencia de Usuario

Podemos mejorar la experiencia de usuario añadiendo algunas características adicionales, como guardar el contenido generado como una nueva entrada o integrar **AJAX** para evitar la recarga de la página.

1. **Guardar el Contenido como una Entrada**:

   ```php
   if (isset($data->choices[0]->text)) {
       $generated_content = sanitize_text_field($data->choices[0]->text);
       
       // Crear una nueva entrada en WordPress
       $new_post = array(
           'post_title'    => wp_trim_words($generated_content, 10),
           'post_content'  => $generated_content,
           'post_status'   => 'draft',
           'post_author'   => get_current_user_id(),
           'post_category' => array(1) // Cambia el ID de la categoría si es necesario
       );
       
       wp_insert_post($new_post);
       
       echo '<div class="notice notice-success"><p>Contenido generado y guardado como borrador.</p></div>';
   }
   ```

## Conclusión

Crear un **plugin de WordPress** que se integre con la **API de OpenAI** es una excelente manera de aprovechar la inteligencia artificial para mejorar tu sitio web. Puedes utilizar este plugin para generar contenido automatizado, mejorar la interacción con los usuarios y facilitar tareas repetitivas. Si tienes alguna duda o necesitas más detalles sobre alguno de los pasos, ¡deja un comentario y estaré encantado de ayudarte!

