import { createPartFromUri, createUserContent, GoogleGenAI } from "@google/genai";
export default async function handler(req, res) {

    const { query } = req.body;

    const ai = new GoogleGenAI({});

    const dataResponse = await fetch('./data.json');
    const data = await dataResponse.json();


    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
        Query: ${query}
        Return: A single concise, natural, accurate answer (1–3 short paragraphs). If the draft lacks necessary info, return exactly: Sorry! I am unable to understand your question.\n Please contact Ali Amir directly at muhammadaliamir24@gmail.com.
        `,
        config: {
            thinkingConfig: {
                thinkingBudget: 0, // Disables thinking
            },
            temperature: 0.2,
            systemInstruction: `You are a personal ai assistant of Ali Amir and is hosted on his website. Your primary task is to assist website visitors by answering their queries on Ali Amir\'s behalf. Here is all the data about Ali Amir. DATA: ${data}\nUse ONLY given information. Do NOT invent facts. Output ONLY the final answer text — no JSON, no commentary, nothing else.`
        }
    });

    res.status(200).json({ message: response.text });
}