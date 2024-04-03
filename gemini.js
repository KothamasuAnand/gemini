const { GoogleGenerativeAI } = require("@google/generative-ai");



const genAI = new GoogleGenerativeAI("AIzaSyApzgxqXAOuy_4_9-VVa2fi36NimUyrv8k");

exports.getAiResponse = async (content) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(content);
  const response = await result.response;
  const text = response.text();
  return text;
};
