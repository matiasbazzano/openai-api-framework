const { generateResponse } = require('./apiRequest.js');
const assert = require('assert');

const query = 'What is the capital of Uruguay?';

describe('OpenAI API Tests', function () {
  it('Successful request - Status 200', async function () {
    const prompt = query;
    const response = await generateResponse(prompt);
    assert.strictEqual(response.status, 200);
  });
});
