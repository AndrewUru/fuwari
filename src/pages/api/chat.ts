import OpenAI from "openai";
import dotenv from "dotenv";

// Cargar variables de entorno desde un archivo .env
dotenv.config();

// Crear una instancia del cliente OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Asegúrate de tener la clave definida en .env
});

// Ejemplo de función para interactuar con la API
async function main() {
  try {
    const assistant = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: "Hello!" }],
    });

    console.log("Respuesta del asistente:", assistant.data.choices[0].message.content);
  } catch (error) {
    console.error("Error al interactuar con la API:", error);
  }
}

main();
