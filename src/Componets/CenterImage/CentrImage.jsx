import React from "react";
import "./CentrImage.css";
import mainImg from "../../Accerts/Png/logoimg.png";
export const CentrImage = () => {
  return (
    <div className="circle">
      <img className="circle-image" src={mainImg} alt="mainImage" />
    </div>
  );
};
