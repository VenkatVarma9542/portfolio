import React, { useState } from "react";
import { slides } from "./ProjectsCofig";
import "./Projects.css";
import right from "../../Accerts/Svg/RightArrow.svg";
import left from "../../Accerts/Svg/LeftArrow.svg";
const Projects = () => {
  const [index, setIndex] = useState(0);
  const [update, setUpdate] = useState(slides);
  const handelPrevios = () => {
    const array = [...update];
    const firstElement = array.pop();
    array.unshift(firstElement);
    setUpdate(array);
    console.log(update);
  };
  const handelNext = () => {
    const array = [...update];
    const firstElement = array.shift();
    array.push(firstElement);
    setUpdate(array);
    console.log(update);
  };
  const handleImgClick = (item) => {
    const array = [...update];
    const index = array.findIndex((obj) => obj.id === item.id);
    if (index !== -1) {
      const shiftedArray = array.slice(index).concat(array.slice(0, index));
      setUpdate(shiftedArray);
    } else {
      return array;
    }
  };
  const selectItem = slides[index];
  return (
    <div className="ps_main_container">
      <div className="ps_container">
        <div
          className="ps_bg_container"
          style={{
            backgroundImage: `url(${update[5].image})`,
          }}
        >
          <div className="ps_continer1">
            <div className="ps_title-cont">
              <h1 className="pc_heading">{update[0].name} </h1>
              <p className="pc_desc">{update[0].description} </p>
            </div>
            <div className="pc_img_cont">
              {update.map((item, index) => {
                return (
                  <img
                    onClick={() => handleImgClick(item)}
                    className="pc_img"
                    key={index}
                    src={item.image}
                    style={{
                      zIndex: slides.length - index, // Set z-index to stack images correctly
                      left: `${index * 7}rem`,
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="ps_continer2">
            <img
              style={{ left: "60rem" }}
              className="pc_nav"
              src={left}
              onClick={handelPrevios}
            />
            <img
              style={{ left: "70rem" }}
              className="pc_nav"
              src={right}
              onClick={handelNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
