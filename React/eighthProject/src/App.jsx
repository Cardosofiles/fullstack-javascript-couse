import useCounter from "./hooks/useCounter";

// Regra 01: Onde usar os hooks
// Regra 02: A ordem dos hooks

export default function App() {
  const counter = useCounter();

  return (
    <>
      <h1 className="text-3xl">Vite + React</h1>
      <div className="">
        <button onClick={counter.increment}>count is {counter.count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="">Click on the Vite and React logos to learn more</p>
    </>
  );
}
