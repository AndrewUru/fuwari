---
title: Chat entrenado OpenAI
published: 2024-10-22
description: Aprende a crear tu propio Chat-Bot con OpenAI.
image: '' # Imagen local para ilustrar el tutorial
tags: ["ChatBot", "OpenAI", "JavaScript", "Desarrollo Web"]
category: "Inteligencia Artificial"
draft: false
lang: es
---

# Mi Entrada de Blog Interactiva

Esta es una entrada donde puedes interactuar con un chatbot que responde a tus preguntas sobre el contenido.

<div id="chatbot-container">
  <div id="chat-history"></div>
  <input id="user-input" type="text" placeholder="Escribe un mensaje..." />
  <button id="send-button">Enviar</button>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const chatHistory = document.getElementById('chat-history');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    async function sendMessage() {
      const message = userInput.value.trim();
      if (message === '') return;

      // Mostrar el mensaje del usuario en el historial
      const userMessageDiv = document.createElement('div');
      userMessageDiv.textContent = 'Tú: ' + message;
      chatHistory.appendChild(userMessageDiv);

      // Limpiar el campo de entrada
      userInput.value = '';

      // Llamar a la API de OpenAI
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        });

        const data = await response.json();
        const botMessageDiv = document.createElement('div');
        botMessageDiv.textContent = 'Bot: ' + data.response;
        chatHistory.appendChild(botMessageDiv);

      } catch (error) {
        console.error('Error al conectarse a la API:', error);
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.textContent = 'Bot: Hubo un error al procesar tu solicitud.';
        chatHistory.appendChild(errorMessageDiv);
      }
    }

    // Evento al hacer clic en el botón de enviar
    sendButton.addEventListener('click', sendMessage);

    // Evento al presionar Enter
    userInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  });
</script>

<style>
  #chatbot-container {
    max-width: 500px;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  #chat-history {
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 10px;
    padding: 10px;
    background: #f9f9f9;
  }
  #user-input {
    width: calc(100% - 60px);
    padding: 8px;
    margin-right: 5px;
  }
  #send-button {
    padding: 8px;
  }
</style>

