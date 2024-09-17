import React, { useState, useEffect } from "react";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_AI_KEY,
  dangerouslyAllowBrowser: true,
});

const useTranslate = (inputText, language) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const handleTranslate = async (sourceText) => {
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `You will be given a body of text. Your task is to complete the steps: 
            -Detect the language of the text
            - Translate the text into ${language}
            -Return only the translated text and nothing else.

            Here is the text:${inputText}.`,
            },
          ],
        });
        const data = response.choices[0].message.content;
        setTranslatedText(data);
      } catch (error) {
        console.error("Error translating text:", error);
      }
    };

    if (inputText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(inputText);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [inputText, language]);

  return translatedText;
};

export default useTranslate;
