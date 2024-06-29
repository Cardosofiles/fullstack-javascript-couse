import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles/output.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="border border-white h-9 w-28 "
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>

      <h1 className="text-yellow-400">&copy; João Batista | 2024</h1>
    </>
  );
}

export default App;
