import React from "react";
import { useRef } from "react";
import { useState } from "react";

function StopWatch6() {
  const [count, setCount] = useState(0);
  const watcher = useRef(null);

  const Start = () => {
    if (watcher.current) {
      clearInterval(watcher.current);
      setCount(0);
    }
    watcher.current = setInterval(() => setCount((prev) => prev + 1), 10);
  };

  const pause = () => {
    clearInterval(watcher.current);
  };

  const Resat = () => {
    clearInterval(watcher.current);
    setCount(0);
  };
  return (
    <div>
      <div>StopWatch</div>
      <div>{count / 100}</div>
      <div>
        <button onClick={Start}>start</button>
      </div>
      <div>
        <button onClick={pause}>pause</button>
      </div>
      <div>
        <button onClick={Resat}>resat</button>
      </div>
    </div>
  );
}

export default StopWatch6;
