import React from "react";
import { useState } from "react";
import Child1 from "./child1";
import { CounterProvider, DataProvider, NameProvider } from "./CreateContext";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Shivam");
  const data = "time pass";
  return (
    <div>
      <div>Parent</div>
      <div>count : {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
      <div>
        <button
          onClick={() =>
            setName((prev) => (prev === "Shivam" ? "Shivam Yadav" : "Shivam"))
          }
        >
          Name
        </button>
      </div>

      <CounterProvider value={count}>
        <NameProvider value={name}>
          <DataProvider value={data}>
            <Child1 />
          </DataProvider>
        </NameProvider>
      </CounterProvider>
    </div>
  );
};

export default Parent;
