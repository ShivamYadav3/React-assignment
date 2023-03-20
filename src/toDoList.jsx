import { useState } from "react";

const ToDoList = () => {
  let [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const todo = (e) => {
    setInput(() => {
      input = e.target.value;
    });
  };
  const render = () => {
    setList((prevList) => {
      return [...prevList, input];
    });
  };
  return (
    <>
      <input type="text" name="todo" onChange={todo} />
      <button onClick={render}>Add</button>
      <p>To do List</p>
      <div>
        {list.map((data, index) => {
          return <div key={index}>{data}</div>;
        })}
      </div>
    </>
  );
};
export default ToDoList;
