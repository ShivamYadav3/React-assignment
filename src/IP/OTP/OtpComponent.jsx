import { useRef, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";

const OtpComponent = ({
  numberOfInput,
  value,
  hasErrored,
  isInputSecure,
  isInputNumber,
}) => {
  const inputRefs = useRef([]);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    if (!numberOfInput) {
      //setInputs([]);
      return;
    }

    const inputArr = [];
    for (let i = 0; i < numberOfInput; i++) {
      const inp = {};
      inp.value = value.charAt(i) || "";
      inputArr.push(inp);
    }

    setInputs(inputArr);
  }, [numberOfInput, value]);

  const inputType = useMemo(() => {
    if (isInputSecure) return "password";
    if (isInputNumber) return "number";
    return "text";
  }, [isInputSecure, isInputNumber]);

  const handleInputChange = (index, e) => {
    console.log("inputRefs: ", inputRefs, e);

    if (isInputNumber) {
      // Allow numbers only
      if (!(e.keyCode >= 48 && e.keyCode <= 57)) {
        console.log("Only numbers are allowed");
        return;
        // Add your code logic here
      }
    } else {
      // Allow characters
      if (
        !(
          e.keyCode === 8 ||
          (e.keyCode >= 65 && e.keyCode <= 90) ||
          (e.keyCode >= 97 && e.keyCode <= 122)
        )
      ) {
        console.log(
          "The pressed key is neither a backspace nor a character A-Z or a-z"
        );
        return;
        // Add your code logic here
      }
    }

    if (index === 0 && e.target.value === "") {
      inputRefs.current[index].focus();
      inputRefs.current[index].value = "";
      return;
    }

    if (e.keyCode === 8 && index !== 0) {
      if (e.target.value === "") {
        inputRefs.current[index].isDirty = true;
        inputRefs.current[index - 1].focus();
        return;
      }
      inputRefs.current[index + 1].isDirty = true;
      //inputRefs.current[index + 1].value = e.target.value;
      inputRefs.current[index].focus();
      return;
    }

    const newIndex = index + 1;
    if (inputRefs.current.length === newIndex) {
      return;
    }

    inputRefs.current[newIndex].isDirty = true;
    inputRefs.current[index + 1].value = e.key;
    inputRefs.current[newIndex].focus();
  };

  return (
    <div>
      {inputs &&
        inputs.map((_, index) => (
          <input
            key={index}
            ref={(currentRef) => (inputRefs.current[index] = currentRef)}
            defaultValue={
              inputRefs?.current[index]?.isDirty
                ? inputRefs.current[index].value
                : _.value
            }
            type={inputType}
            onKeyUp={(e) => handleInputChange(index, e)}
            maxLength={1}
            style={{
              width: "40px",
              marginRight: "10px",
              outline: "none",
              border: "1px solid silver",
            }}
          />
        ))}
      {hasErrored && <span style={{ color: "red" }}>Error!</span>}
    </div>
  );
};

OtpComponent.propTypes = {
  numberOfInput: PropTypes.number.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  hasErrored: PropTypes.bool,
  isInputSecure: PropTypes.bool,
  isInputNumber: PropTypes.bool,
};

OtpComponent.defaultProps = {
  hasErrored: false,
  isInputSecure: false,
  isInputNumber: false,
};

export default OtpComponent;

// Parent Component
