const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;
const apiEndpoint = "https://api.openai.com/v1/chat/completions";

async function generateResponse(prompt) {
  const requestBody = {
    model: 'gpt-3.5-turbo',
    max_tokens: 10,
    messages: [
      { role: 'system', content: 'You are a helpful assistant, who answers very few words.' },
      { role: 'user', content: prompt },
    ],
  };

  try {
    const response = await axios.post(apiEndpoint, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    const openAiResponse = response.data.choices[0].message.content;
    console.log('OpenAI Response:', { status: response.status, content: openAiResponse });

    return {
      status: response.status,
      content: response.data.choices[0].message.content,
    };
  } catch (error) {
    console.error('Error when requesting to OpenAI:', error.message);
    throw error;
  }
}

module.exports = { generateResponse };