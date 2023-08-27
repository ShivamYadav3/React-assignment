import React, { useRef, useState } from "react";

function StopWatch5() {
  const [count, setCount] = useState(0);
  //   let count = useRef(0);
  let watch = useRef(null);
  console.log("rendar");

  const start = () => {
    if (watch.current) {
      console.log("o");
      clearInterval(watch.current);
    }
    watch.current = setInterval(() => setCount((prev) => prev + 1), 10);
  };
  const pause = () => {
    clearInterval(watch.current);
  };

  const Resat = () => {
    setCount(0);
    clearInterval(watch.current);
  };

  return (
    <div>
      <div>StopWatch</div>
      <div>{count / 100}</div>
      <div>
        <button onClick={start}>start</button>
        <br />
        <br />
        <button onClick={pause}>Pause</button>
        <br />
        <br />
        <button onClick={Resat}>Resat</button>
      </div>
    </div>
  );
}

export default StopWatch5;
