---
title: Three.js Potenciando la Web con Gráficos 3D y Efectos Visuales Avanzados
published: 2024-10-17
description: Utilizo Three.js para crear efectos visuales como humo y fuego en gráficos 3D interactivos.
tags: [Desarrollo Web, Three.js, Gráficos 3D, Efectos Visuales, Diseño Web]
category: Desarrollo Web
draft: false
---

Esta biblioteca de JavaScript nos permite crear gráficos en 3D directamente en el navegador, añadiendo una capa de inmersión y dinamismo a las aplicaciones web que desarrollamos.

### ¿Qué es Three.js?

**Three.js** es una biblioteca que simplifica el uso de **WebGL**, permitiendo a los desarrolladores crear gráficos tridimensionales de manera sencilla. Con **Three.js**, se pueden crear escenas 3D, modelos, luces y cámaras, todo dentro de un navegador. Es ideal para crear experiencias interactivas como simulaciones, videojuegos y visualizaciones de datos, pero también para efectos visuales avanzados como humo, fuego y agua.

### Ejemplo: Efecto de Humo con Three.js

A continuación, te mostramos un ejemplo de un efecto visual de **humo** utilizando Three.js. Este efecto puede integrarse fácilmente en un sitio web para añadir realismo o un toque visual único:

<div id="threejs-container" style="width: 100%; height: 400px;"></div>

<script>
 (function () {
  'use strict';
  // 'To actually be able to display anything with Three.js, we need three things:
  // A scene, a camera, and a renderer so we can render the scene with the camera.'
  // - https://threejs.org/docs/#Manual/Introduction/Creating_a_scene

  var scene, camera, renderer;

  // I guess we need this stuff too
  var container,HEIGHT,
  WIDTH,fieldOfView,aspectRatio,
  nearPlane,farPlane,stats,
  geometry,particleCount,
  i,h,color,size,
  materials = [],
  mouseX = 0,
  mouseY = 0,
  windowHalfX,windowHalfY,cameraZ,
  fogHex,fogDensity,parameters = {},
  parameterCount,particles;

  init();
  animate();

  function init() {

    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;

    fieldOfView = 75;
    aspectRatio = WIDTH / HEIGHT;
    nearPlane = 1;
    farPlane = 3000;

    var GUI = dat.gui.GUI;

    /* 	fieldOfView — Camera frustum vertical field of view.
    aspectRatio — Camera frustum aspect ratio.
    nearPlane — Camera frustum near plane.
    farPlane — Camera frustum far plane.
    - https://threejs.org/docs/#Reference/Cameras/PerspectiveCamera
    In geometry, a frustum (plural: frusta or frustums)
    is the portion of a solid (normally a cone or pyramid)
    that lies between two parallel planes cutting it. - wikipedia.		*/



    cameraZ = farPlane / 3; /*	So, 1000? Yes! move on!	*/
    fogHex = 0x000000; /* As black as your heart.	*/
    fogDensity = 0.0007; /* So not terribly dense?	*/

    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.z = cameraZ;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(fogHex, fogDensity);

    container = document.createElement('div');
    document.body.appendChild(container);
    document.body.style.margin = 0;
    document.body.style.overflow = 'hidden';

    geometry = new THREE.Geometry(); /*	NO ONE SAID ANYTHING ABOUT MATH! UGH!	*/

    particleCount = 60000; /* Leagues under the sea */

    /*	Hope you took your motion sickness pills;
    We're about to get loopy.	*/

    for (i = 0; i < particleCount; i++) {

      var vertex = new THREE.Vector3();
      vertex.x = Math.random() * 2000 - 1000;
      vertex.y = Math.random() * 2000 - 1000;
      vertex.z = Math.random() * 2000 - 1000;

      geometry.vertices.push(vertex);
    }

    /*	We can't stop here, this is bat country!	*/

    parameters = [
    [
    [1, 1, 0.5], 5],

    [
    [0.95, 1, 0.5], 4],

    [
    [0.90, 1, 0.5], 3],

    [
    [0.85, 1, 0.5], 2],

    [
    [0.80, 1, 0.5], 1]];


    parameterCount = parameters.length;

    /*	I told you to take those motion sickness pills.
    Clean that vommit up, we're going again!	*/

    for (i = 0; i < parameterCount; i++) {

      color = parameters[i][0];
      size = parameters[i][1];

      materials[i] = new THREE.PointCloudMaterial({
        size: size });


      particles = new THREE.PointCloud(geometry, materials[i]);

      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;

      scene.add(particles);
    }

    /*	If my calculations are correct, when this baby hits 88 miles per hour...
    you're gonna see some serious shit.	*/

    renderer = new THREE.WebGLRenderer(); /*	Rendererererers particles.	*/
    renderer.setPixelRatio(window.devicePixelRatio); /*	Probably 1; unless you're fancy.	*/
    renderer.setSize(WIDTH, HEIGHT); /*	Full screen baby Wooooo!	*/

    container.appendChild(renderer.domElement); /* Let's add all this crazy junk to the page.	*/

    /*	I don't know about you, but I like to know how bad my
    code is wrecking the performance of a user's machine.
    Let's see some damn stats!	*/

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    stats.domElement.style.right = '0px';
    container.appendChild(stats.domElement);

    /* Event Listeners */

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

  }

  function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();
  }

  function render() {
    var time = Date.now() * 0.00005;

    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;

    camera.lookAt(scene.position);

    for (i = 0; i < scene.children.length; i++) {

      var object = scene.children[i];

      if (object instanceof THREE.PointCloud) {

        object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
      }
    }

    for (i = 0; i < materials.length; i++) {

      color = parameters[i][0];

      h = 360 * (color[0] + time) % 360 / 360;
      materials[i].color.setHSL(h, color[1], color[2]);
    }

    renderer.render(scene, camera);
  }

  function onDocumentMouseMove(e) {
    mouseX = e.clientX - windowHalfX;
    mouseY = e.clientY - windowHalfY;
  }

  /*	Mobile users?  I got your back homey	*/

  function onDocumentTouchStart(e) {

    if (e.touches.length === 1) {

      e.preventDefault();
      mouseX = e.touches[0].pageX - windowHalfX;
      mouseY = e.touches[0].pageY - windowHalfY;
    }
  }

  function onDocumentTouchMove(e) {

    if (e.touches.length === 1) {

      e.preventDefault();
      mouseX = e.touches[0].pageX - windowHalfX;
      mouseY = e.touches[0].pageY - windowHalfY;
    }
  }

  function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
})();
</script>

### ¿Por qué utilizamos Three.js en ElSaltoWeb?

Los gráficos tridimensionales permiten crear experiencias inmersivas y únicas que elevan la calidad visual de un sitio web. Con Three.js, podemos integrar efectos como **humo**, **fuego**, o incluso **agua en movimiento** de una manera que sería imposible utilizando solo HTML y CSS. Estos efectos mejoran la interacción y hacen que la experiencia de usuario sea más memorable.

### Casos de Uso de Three.js en ElSaltoWeb

Algunos de los casos en los que aplicamos Three.js incluyen:

- **Simulaciones realistas:** Perfecto para mostrar productos en 3D o crear experiencias interactivas, como configuradores de productos.
- **Efectos visuales personalizados:** Como el ejemplo anterior de humo, pero también fuego, explosiones o partículas.
- **Visualizaciones de datos:** Para convertir datos complejos en gráficas visuales y dinámicas que facilitan su comprensión.

### ¿Cómo puedes beneficiarte de Three.js?

Si tu proyecto necesita elementos visuales impactantes, **Three.js** es una opción ideal. En **ElSaltoWeb**, podemos implementar cualquier tipo de efecto visual que necesites, desde elementos interactivos sencillos hasta complejas visualizaciones tridimensionales.

---

Para más información sobre cómo podemos integrar **Three.js** y crear experiencias tridimensionales para tu web, visita [www.elsaltoweb.es](http://www.elsaltoweb.es) o contáctanos directamente.
