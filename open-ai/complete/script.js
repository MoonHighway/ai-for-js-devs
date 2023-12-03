import { OpenAI } from "langchain/llms/openai";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const llm = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.75
});

rl.question(
  "What do you want to ask the robots? 🤖  ",
  async (question) => {
    let res = await llm.predict(question);
    console.log(res);
    rl.close();
  }
);
