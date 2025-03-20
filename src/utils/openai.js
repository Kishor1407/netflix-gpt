// import OpenAI from 'openai';
// import { openAIKey } from './constant';

// const openai = new OpenAI({
//   apiKey: openAIKey, // This is the default and can be omitted
//   dangerouslyAllowBrowser:true,
// }); 

// export default openai;


import { GoogleGenerativeAI } from "@google/generative-ai";
import { googleAIKey } from "./constant"; 
console.log(googleAIKey);
const genAI = new GoogleGenerativeAI(googleAIKey);

const geminiai = () => {
  return genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
};

export default geminiai;
