import { useState } from "react";
import ButtonBody from "./ButtonBody";
import ButtonStyle from "./ButtonStyle";

const Button = () => {
  let [Input, setInput] = useState("Click Me");
  return (
    <>
      <div>
        <h1>Button</h1>
        <div>
          <input
            type="text"
            value={Input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <br />
        <br />
        <div>
          <ButtonStyle block background="blue">
            {Input}
          </ButtonStyle>
          <ButtonStyle active>{Input}</ButtonStyle>
          <ButtonStyle color="blue">{Input}</ButtonStyle>
          <ButtonStyle outline>{Input}</ButtonStyle>
        </div>
        <ButtonBody />
      </div>
    </>
  );
};

export default Button;
