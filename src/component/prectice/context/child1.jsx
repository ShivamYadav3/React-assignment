import React from "react";
import { useContext } from "react";
import { counter, dataContext, nameContext } from "./CreateContext";

const Child1 = () => {
  const count = useContext(counter);
  const name = useContext(nameContext);
  const data = useContext(dataContext);

  return (
    <div>
      <div>Child1</div>
      <div>Count : {count}</div>
      <div>Name : {name}</div>
      <div>Insta : {data}</div>
    </div>
  );
};

export default Child1;
