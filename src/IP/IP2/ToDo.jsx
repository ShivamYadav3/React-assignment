import { useReducer } from "react";
const initialState = { todo: ["item1", "item2", "item3"], input: "" };
const reducer = (state, { type, value }) => {
  switch (type) {
    case "add": {
      return { ...state, todo: [...state.todo, state.input] };
    }
    case "input": {
      return { ...state, input: value };
    }
    case "default": {
      return;
    }
  }
};

const ToDo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <>
      <div>
        <div>List</div>
        <input
          type="text"
          className="border outline-none"
          value={state.input}
          onChange={(e) => dispatch({ type: "input", value: e.target.value })}
        />
        <button onClick={(e) => dispatch({ type: "add" })}>add</button>
        <div>
          {state.todo.map((item, index) => {
            return (
              <div key={index}>
                <div>{item}</div>
                <div>
                  <button>edit</button>
                  <button>delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ToDo;
