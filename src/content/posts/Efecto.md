---
title: Efecto de Partículas con WebGL
published: 2024-10-17
description: Implementación de un efecto de partículas dinámico utilizando WebGL directamente en un post con MDX.
tags: [WebGL, Efectos Visuales, Partículas, Desarrollo Web]
category: Desarrollo Web
draft: false
---

En **ElSaltoWeb**, además de utilizar tecnologías como **Three.js** para gráficos avanzados, también trabajamos con **WebGL** para crear efectos visuales personalizados como sistemas de partículas. WebGL permite trabajar directamente con la GPU para crear efectos gráficos de alto rendimiento directamente en el navegador.

### Ejemplo: Efecto de Partículas en WebGL


A continuación, te mostramos un ejemplo de cómo crear un sencillo sistema de partículas utilizando **WebGL**. Las partículas se mueven de forma aleatoria para simular un flujo dinámico.

<div id="webgl-container"></div>

<script>
  const canvas = document.createElement('canvas');
  document.getElementById('webgl-container').appendChild(canvas);

  const gl = canvas.getContext('webgl');
  if (!gl) {
    alert('WebGL no está disponible en este navegador.');
  }

  // Redimensionar el canvas al tamaño del contenedor
  function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Shader de vértices
  const vertexShaderSource = `
    attribute vec2 a_position;
    void main() {
      gl_PointSize = 5.0;
      gl_Position = vec4(a_position, 0, 1);
    }
  `;

  // Shader de fragmentos (color)
  const fragmentShaderSource = `
    precision mediump float;
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // Color blanco para las partículas
    }
  `;

  // Crear los shaders
  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Error al compilar shader:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  // Crear el programa y enlazar los shaders
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Error al enlazar el programa:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }

  gl.useProgram(program);

  // Definir posiciones aleatorias para las partículas
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 2);

  for (let i = 0; i < particleCount * 2; i++) {
    positions[i] = Math.random() * 2 - 1; // Coordenadas aleatorias entre -1 y 1
  }

  // Crear un buffer para las posiciones de las partículas
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  // Conectar las posiciones de los vértices al atributo "a_position"
  const positionLocation = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  // Animar las partículas
  function animateParticles() {
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Actualizar las posiciones de las partículas para generar movimiento aleatorio
    for (let i = 0; i < particleCount * 2; i += 2) {
      positions[i] += (Math.random() - 0.5) * 0.01;
      positions[i + 1] += (Math.random() - 0.5) * 0.01;
    }

    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Dibujar las partículas
    gl.drawArrays(gl.POINTS, 0, particleCount);

    requestAnimationFrame(animateParticles);
  }

  animateParticles();
</script>

### ¿Por qué WebGL?

**WebGL** permite crear gráficos 3D y 2D de alto rendimiento directamente en el navegador sin necesidad de plugins externos. Al utilizar la potencia de la GPU, es posible manejar grandes cantidades de partículas y generar efectos avanzados como el que se muestra arriba. En **ElSaltoWeb**, usamos WebGL para crear experiencias visuales únicas y optimizadas, desde sistemas de partículas hasta simulaciones más complejas.

### Aplicaciones de WebGL

En **ElSaltoWeb**, utilizamos WebGL para crear:
- **Visualizaciones de datos 3D**: Gráficas y simulaciones que permiten a los usuarios interactuar con información de una manera visualmente atractiva.
- **Simulaciones y Efectos Especiales**: Efectos visuales avanzados como partículas, humo, fuego y agua.
- **Entornos Inmersivos**: WebGL permite el desarrollo de experiencias que atrapan a los usuarios, desde sitios web interactivos hasta videojuegos.

---

Si estás interesado en añadir efectos visuales avanzados o experiencias interactivas a tu sitio web, visita [www.elsaltoweb.es](http://www.elsaltoweb.es) o contáctanos para saber más sobre cómo podemos ayudarte a implementar soluciones con WebGL.
