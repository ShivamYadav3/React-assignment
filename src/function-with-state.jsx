import { useState } from "react";

function StateWithFC() {
  const [counter, setCounter] = useState(0);

  console.log("Re-Render: ", counter);
  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
}

export default StateWithFC;
