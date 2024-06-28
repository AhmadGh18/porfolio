// import React from "react";
// import "../css/projects.css";
// import SingleProject from "./SingleProject";
// import bites from "../assets/dashboard.png";
// import Hiring from "../assets/Screenshot (66).png";
// const Projects = () => {
//   const projects = [
//     {
//       id: "1",
//       title: "Bites, Restaurant find app",
//       Images: bites,
//       tech: "laravel,react,mysql,talwind,chartjs and google map",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla nec lectus mi. Vestibulum fringilla mauris ut magna ultricesvel vehicula enim posuere. Proin volutpat quam nec sapien fermentum,  non congue mauris fringilla. Duis ullamcorper venenatis ligula, sit amet yyyeugiat. Nunc eget augue eget orci volutpat gravida in vel erat.",
//     },
//     {
//       id: "2",
//       title: "Hiring ",
//       Images: Hiring,
//       tech: "laravel,react,mysql",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla nec lectus mi. Vestibulum fringilla mauris ut magna ultricesvel vehicula enim posuere. Proin volutpat quam nec sapien fermentum,  non congue mauris fringilla. Duis ullamcorper venenatis ligula, sit amet yyyeugiat. Nunc eget augue eget orci volutpat gravida in vel erat.",
//     },
//   ];
//   return (
//     <div className="projects">
//       <center>
//         <h1>Projects</h1>
//       </center>
//       <div className="">
//         {projects.map((el) => {
//           return (
//             <SingleProject
//               key={el.id}
//               title={el.title}
//               img={el.Images}
//               tech={el.tech}
//               description={el.description}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React, { useEffect, useMemo, useState } from "react";
import "../css/projects.css";
import SingleProject from "./SingleProject";
import bites from "../assets/dashboard.png";
import Hiring from "../assets/Screenshot (66).png";

const Projects = () => {
  const projects = useMemo(
    () => [
      {
        id: "1",
        title: "Bites, Restaurant find app",
        image: bites,
        tech: "laravel, react, mysql, tailwind, chartjs and google map",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lectus mi. Vestibulum fringilla mauris ut magna ultrices, vel vehicula enim posuere. Proin volutpat quam nec sapien fermentum, non congue mauris fringilla. Duis ullamcorper venenatis ligula, sit amet yyyeugiat. Nunc eget augue eget orci volutpat gravida in vel erat.",
      },
      {
        id: "2",
        title: "Hiring",
        image: Hiring,
        tech: "laravel, react, mysql",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lectus mi. Vestibulum fringilla mauris ut magna ultrices, vel vehicula enim posuere. Proin volutpat quam nec sapien fermentum, non congue mauris fringilla. Duis ullamcorper venenatis ligula, sit amet yyyeugiat. Nunc eget augue eget orci volutpat gravida in vel erat.",
      },
    ],
    []
  );
  const [isVisible, setIsVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const updatedVisibility = projects.map((project) => {
        const element = document.getElementById(project.id);
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
  }, [projects]);

  return (
    <div className="projects">
      <center>
        <h1>Projects</h1>
      </center>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id={project.id}
            className={`singleproject ${isVisible[index] ? "visible" : ""}`}
          >
            <img src={project.image} alt={project.title} />
            <div className="projdesc">
              <h1>{project.title}</h1>
              <p>
                <span>Built with:</span> {project.tech}
              </p>
              <p>
                <span>Description:</span> {project.description}
              </p>
              <button className="button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
