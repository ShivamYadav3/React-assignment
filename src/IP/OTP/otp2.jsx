import React, { useState, useRef } from "react";

const Otp2 = () => {
  const inputRef = useRef(null);
  const otpRef = useRef([]);
  const [flag, setFlag] = useState(true);
  const arr = Array.from({ length: inputRef.current });

  const handleChange = (e) => {
    inputRef.current = e.target.value;
  };

  console.log("done", inputRef.current);
  const fillOtp = (e, i) => {
    if (e.target.value && i < arr.length - 1) {
      otpRef.current[i + 1].focus();
    } else if (!e.target.value && i > 0) {
      otpRef.current[i - 1].focus();
    }
  };

  return (
    <div>
      <div>
        <input
          type="number"
          className="border outline-none"
          ref={inputRef}
          onChange={handleChange}
        />
        <button onClick={() => setFlag(!flag)}>submit</button>
      </div>
      <div>
        {arr.map((data, i) => {
          return (
            <input
              key={i}
              type="text"
              className="border"
              ref={(elem) => (otpRef.current[i] = elem)}
              autoFocus={i == 0}
              onChange={(e) => fillOtp(e, i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Otp2;

//
// import React, { useRef, useState } from "react";

// const OTPInput = () => {
//   // State to hold the number of inputs
//   const [inputCount, setInputCount] = useState(0);

//   // State to hold the inputs to render
//   const [inputsToRender, setInputsToRender] = useState(null);

//   // Ref to hold input references
//   const inputRefs = useRef([]);

//   // Update the inputs to render based on the input count
//   const onInputCountChange = () => {
//     setInputsToRender(new Array(Number(inputCount)).fill({}));
//   };

//   // Handle OTP input change
//   const onOTPChange = (e, index) => {
//     const currentRef = inputRefs.current[index];

//     // Set the value of the current input
//     currentRef.value = e.target.value;

//     // If the last input is reached, show success alert
//     if (inputsToRender.length === index + 1) {
//       alert("Success");
//       return;
//     }

//     // Focus on the next input
//     inputRefs.current[index + 1].focus();
//   };

//   return (
//     <div>
//       {/* Input count and button to trigger input rendering */}
//       <div className="header">
//         <div className="form-elements">
//           <p>Number of inputs:</p>
//           <input
//             type="number"
//             onChange={(e) => setInputCount(e.target.value)}
//           />
//         </div>
//         <div className="form-elements">
//           <button onClick={onInputCountChange}>Show Inputs</button>
//         </div>
//       </div>

//       {/* Container to render OTP inputs */}
//       <div className="container">
//         {inputsToRender &&
//           inputsToRender.map((_, index) => (
//             <input
//               key={index}
//               ref={(inputRef) => (inputRefs.current[index] = inputRef)}
//               onChange={(e) => onOTPChange(e, index)}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default OTPInput;

///bhai

// import { useRef, useEffect, useState, useMemo } from "react";

// const OtpComponent = ({
//   numberOfInput,
//   value,
//   hasErrored,
//   isInputSecure,
//   isInputNumber,
// }) => {
//   const inputRefs = useRef([]);
//   const [inputs, setInputs] = useState([]);

//   useEffect(() => {
//     if (!numberOfInput) {
//       //setInputs([]);
//       return;
//     }

//     const inputArr = [];
//     for (let i = 0; i < numberOfInput; i++) {
//       const inp = {};
//       inp.value = value.charAt(i) || "";
//       inputArr.push(inp);
//     }

//     setInputs(inputArr);
//   }, [numberOfInput, value]);

//   const inputType = useMemo(() => {
//     if (isInputSecure) return "password";
//     if (isInputNumber) return "number";
//     return "text";
//   }, [isInputSecure, isInputNumber]);

//   const handleInputChange = (index, e) => {
//     console.log("inputRefs: ", inputRefs, e);
//     if (e.keyCode === 8 && index !== 0) {
//       inputRefs.current[index].isDirty = true;
//       inputRefs.current[index].value = "";
//       inputRefs.current[index - 1].value = "";
//       inputRefs.current[index - 1].focus();
//       return;
//     }

//     const newIndex = index + 1;
//     if (inputRefs.current.length === newIndex) {
//       return;
//     }

//     inputRefs.current[newIndex].isDirty = true;
//     inputRefs.current[newIndex].focus();
//   };

//   return (
//     <div>
//       {inputs &&
//         inputs.map((_, index) => (
//           <input
//             key={index}
//             ref={(currentRef) => (inputRefs.current[index] = currentRef)}
//             defaultValue={
//               inputRefs?.current[index]?.isDirty
//                 ? inputRefs.current[index].value
//                 : _.value
//             }
//             type={inputType}
//             onKeyUp={(e) => handleInputChange(index, e)}
//             maxLength={1}
//             style={{
//               width: "40px",
//               marginRight: "10px",
//               outline: "none",
//               border: "1px solid silver",
//             }}
//           />
//         ))}
//       {hasErrored && <span style={{ color: "red" }}>Error!</span>}
//     </div>
//   );
// };

// OtpComponent.defaultProps = {
//   hasErrored: false,
//   isInputSecure: false,
//   isInputNumber: false,
// };

// export default OtpComponent;
