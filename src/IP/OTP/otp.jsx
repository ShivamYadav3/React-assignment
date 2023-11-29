import React, { useRef, useState } from "react";

const Otp = () => {
  const [inputField, setInputField] = useState(4);
  const arr = Array.from({ length: inputField });
  const inputRefs = arr.map(() => useRef(null));
  const ChangeInput = (e, i) => {
    if (e.target.value && i < arr.length - 1) {
      inputRefs[i + 1].current.focus();
    } else if (!e.target.value && i > 0) {
      inputRefs[i - 1].current.focus();
    }
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
            <input type="text" className="border px-5 outline-none h-6 py-2 " />
          </div>
          <div>
            <div>
              <label htmlFor="">Value</label>
            </div>
            <input type="text" className="border px-5 outline-none h-6 py-2" />
          </div>
          <div>
            <div>
              <label htmlFor="">Placeholder</label>
            </div>
            <input type="text" className="border px-5 outline-none h-6 py-2" />
          </div>
          <div>
            <div>
              <label htmlFor="">Input text</label>
            </div>
            <input type="text" className="border px-5 outline-none h-6 py-2" />
          </div>
        </div>
      </div>
      <div className="flex justify-center item-center w-[100vw] h-[100vh]">
        <div className="flex flex-col gap-10">
          <div className="text-3xl font-bold">Enter Verification code</div>
          <div className="flex gap-8">
            {arr.map((data, i) => {
              return (
                <div key={i}>
                  <input
                    type="text"
                    ref={inputRefs[i]}
                    className="border-2 w-8 h-8 rounded-md text-center outline-none"
                    maxLength={1}
                    autoFocus={i == 0}
                    onChange={(e) => ChangeInput(e, i)}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex gap-8">
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                clear
              </button>
            </div>
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
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
