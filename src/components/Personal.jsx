import React from "react";
import { FaDatabase, FaReact } from "react-icons/fa";
const Personal = () => {
  return (
    <div className="infocontainer">
      <div className="peronal">
        <h2>Ahmad Ghzayel</h2>
        <h1 className="textInfo">
          <span className="web">Web &</span> <br />
          <span>Mobile developer</span>
        </h1>
        <p>
          A well-diversified portfolio should include equities, bonds, and
          alternative assets <br />s to balance risk and optimize long-term
          returns
        </p>
        <div
          className="belowtxt"
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="first"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FaDatabase
              className="iconma"
              style={{ color: "#f16a6a", marginRight: "8px" }}
            />
            Backend
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaReact
              className="iconma"
              style={{ color: "#00FFFF", marginRight: "8px" }}
            />
            Frontend
          </div>
        </div>

        <div>
          <button className="cta">
            <span>Explore more</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div className="imghold"></div>
    </div>
  );
};

export default Personal;
