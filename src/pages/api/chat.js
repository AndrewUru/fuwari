import { json } from '@astrojs/json';

export async function post({ request }) {
  const { message } = await request.json();

  try {
    // Llamar a la API de OpenAI
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'text-davinci-003', // Puedes cambiar el modelo a otro disponible si lo deseas
        prompt: message,
        max_tokens: 150,
        temperature: 0.7, // Ajusta la creatividad del bot
      }),
    });

    const data = await response.json();

    return json({
      response: data.choices[0].text,
    });
  } catch (error) {
    console.error('Error conectando con OpenAI:', error);
    return new Response(JSON.stringify({ error: 'Error conectando con OpenAI' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
