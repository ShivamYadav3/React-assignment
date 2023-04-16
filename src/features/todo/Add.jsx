import { useState } from "react";
const Add = (props) => {
  const [input, setInput] = useState("");
  const [list, setlist] = useState([]);
  const addToDo = () => {
    setlist((prevList) => [
      ...prevList,
      { title: input, id: new Date().getTime() },
    ]);
  };
  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={addToDo}>Add</button>
      <h1>Your ToDo</h1>
    </>
  );
};

export default Add;
