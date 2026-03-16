import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyBXZTPitfkapWKsg29o6Ey5ay4JlXN6BnY"; // 🔴 DO NOT EXPOSE API KEYS PUBLICLY
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);

    if (result && result.response) {
      return result.response.text(); // ✅ Properly returning the AI response
    } else {
      console.error("Empty response from AI model");
      return null;
    }
  } catch (error) {
    console.error("Error in Gemini API:", error);
    return null;
  }
}

export default run;
