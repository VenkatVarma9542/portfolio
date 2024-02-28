import React, { useState, useEffect } from "react";
import "./Hello.css";

const wordsConfig = [
  "Hello", // English
  "Bonjour", // French
  "Hola", // Spanish
  "Ciao", // Italian
  "Hallo", // German
  "你好", // Chinese (Simplified)
  "こんにちは", // Japanese
  "నమస్తే", // Telugu (Namaste)
  "ഹലോ", // Malayalam
  "வணக்கம்", // Tamil
];

export const Hello = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [nextWordIndex, setNextWordIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;

    const initializeSynth = () => {
      setSynth(synth);
    };

    if (!synth) {
      synth.onvoiceschanged = initializeSynth;
    } else {
      initializeSynth();
    }

    const intervalId = setInterval(() => {
      if (!isHovered) {
        setCurrentWordIndex(
          (prevIndex) => (prevIndex + 1) % wordsConfig.length
        );
        setNextWordIndex((prevIndex) => (prevIndex + 1) % wordsConfig.length);
      }
    }, 500); // Change word every 0.5 seconds

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  const handleClick = () => {
    if (synth) {
      console.log("specked");
      const utterance = new SpeechSynthesisUtterance(
        wordsConfig[currentWordIndex]
      );

      // Specify voice
      const voices = synth.getVoices();
      utterance.voice = voices.find(
        (voice) => voice.name === "Google UK English Female"
      ); // Replace with desired voice name

      // Specify pronunciation technique
      utterance.pitch = 1; // Range from 0 to 2, default is 1
      utterance.rate = 1; // Range from 0.1 to 10, default is 1
      utterance.volume = 1; // Range from 0 to 1, default is 1

      synth.speak(utterance);
    }
  };

  return (
    <>
      <div
        className="word-animation"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <div className="current-word" onClick={handleClick}>
          {wordsConfig[currentWordIndex]}
        </div>
        <div className="next-word">{wordsConfig[nextWordIndex]}</div>
      </div>
    </>
  );
};
