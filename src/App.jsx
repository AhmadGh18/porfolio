import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";
import Aboutus from "./components/Aboutus";
import Projects from "./components/Projects";
import Resemue from "./components/Resemue";

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
      </div>
    </>
  );
}

export default App;
