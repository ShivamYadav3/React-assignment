import React from "react";
import Card from "./Card";
import "./app.css";
import plus from "./images/add.svg";
import link from "./images/link.svg";
import dot from "./images/3 dot.svg";
import bag from "./images/Frame 1000008703.svg";
import calender from "./images/calendar_today.svg";
const DesktopBody = ({ toggleForm }) => {
  return (
    <div className="my-assessment">
      <div onClick={() => toggleForm()} className="my-assess-items item1">
        <div className="img-con">
          <img src={plus}></img>
        </div>
        <p className="item1-head">New Assessment</p>
        <p className="item1-text">
          From here you can add questions of multiple types like MCQs,
          subjective(text or paragraph)!
        </p>
      </div>
      <div className="my-assess-items item2">
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
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default DesktopBody;
