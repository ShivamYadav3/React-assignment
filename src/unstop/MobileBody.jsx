import React from "react";
import "./app.css";
import MobileCard from "./MobileCard";
import link from "./images/link.svg";
import calender from "./images/calendar_today.svg";
import dot from "./images/3 dot.svg";
import plus from "./images/add.svg";
import bag from "./images/Frame 1000008703.svg";

const MobileBody = ({ toggleForm }) => {
  return (
    <div>
      <div className="my-assessment box15">
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
        <div className="my-assess-items item2 box16">
          <div
            className="end-items"
            style={{ borderBottom: "1px dotted #DADCE0" }}
          >
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
              <p className="box17">+324</p>
            </div>
          </div>
        </div>
        <MobileCard />
        <MobileCard />
        <MobileCard />
        <MobileCard />
        <MobileCard />
        <MobileCard />
      </div>
    </div>
  );
};

export default MobileBody;
