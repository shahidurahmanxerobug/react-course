// src/services/geminiService.js

/**
 * Gemini AI Service
 * Responsible for sending user messages to Gemini API
 * and returning AI responses.
 */

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

  const geminiApiKey = 'AIzaSyDamtq-Zoo1kzRuUjW2jYGW2dEssshJvgA';

/**
 * Sends a message to Gemini API and returns the bot reply
 * @param {string} message - User message
 * @returns {Promise<string>} - AI reply text
 */
export async function getGeminiReply(message) {
  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": geminiApiKey,
        },
        body: JSON.stringify({
          // The message sent to Gemini
          contents: [{ parts: [{ text: message }] }],
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`Gemini API error: ${res.status}`);
    }

    const data = await res.json(); // <-- must await json() after fetch
    console.log("Gemini raw response:", data);

    /**
     * Gemini sometimes returns nested objects:
     * - data.responses[0].responseText
     * - data.candidates[0].content[0].text
     */
    const reply =
      data?.responses?.[0]?.responseText ||
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No reply from AI";

    return reply;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Bot unavailable 🤖";
  }
}