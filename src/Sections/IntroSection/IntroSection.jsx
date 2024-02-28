import React, { useState, useEffect } from "react";
import { Waving } from "../../Componets/Waving/waving";
import "./IntroSection.css";
import { Hello } from "../../Componets/Hello/Hello";
import { CentrImage } from "../../Componets/CenterImage/CentrImage";
import { Platform } from "../../Componets/Platforms/Platform";

const wordsConfig = ["Hello", "Bonjour", "Hola", "Ciao", "Hallo"];

export const IntroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsConfig.length);
    }, 500); // Change word every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-container">
      <div className="container">
        <Waving />
        <Hello />
        <div>
          <p>
            <span>{"{"} </span> hover to stop ,<br /> click to hear greeting
            <span>{"}"}</span>
          </p>
        </div>
      </div>
      <div className="Imagesection">
        <CentrImage />
      </div>
      <div>
        <Platform />
      </div>
    </div>
  );
};
