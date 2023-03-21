import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  outline: none;
  width: 291px;
  height: 20px;
`;
const Button = styled.button`
  width: 80px;
  height: 45px;
  border: 1px solid silver;
  margin-left: 30px;
  text-align: center;
`;
const Div = styled.div`
  width: 550px;
  height: 45px;
  background-color: aqua;
  margin-top: 30px;
  border: 1px solid silver;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;
const Span = styled.span`
  width: 300px;
  display: inline-block;
`;
const Head = styled.h1`
  color: red;
`;

const ToDoList = () => {
  let [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editing, setEditing] = useState({});
  const render = () => {
    setList((prevList) => [
      ...prevList,
      { title: input, id: new Date().getTime() },
    ]);
    setInput("");
  };
  const Remove = (id) =>
    setList((prevState) => prevState.filter((data) => data.id !== id));

  const edit = (e) => {
    const { value } = e.target;
    console.log(value);
    setEditing((prevState) => {
      return {
        ...prevState,
        title: value,
      };
    });
  };

  const onUpdate = () => {
    setList((prevState) =>
      prevState.map((data) => {
        if (data.id === editing.id) {
          return editing;
        }
        return data;
      })
    );
    setEditing({});
  };
  console.log("list", list);
  return (
    <>
      <div>
        <Input
          type="text"
          name="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={render}>Add</Button>
      </div>
      <Head>To do List</Head>
      <div>
        {list.map((data, index) => {
          return editing.id === data.id ? (
            <Div key={data.id}>
              <Input type="text" value={editing.title} onChange={edit} />
              <Button onClick={onUpdate}>save</Button>
            </Div>
          ) : (
            <Div key={data.id}>
              <Span>{data.title}</Span>
              <Button onClick={() => Remove(data.id)}>Delete</Button>
              <Button onClick={() => setEditing(data)}>Edit</Button>
            </Div>
          );
        })}
      </div>
    </>
  );
};
export default ToDoList;
