import React, { useRef } from "react";

const Otp3 = () => {
  const arr = Array.from({ length: 4 }, () => useRef(""));
  const changeFocus = (e, i) => {
    if (e.target.value && i < arr.length - 1) {
      arr[i + 1].current.focus();
    } else if (!e.target.value && i > 0) {
      arr[i - 1].current.focus();
    }
  };
  return (
    <div>
      <div>
        {arr.map((data, i) => {
          return (
            <div key={i}>
              <input
                type="text"
                autoFocus={i == 0}
                ref={data}
                maxLength={1}
                className="border"
                onChange={(e) => changeFocus(e, i)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Otp3;
