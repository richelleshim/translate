"use client";

import InputBox from "@/components/InputBox";
import LanguageDropDown from "@/components/LanguageDropDown";
import useTranslate from "@/hooks/useTranslate";
import { ChangeEvent, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton, Snackbar, Alert } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const handleAudioPlayback = (text: string) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [languages] = useState<string[]>([
    "English",
    "Spanish",
    "Chinese",
    "Korean",
    "Arabic",
    "German",
    "Japanese",
    "French",
    "Russian",
    "Portuguese",
    "Hindi",
    "Italian",
    "Bengali",
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const translatedText = useTranslate(inputText, selectedLanguage);

  const handleClose = () => {
    setIsCopied(false);
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  
  return (
    <div className="w-full h-[100vh] bg-black flex items-center justify-center p-6">
      <div className="flex flex-col items-center text-center w-full max-w-4xl p-6 rounded-lg">
        <h2 className="font-extrabold text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          TranslateMe!{" "}
        </h2>
        <h1 className="text-gray-300 mb-6 text-xl">
          Communication Across Borders
        </h1>
        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="flex flex-col space-y-3 p-4 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/30 h-[300px] w-full">
            <InputBox
              placeholder="Enter your text here"
              type="input"
              value={inputText}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                setInputText(e.target.value);
              }}
            />
            <div className="flex justify-between items-center">
              <IconButton onClick={() => handleAudioPlayback(inputText)}>
                <VolumeUpIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
              <span className="text-sm text-gray-400">
                {inputText.length} / 2000
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-3 p-4 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/30 h-[300px] w-full">
            <InputBox
              placeholder="Translated text will appear here"
              type="output"
              value={translatedText}
              onChange={() => {}}
            />
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-start">
                <LanguageDropDown
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                  languageList={languages}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <IconButton onClick={() => handleAudioPlayback(translatedText)}>
                  <VolumeUpIcon sx={{ color: "#FFFFFF" }} />
                </IconButton>
                <IconButton onClick={handleCopyToClipboard}>
                  <ContentCopyIcon sx={{ color: "#FFFFFF" }} />
                </IconButton>
                <Snackbar
                  open={isCopied}
                  autoHideDuration={3000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Text copied to clipboard!
                  </Alert>
                </Snackbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
