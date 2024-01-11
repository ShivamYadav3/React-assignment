import React from "react";
import "./app.css";
import dot from "./images/3 dot.svg";
import bag from "./images/Frame 1000008703.svg";
import link from "./images/link.svg";
import calender from "./images/calendar_today.svg";

const MobileCard = () => {
  return (
    <div className="my-assess-items item2 box13">
      <div className="end-items" style={{ borderBottom: "1px dotted #DADCE0" }}>
        <div style={{ display: "flex" }}>
          <img src={bag}></img>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="item1-head">Math Assessment</p>
            <div className="inside-item" style={{ border: "none" }}>
              <p className="job">Job</p>
              <img src={calender}></img>
              <p className="date">20 Apr 2023</p>
            </div>
          </div>
        </div>
        <img src={dot}></img>
      </div>
      <div className="main-second">
        <div className="bot-left">
          <div>
            <p className="bold">00</p>
            <p>Duration</p>
          </div>
          <div>
            <p className="bold">00</p>
            <p>Questions</p>
          </div>
        </div>
        <div className="bot-right">
          <div className="img-div">
            <img src={link}></img>
            <p>Share</p>
          </div>
          <button>LP</button>
          <button className="bt2">LP</button>
          <button className="bt3">LP</button>
          <p className="box14">+324</p>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
