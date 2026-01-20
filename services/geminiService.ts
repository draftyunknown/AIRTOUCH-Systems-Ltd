
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCoolingAdvice = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the AI Assistant for Airtouch Cooling Systems Ltd. 
        Provide expert, friendly advice on HVAC-R (Air Conditioning and Refrigeration). 
        Help users troubleshoot basic issues, choose the right system size for their room, 
        and provide maintenance tips. Keep answers concise and professional.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please contact our support team at 1-800-AIRTOUCH.";
  }
};
