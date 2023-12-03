import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const runtime = "edge";

export async function POST(req) {
  const { prompt } = await req.json();

  const response = await openai.completions.create({
    model: "text-davinci-003",
    stream: true,
    temperature: 0.75,
    max_tokens: 300,
    prompt: `Write a one paragraph recommendation about things to do in ${prompt}
`
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
