import { GoogleGenerativeAI } from "@google/generative-ai";
import { useQuery } from "@tanstack/react-query";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const useAi = (prompt: string) => {
  const generateContent = async () => {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    console.log(prompt);
    return result.response.text();
  }
  return useQuery({
    queryKey: [prompt],
    queryFn: generateContent,
    enabled: true,
  })
};

export default useAi;
