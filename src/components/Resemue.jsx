import React, { useEffect, useRef, useState } from "react";
import "../css/resmue.css"; // Ensure correct CSS import path

const Resume = () => {
  const boxesRef = useRef([]); // useRef for tracking DOM elements
  const [isVisible, setIsVisible] = useState([false, false, false, false]); // State to track visibility of each section
  const projects = [
    { id: "education", index: 0 },
    { id: "master-degree", index: 1 },
    { id: "full-stack", index: 2 },
    { id: "frontend", index: 3 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const updatedVisibility = projects.map((project) => {
        const element = boxesRef.current[project.index];
        if (!element) return false;
        const bounding = element.getBoundingClientRect();
        // Check if at least 50% of the project is visible
        return (
          bounding.top + bounding.height / 2 >= 0 &&
          bounding.bottom - bounding.height / 2 <= window.innerHeight
        );
      });
      setIsVisible(updatedVisibility);
    };

    // Trigger initial check on mount
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="res">
      <div className="container">
        <main className="row">
          <section className="col">
            <header className="title">
              <h2>EDUCATION</h2>
            </header>

            <div className="contents">
              <div
                className={`box ${isVisible[0] ? "show" : ""}`}
                ref={(el) => (boxesRef.current[0] = el)}
              >
                <h4>2018 - 2022</h4>
                <h3>High School Degree</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div
                className={`box ${isVisible[1] ? "show" : ""}`}
                ref={(el) => (boxesRef.current[1] = el)}
              >
                <h4>2018 - 2022</h4>
                <h3>Master Degree</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </section>

          <section className="col">
            <header className="title">
              <h2>EXPERIENCE</h2>
            </header>

            <div className="contents">
              <div
                className={`box ${isVisible[2] ? "show" : ""}`}
                ref={(el) => (boxesRef.current[2] = el)}
              >
                <h4>2018 - 2022</h4>
                <h3>Full-Stack Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div
                className={`box ${isVisible[3] ? "show" : ""}`}
                ref={(el) => (boxesRef.current[3] = el)}
              >
                <h4>2018 - 2022</h4>
                <h3>Frontend Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;
