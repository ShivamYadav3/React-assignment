import { useEffect, useState } from "react";

const StopWatch5 = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const handlePause = () => {
    setIsPaused(true);
  };
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <>
      <div>
        <div>Time</div>
        <div>
          <span>m{Math.floor(time / 6000)}:</span>
          <span>s{Math.floor((time / 100) % 60)}:</span>
          <span>ms{Math.floor(time % 100)}</span>
        </div>
        <div>
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};
export default StopWatch5;
