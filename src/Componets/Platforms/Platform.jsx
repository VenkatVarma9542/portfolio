import React from "react";
import git from "../../Accerts/Svg/github.svg";
import linkedin from "../../Accerts/Svg/linkedin.svg";
import "./Platform.css";
import { Pointier } from "../Pointer/Pointer";

export const Platform = () => {
  return (
    <>
      <Pointier />
      <h1 className="name">
        {" "}
        Venkat <br />
        Barapati
      </h1>
      <p>{"< Front-End Devoloper />"}</p>
      <div className="container_p">
        <img href="/" src={git} alt="git" />
        <img href="/" src={linkedin} alt="Linkedin" />
      </div>
    </>
  );
};
