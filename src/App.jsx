import OtpComp from "./IP/OTP/otpComp";

function App() {
  return (
    <div>
      <OtpComp
        value="1234"
        numberOfInput={4}
        separator="-"
        hasErrored={false}
        isInputSecure={false}
        isInputNumber={false}
      />
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// // import OTPInput from "./OTPInput";
// import DynamicOtpInput from "./IP/OTP/bard";

// const App = () => {
//   const [otpValue, setOtpValue] = useState("");

//   const handleOTPChange = (value) => {
//     setOtpValue(value);
//     // Do something with the OTP value, like sending it to a server for verification
//   };

//   return (
//     <div>
//       <h1>Dynamic OTP Component</h1>
//       <DynamicOtpInput length={6} type="text" onInputChange={handleOTPChange} />
//       <p>Entered OTP: {otpValue}</p>
//     </div>
//   );
// };

// export default App;
