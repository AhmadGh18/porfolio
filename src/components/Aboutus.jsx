import React from "react";
import "../css/aboutus.css";
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import "../css/Test.css";
import Laravel from "../assets/laravel.svg";
import Talwind from "../assets/tailwind-css.svg";
import git from "../assets/github.svg";
import mysql from "../assets/mysql-original-wordmark.svg";
import Mate from "../assets/materialui-original.svg";
import php from "../assets/file-type-php.svg";
const Aboutus = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <center>
        <h1 style={{ color: "white" }}>Professentianl in</h1>
      </center>
      <div className="aboutus">
        <a
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            justifyConten: "center",
            alignItems: "center",
          }}
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
          Vite
        </a>
        <a
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            justifyConten: "center",
            alignItems: "center",
          }}
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
          React
        </a>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            justifyConten: "center",
            alignItems: "center",
          }}
        >
          <img src={Laravel} alt="laravel" className="logo laravel" />
          Laravel
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            justifyConten: "center",
            alignItems: "center",
          }}
        >
          <img src={Mate} alt="Material UI" className="logo Material" />
          Material UI
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            justifyConten: "center",
            alignItems: "center",
          }}
        >
          <img src={Talwind} alt="Talwind" className="logo Talwind" />
          Talwind
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            justifyConten: "center",
            alignItems: "center",
          }}
        >
          <img src={git} alt="git" className="git" />
          Git & github
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            justifyConten: "center",
            alignItems: "center",
          }}
        >
          <img src={mysql} alt="mysql" className="mysql logo" />
          Mysql
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            justifyConten: "center",
            alignItems: "center",
          }}
        >
          <img src={php} alt="php" className="php logo" />
          PHP
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
