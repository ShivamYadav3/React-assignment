import { useState } from "react";
import OtpComponent from "./OtpComponent";

const OTPApp = () => {
  const [otpValue, setOtpValue] = useState(["", "", "", ""]); // Initial state for 4 OTP digits
  const [hasError, setHasError] = useState(false);

  const handleOtpChange = (index, newValue) => {
    const newOtpValue = [...otpValue];
    newOtpValue[index] = newValue;
    setOtpValue(newOtpValue);
  };

  const handleVerify = () => {
    // Simulate a verification process, you can implement your own logic here
    const otpCode = otpValue.join("");
    const isValid = otpCode === "1234"; // Replace '1234' with your actual OTP code
    setHasError(!isValid);
    // Further actions based on verification success/failure
  };

  return (
    <div>
      <OtpComponent
        numberOfInput={4}
        value={"anki"}
        hasErrored={hasError}
        isInputSecure={false} // You can toggle this based on your requirement
        isInputNumber={false} // You can toggle this based on your requirement
      />
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default OTPApp;
