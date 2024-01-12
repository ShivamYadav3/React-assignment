import React from "react";
import dot from "./images/3 dot.svg";
import bag from "./images/Frame 1000008703.svg";
import link from "./images/link.svg";
import calender from "./images/calendar_today.svg";
import "./app.css";

const Card = () => {
  return (
    <div className="my-assess-items item3 box22">
      <div className="end-items">
        <img src={bag}></img>
        <img src={dot}></img>
      </div>
      <p className="item1-head">Math Assessment</p>
      <div className="inside-item">
        <p className="job">Job</p>
        <img src={calender}></img>
        <p className="date">20 Apr 2023</p>
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
        </div>
      </div>
    </div>
  );
};

export default Card;
