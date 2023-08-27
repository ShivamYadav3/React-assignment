import React from "react";
import { useState } from "react";

function ToDoMain() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const AddToDo = () => {
    setList((prev) => [...prev, { title: input, id: count }]);
    setCount(count + 1);

    setInput("");
  };

  const DeleteToDo = (id) => {
    setList((prev) => prev.filter((data) => data.id !== id));
  };

  const EditToDo = (data) => {
    setEditId(data.id);
    setEditText(data.title);
  };

  const SaveToDo = () => {
    setList((prev) => {
      return prev.map((data) => {
        if (data.id === editId) {
          return { ...data, title: editText };
        }
        return data;
      });
    });
    setEditId(null);
  };

  return (
    <div>
      <div>ToDo List</div>
      <input
        type="text"
        className="border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={AddToDo}>Add</button>

      <div>
        {list.map((data) => {
          if (data.id === editId) {
            return (
              <div key={data.id}>
                <div>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="border"
                  />
                  <button onClick={SaveToDo}>save</button>
                </div>
              </div>
            );
          }
          return (
            <div key={data.id}>
              <div className="flex gap-5">
                <span className="border p-2">{data.title}</span>
                <button onClick={() => EditToDo(data)} className="border p-2">
                  edit
                </button>
                <button
                  onClick={() => DeleteToDo(data.id)}
                  className="border p-2"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoMain;
