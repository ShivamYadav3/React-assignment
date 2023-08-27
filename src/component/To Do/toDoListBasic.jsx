// import { useState } from "react";

// const ToDoList = () => {
//   let [input, setInput] = useState("");
//   const [list, setList] = useState([]);
//   const todo = (e) => {
//     setInput(() => {
//       input = e.target.value;
//     });
//   };
//   const render = () => {
//     setList((prevList) => {
//       return [...prevList, input];
//     });
//   };
//   return (
//     <>
//       <input type="text" name="todo" onChange={todo} />
//       <button onClick={render}>Add</button>
//       <p>To do List</p>
//       <div>
//         {list.map((data, index) => {
//           return <div key={index}>{data}</div>;
//         })}
//       </div>
//     </>
//   );
// };
// export default ToDoList;

import { useRef, useState } from "react";

function StopWatchByMe() {
  const [timer, setTimer] = useState(null);
  let ref = useRef();
  console.log(ref.current);
  function start() {
    if (ref.current) {
      clearInterval(ref.current);
    }
    ref.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 100);
  }

  function paush() {
    clearInterval(ref.current);
  }

  function reset() {
    setTimer(0);
    clearInterval(ref.current);
  }

  return (
    <div>
      <p>{timer}</p>

      <button onClick={start}>start</button>

      <button onClick={paush}>paush</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default StopWatchByMe;
