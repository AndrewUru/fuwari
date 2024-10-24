---
title: Crear una autorespuesta con PDF o Imagen personalizado en Elementor Pro
description: Aprende a configurar una autorespuesta con archivos adjuntos personalizados en Elementor Pro.
published: 2024-03-12
image: 'https://elsaltoweb.es/wp-content/uploads/2024/10/Elementor.webp' # Reemplaza esta URL por la imagen correcta
tags: [WordPress, Elementor, Formulario, Autorespuesta, Desarrollo Web]
category: Desarrollo Web
lang: es
draft: false
---

Con **Elementor Pro** y **formularios**: cómo enviar un correo de **autorespuesta** con un PDF o imagen personalizado que incluya el nombre del usuario que ingresó en el formulario.

Elementor Pro permite crear formularios avanzados, pero para personalizar más allá de las opciones por defecto, necesitaremos usar algo de PHP y personalizar los hooks.

## Requisitos previos

- **WordPress** instalado y configurado.
- **Elementor Pro** para crear el formulario de contacto.
- Conocimientos básicos de PHP para implementar el código.
- Un PDF o imagen base que se usará para personalizar con el nombre del usuario.

## Paso 1: Crear el formulario en Elementor Pro

1. **Crear un formulario** en Elementor Pro.
   - Añade los campos que necesites (nombre, correo, etc.).
   - Asegúrate de que tienes un campo llamado `nombre` para capturar el nombre del usuario.

2. **Configurar el Email de Respuesta Automática**:
   - En las opciones del formulario, en la pestaña de **Acción después de enviar**, selecciona **Correo electrónico**.
   - En los ajustes de correo, puedes configurar el asunto y el cuerpo del correo, pero en lugar de agregar el archivo ahora, lo haremos en el siguiente paso.

## Paso 2: Preparar el PDF o Imagen

Vamos a usar una imagen o PDF que debe personalizarse con el nombre del usuario. Puedes usar una imagen en blanco y agregar el nombre del usuario de manera dinámica con código.

### Opción 1: PDF con Nombre Personalizado
Si quieres usar un PDF, puedes generar uno con la librería **FPDF** o **TCPDF** en WordPress para agregar el nombre del usuario.

### Opción 2: Imagen con Nombre Personalizado
Si quieres usar una imagen (por ejemplo, un certificado o invitación), puedes utilizar la función `imagecreatefromjpeg()` de PHP para escribir el nombre del usuario directamente en la imagen.

## Paso 3: Código para Personalizar el PDF o Imagen

Agrega el siguiente código en el archivo `functions.php` de tu tema hijo para generar el PDF o la imagen con el nombre del usuario:

```php
function enviar_autorespuesta_personalizada($record, $handler) {
    // Obtener los datos del formulario
    $form_data = $record->get_formatted_data();
    $nombre = isset($form_data['nombre']) ? $form_data['nombre'] : 'Usuario';

    // Ruta del archivo base (PDF o imagen)
    $ruta_base = get_template_directory() . '/pdfs/certificado_base.pdf'; // Cambia el path según corresponda
    $ruta_personalizada = get_template_directory() . '/pdfs/certificado_' . $nombre . '.pdf';

    // Usando FPDF para personalizar el PDF
    require_once('fpdf/fpdf.php');
    $pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial', 'B', 16);
    $pdf->Cell(40, 10, 'Hola ' . $nombre);
    $pdf->Output('F', $ruta_personalizada);

    // Configurar el email
    $to = $form_data['email']; // Correo del usuario
    $subject = 'Aquí tienes tu PDF personalizado';
    $message = 'Hola ' . $nombre . ', adjuntamos tu archivo.';
    $headers = array('Content-Type: text/html; charset=UTF-8');
    
    // Adjuntar PDF personalizado
    wp_mail($to, $subject, $message, $headers, array($ruta_personalizada));
}

add_action('elementor_pro/forms/new_record', 'enviar_autorespuesta_personalizada', 10, 2);