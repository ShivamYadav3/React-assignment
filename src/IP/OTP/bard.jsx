// import React, { useState, useRef } from "react";

// const DynamicOtpInput = ({
//   // Number of input fields
//   numberOfInputs = 6,
//   // Input type (e.g., 'text', 'number')
//   inputType = "number",
//   // Should auto focus on first field
//   autoFocus = true,
//   // Callback for onChange event
//   onChange,
// }) => {
//   const [otp, setOtp] = useState("");
//   const inputRefs = useRef([]);

//   const handleKeyUp = (index, event) => {
//     event.preventDefault(); // Prevent browser backspace behavior

//     const nextIndex = index + 1;
//     if (event.key === "Backspace") {
//       if (otp[index] === "") {
//         if (index > 0) {
//           // Clear current and previous input and shift focus
//           setOtp((prevOtp) => {
//             const newOtp = [...prevOtp];
//             newOtp[index] = "";
//             newOtp[index - 1] = "";
//             return newOtp.join("");
//           });
//           // Focus on previous input
//           inputRefs.current[index - 1].focus();
//         }
//       } else {
//         // Clear only the current input
//         setOtp((prevOtp) => {
//           const newOtp = [...prevOtp];
//           newOtp[index] = "";
//           return newOtp.join("");
//         });
//       }
//     } else if (event.key.length === 1 && inputType === "number") {
//       if (otp.length < numberOfInputs) {
//         // Update OTP state and shift focus if needed
//         setOtp((prevOtp) => {
//           const newOtp = [...prevOtp];
//           newOtp[index] = event.key;
//           if (nextIndex < numberOfInputs) {
//             inputRefs.current[nextIndex].focus();
//           }
//           return newOtp.join("");
//         });
//       }
//     } else if (event.key.length === 1 && inputType === "text") {
//       // Update OTP state and shift focus if needed
//       const newOtp =
//         otp.substring(0, index) + event.key + otp.substring(index + 1);
//       setOtp(newOtp);
//       if (nextIndex < numberOfInputs) {
//         inputRefs.current[nextIndex].focus();
//       }
//     }
//   };

//   const handleChange = (event) => {
//     // Update specific input without clearing others
//     setOtp((prevOtp) => {
//       const newOtp = [...prevOtp];
//       newOtp[event.target.id] = event.target.value;
//       return newOtp.join("");
//     });
//     if (onChange) {
//       onChange(event.target.value);
//     }
//   };

//   const inputFields = Array.from({ length: numberOfInputs }, (_, index) => (
//     <input
//       key={index}
//       ref={(ref) => (inputRefs.current[index] = ref)}
//       type={inputType}
//       maxLength={1}
//       value={otp[index] || ""}
//       id={index.toString()} // Unique ID for each input
//       onChange={handleChange}
//       onKeyUp={(event) => handleKeyUp(index, event)}
//       autoFocus={index === 0 && autoFocus}
//     />
//   ));

//   return <div className="dynamic-otp-input">{inputFields}</div>;
// };

// export default DynamicOtpInput;

import React, { useRef, useEffect } from "react";

const OTPInput = ({ length, type, onInputChange }) => {
  const inputRefs = Array.from({ length }, () => useRef(null));

  const handleInputChange = (index, value) => {
    if (value.length === 1 && index < length - 1) {
      inputRefs[index + 1].current.focus();
    }

    onInputChange(getOTPValue());
  };

  const handleInputBackspace = (index, event) => {
    if (event.key === "Backspace") {
      inputRefs[index].current.value = "";
      if (index > 0 && !event.target.value) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const getOTPValue = () => {
    return inputRefs.map((ref) => ref.current.value).join("");
  };

  useEffect(() => {
    // Focus the first input when the component mounts
    inputRefs[0].current.focus();
  }, []);

  return (
    <div>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type={type}
          maxLength="1"
          ref={inputRefs[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleInputBackspace(index, e)}
          style={{ width: "2em", marginRight: "0.5em" }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
