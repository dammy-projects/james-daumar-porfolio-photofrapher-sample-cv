
import { GoogleGenAI, Type } from "@google/genai";
import { VisionResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getArtisticVision = async (prompt: string): Promise<VisionResult> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `As James Daumar, a world-class avant-garde photographer known for cinematic lighting and emotional storytelling, describe how you would photograph this concept: "${prompt}". 
    Focus on your artistic process, technical choices (f-stop, shutter, lens), and the atmosphere you wish to evoke.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          concept: { type: Type.STRING, description: 'A creative title for the shot' },
          lighting: { type: Type.STRING, description: 'The lighting setup (e.g. golden hour, harsh shadows, Rembrandt)' },
          technique: { type: Type.STRING, description: 'Technical settings and equipment' },
          vibe: { type: Type.STRING, description: 'The emotional feeling of the image' },
        },
        required: ['concept', 'lighting', 'technique', 'vibe']
      }
    }
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    return {
      concept: "The Unseen Connection",
      lighting: "Soft directional light from an overcast sky.",
      technique: "85mm prime at f/1.8 to isolate the subject.",
      vibe: "Melancholic yet hopeful."
    };
  }
};
