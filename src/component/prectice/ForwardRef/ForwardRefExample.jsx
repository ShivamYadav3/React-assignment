import React from "react";
import Child from "./Child";
import { useRef } from "react";

const ForwardRefExample = () => {
  const inputRef = useRef(null);
  const Toggle = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <div>ForwardRefExample</div>
      <Child ref={inputRef} />
      <button onClick={Toggle}>Toggle Focus</button>
    </div>
  );
};

export default ForwardRefExample;
