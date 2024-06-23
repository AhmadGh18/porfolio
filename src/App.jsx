import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Personal from "./components/Personal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <Navbar />

        <Personal />
      </div>
    </>
  );
}

export default App;
