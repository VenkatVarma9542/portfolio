import React from "react";
import "./Navbar.css";
import { NavList } from "./navConfig";
import logo from "../../Accerts/Svg/logo.svg";
export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        {NavList.map((item, index) => (
          <li key={index}>
            <h1>{item.title}</h1>
          </li>
        ))}
      </ul>
    </nav>
  );
}
