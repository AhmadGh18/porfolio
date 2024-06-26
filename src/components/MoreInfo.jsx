import React, { useState, useEffect, useRef } from "react";

const MoreInfo = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const moreInfoRef = useRef(null);

  // Function to increment counters gradually
  const incrementCounters = () => {
    let experienceCounter = 0;
    let projectsCounter = 0;
    let clientsCounter = 0;

    const interval = setInterval(() => {
      // Increment counters until they reach their respective values
      if (experienceCounter <= 2) {
        setExperience(experienceCounter);
        experienceCounter++;
      }
      if (projectsCounter <= 20) {
        setProjects(projectsCounter);
        projectsCounter++;
      }
      if (clientsCounter <= 20) {
        setClients(clientsCounter);
        clientsCounter++;
      }

      // Check if all counters have reached their target values and stop interval
      if (
        experienceCounter > 2 &&
        projectsCounter > 20 &&
        clientsCounter > 20
      ) {
        clearInterval(interval);
      }
    }, 100); // Adjust interval timing as needed
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of MoreInfo component is in view
      }
    );

    if (moreInfoRef.current) {
      observer.observe(moreInfoRef.current);
    }

    return () => {
      if (moreInfoRef.current) {
        observer.unobserve(moreInfoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      incrementCounters();
    }
  }, [isVisible]);

  return (
    <div className="moreinfo" ref={moreInfoRef}>
      <div className="morcontainer">
        <span>{experience}+ years of experience</span>
        <span>{projects}+ projects</span>
        <span>{clients}+ happy clients</span>
      </div>
    </div>
  );
};

export default MoreInfo;
