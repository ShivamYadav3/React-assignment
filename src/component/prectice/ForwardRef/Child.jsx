import React from "react";
import { forwardRef } from "react";

const Child = forwardRef((props, ref) => {
  return (
    <div>
      <div>Child</div>
      <input type="text" className="border" ref={ref} />
    </div>
  );
});

export default Child;

// 2nd way

// const Child = (props, ref) => {
//     return (
//       <div>
//         <div>Child</div>
//         <input type="text" className="border" ref={ref} />
//       </div>
//     );
//   };

//   export default forwardRef(Child);
