import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import type { ICounterProps } from "./components/Counter";

type RestViewType = Pick<ICounterProps, "count">;

const RestView = ({ count }: RestViewType) => {
  return <div>剩余:{count} 秒</div>;
};

function App() {
  const [count, setCount] = useState(5);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Counter
        count={count}
        endView={"已结束"}
        restView={(count) => <RestView count={count} />}
      />
    </>
  );
}

export default App;
