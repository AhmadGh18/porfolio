import React from "react";
import "../css/projects.css";
const SingleProject = (props) => {
  return (
    <div className="singleproject">
      <img src={props.img} />
      <div className="projdesc">
        <h1>{props.title}</h1>
        <p>
          <span>Built with :</span> {props.tech}
        </p>

        <p>
          <span>Descreption : </span>
          {props.description}
        </p>
        <button className="button">Learn More</button>
      </div>
    </div>
  );
};

export default SingleProject;
