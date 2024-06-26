import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";
import Aboutus from "./components/Aboutus";
import Projects from "./components/Projects";
import Resemue from "./components/Resemue";
import MoreInfo from "./components/MoreInfo";
import Contactus from "./components/Contactus";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <Navbar />

        <Personal />
        <Aboutus />
        <Projects />
        <Resemue />
        <MoreInfo />
        <Contactus />
      </div>
    </>
  );
}

export default App;
