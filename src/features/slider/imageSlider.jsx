import React, { useEffect, useState } from "react";
import { images } from "./data";

const ImageSlider = () => {
  const [count, setCount] = useState(0);
  console.log("we");
  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>ImageSlider</div>
      <div>
        <div className="flex gap-8 text-center items-center">
          <div>
            <button onClick={() => setCount(count + 1)}>Next</button>
          </div>
          <div>
            <img src={images[count % images.length]} alt="" width="500px" />
          </div>
          <div>
            <button onClick={() => setCount(count - 1)}>Prev</button>
          </div>
        </div>
        <div>{count % images.length}</div>
      </div>
    </div>
  );
};

export default ImageSlider;
