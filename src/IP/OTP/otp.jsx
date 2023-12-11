import React, { useState, useRef } from "react";

const Otp = () => {
  const [inputField, setInputField] = useState(4);
  const [separator, setSeparator] = useState("-");
  const [value, setValue] = useState(Array(inputField).fill(""));
  const [type, setType] = useState("text");
  const [placeholder, setPlaceholder] = useState(Array(inputField).fill(""));
  const arr = Array.from({ length: inputField });
  console.log(value, arr);
  const inputRefs = useRef(Array(inputField).fill(null));

  const ChangeInput = (e, i) => {
    const updatedValue = [...value];
    updatedValue[i] = e.target.value;
    setValue(updatedValue);
    if (e.target.value && i < arr.length - 1 && e.key !== "Backspace") {
      inputRefs.current[i + 1].focus();
      return;
    }
  };

  const focusChanger = (e, i) => {
    if (e.key === "Backspace" && !e.target.value && i > 0) {
      inputRefs.current[i - 1].focus();
      inputRefs.current[i - 1].select();
    }
  };

  const clearOtp = () => {
    setValue(Array(inputField).fill(""));
  };

  const handleGetOtp = () => {
    alert(`OTP Text: ${value.join("")}`);
  };

  return (
    <div className="flex mx-8 mt-7">
      <div className="flex flex-col gap-8">
        <div className="text-2xl font-bold">React Otp Input</div>
        <div className="flex flex-col gap-8 font-semibold">
          <div>
            <div>
              <label htmlFor="">num of input</label>
            </div>
            <input
              type="number"
              className="border px-5 outline-none h-6 py-2"
              value={inputField}
              onChange={(e) => setInputField(e.target.value)}
            />
          </div>
          <div>
            <div>
              <label htmlFor="">separator</label>
            </div>
            <input
              type="text"
              className="border px-5 outline-none h-6 py-2 "
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
            />
          </div>
          <div>
            <div>
              <label htmlFor="">Value</label>
            </div>
            <input
              type="text"
              className="border px-5 outline-none h-6 py-2"
              maxLength={inputField}
              value={value.join("")}
              onChange={(e) => setValue(Array.from(e.target.value))}
            />
          </div>
          <div>
            <div>
              <label htmlFor="">Placeholder</label>
            </div>
            <input
              type="text"
              className="border px-5 outline-none h-6 py-2"
              maxLength={inputField}
              value={placeholder.join("")}
              onChange={(e) => setPlaceholder(Array.from(e.target.value))}
            />
          </div>
          <div>
            <div>
              <label htmlFor="">Input Type</label>
            </div>
            <select
              name="type"
              id="type"
              className="border px-5 outline-none h-8 py-1"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="text">text</option>
              <option value="number">number</option>
              <option value="password">Password</option>
              <option value="tel">tel</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center item-center w-[100vw] h-[100vh]">
        <div className="flex flex-col gap-10">
          <div className="text-3xl font-bold">Enter Verification code</div>
          <div className="flex gap-4">
            {arr.map((data, i) => (
              <div key={i} className="flex gap-4">
                <div>
                  <input
                    type={type}
                    // id={`input-${i}`}
                    className="border-2 w-8 h-8 rounded-md text-center outline-none"
                    value={value[i]}
                    maxLength={1}
                    placeholder={placeholder[i]}
                    autoFocus={i === 0}
                    onChange={(e) => ChangeInput(e, i)}
                    onKeyDown={(e) => focusChanger(e, i)}
                    ref={(inputRef) => (inputRefs.current[i] = inputRef)}
                  />
                </div>
                {i < arr.length - 1 && <div>{separator}</div>}
              </div>
            ))}
          </div>
          <div className="flex gap-8">
            <div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={clearOtp}
              >
                clear
              </button>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleGetOtp}
              >
                get otp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
