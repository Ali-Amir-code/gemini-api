import { GoogleGenAI } from "@google/genai";
export default async function handler(req, res) {

    const ai = new GoogleGenAI({});

    async function main() {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "How does AI work?",
        });
        return response.text;
    }

    const response = await main();

    res.status(200).json({ message: response });    
}