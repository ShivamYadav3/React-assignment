import React from "react";
import result from "./images/admin_meds.svg";
import dashboard from "./images/dashboard.svg";
import assessment from "./images/note_alt.svg";
import quiz from "./images/quiz.svg";
import "./app.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_comp">
        <img src={dashboard} />
        <span>Dashboard</span>
      </div>
      <div className="sidebar_comp extra">
        <img src={assessment} />
        <span>Assessment</span>
      </div>
      <div className="sidebar_comp">
        <img src={quiz} />
        <span>My Library</span>
      </div>
      <div className="underline"></div>
      <div className="admin">
        <span>Admin</span>
      </div>
      <div className="sidebar_comp">
        <img className="img6" src={result} />
        <span className="span5">Round Status</span>
      </div>
    </div>
  );
};

export default SideBar;
