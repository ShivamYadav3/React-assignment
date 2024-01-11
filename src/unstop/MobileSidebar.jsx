import React from "react";
import dashboard from "./images/dashboard.svg";
import assessment from "./images/note_alt.svg";
import result from "./images/admin_meds.svg";
import quiz from "./images/quiz.svg";
import cut from "./images/cut.svg";

import "./app.css";
const MobileSidebar = ({ sidebar, setSidebar }) => {
  return (
    <div>
      {sidebar && (
        <div className={`sidemob ${sidebar ? "active" : ""}`}>
          <div className="side1">
            <span>Menu</span>
            <img onClick={() => setSidebar(!sidebar)} src={cut} />
          </div>
          <div className="side2">
            <img src={dashboard} />
            <span>Dashboard</span>
          </div>
          <div className="side2 extra">
            <img src={assessment} />
            <span>Assessment</span>
          </div>
          <div className="side2">
            <img src={quiz} />
            <span>My Library</span>
          </div>
          <div className="underline1"></div>
          <div className="side21">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img style={{ paddingRight: "8px" }} src={result} />
              <span>Round Status</span>
            </div>

            <div className="admin">
              <span>Admin</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
