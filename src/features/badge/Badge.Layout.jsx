import { useState } from "react";
import BadgeStyle from "./BadgeStyle";

const Badge = () => {
  let [Input, setInput] = useState("New");
  return (
    <>
      <div>
        <h1>Badge</h1>
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
          <BadgeStyle color="black">{Input}</BadgeStyle>
          <BadgeStyle Pill background="aqua">
            {Input}
          </BadgeStyle>
        </div>
      </div>
    </>
  );
};

export default Badge;
