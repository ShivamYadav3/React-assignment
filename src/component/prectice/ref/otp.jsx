import React from "react";
import { useRef } from "react";

const Otp = () => {
  const arr = Array.from({ length: 6 }, () => useRef(null));

  const ChangeInput = (e, i) => {
    if (e.target.value && i < arr.length - 1) {
      arr[i + 1].current.focus();
    } else if (!e.target.value && i > 0) {
      arr[i - 1].current.focus();
    }
  };

  return (
    <div>
      <div>Otp</div>
      {arr.map((data, i) => {
        return (
          <input
            key={i}
            type="text"
            maxLength={1}
            ref={data}
            className="border"
            autoFocus={i == 0}
            onChange={(e) => ChangeInput(e, i)}
          />
        );
      })}
    </div>
  );
};

export default Otp;
