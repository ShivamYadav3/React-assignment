import React, { useMemo, useRef, useState } from "react";

const OtpComp = ({
  value,
  numberOfInput,
  separator,
  isInputSecure,
  isInputNumber,
}) => {
  const inputField = Array.from({ length: numberOfInput });
  const [otp, setOtp] = useState([]);
  const [color, setColor] = useState(false);
  const otpRef = useRef([]);

  const inputType = useMemo(() => {
    if (isInputSecure) {
      return "password";
    }
    if (isInputNumber) {
      return "number";
    }
    return "text";
  }, [isInputSecure, isInputNumber]);

  const handleSubmit = () => {
    const out = otp.join("");
    if (out === value) {
      color && setColor(false);
      alert(out);
      return;
    }
    setColor(true);
  };

  const changeField = (e, i) => {
    if (e.key === "Backspace" && !e.target.value && i > 0) {
      otpRef.current[i - 1].focus();
      otpRef.current[i - 1].select();
    }
  };
  const changeFocus = (e, i) => {
    if (e.target.value && i < inputField.length - 1 && e.key !== "Backspace") {
      otpRef.current[i + 1].focus();
    }
    setOtp((prev) => [
      ...prev.slice(0, i),
      e.target.value,
      ...prev.slice(i + 1),
    ]);
  };

  return (
    <div className="flex gap-4">
      {inputField.map((data, i) => {
        return (
          <div key={i} className="flex">
            <input
              type={inputType}
              ref={(ref) => (otpRef.current[i] = ref)}
              className={`border ${color && `border-red-600`} w-9`}
              autoFocus={i == 0}
              maxLength={1}
              onChange={(e) => changeFocus(e, i)}
              onKeyDown={(e) => changeField(e, i)}
            />
            <span>{i < inputField.length - 1 && separator}</span>
          </div>
        );
      })}
      <div>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
};

export default OtpComp;
