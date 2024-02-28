import React, { useState } from "react";
import "./Projects.css"; // Import your CSS file
import { slides } from "./ProjectsCofig";
export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main_container">
      <div className="container_Slider">
        <div id="slide">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`item ${index === currentIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="content">
                <div className="name">{slide.name}</div>
                <div className="des">{slide.description}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={prevSlide}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button id="next" onClick={nextSlide}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
