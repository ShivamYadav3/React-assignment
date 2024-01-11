import React from "react";
import "./app.css";
import view_1 from "./images/view_agenda.svg";
import view_2 from "./images/Frame 1000009353.svg";
import view_3 from "./images/Frame 1000005832.svg";
import view_4 from "./images/Frame 1000009100.svg";
const ShowData = ({ detail }) => {
  return (
    <div>
      {detail && (
        <div
          className={`assessment_overview detail2 ${detail ? "active" : ""}`}
        >
          <div className="box5">
            <div className="over1">
              <p>Total Assessments</p>
              <div className="tiny1">
                <img src={view_1} />
                <p>34</p>
              </div>
            </div>
            <div className="over4" style={{ paddingRight: "40px" }}>
              <p>Total Purpose</p>
              <div className="tiny4">
                <img src={view_4} />
                <p>11</p>
              </div>
            </div>
          </div>
          <div className="over2 box6">
            <p className="over2p">Candidates</p>
            <div className="tiny2" style={{ width: "105%" }}>
              <img src={view_2} />
              <div className="tiny21 border_tiny">
                <div className="tiny321">
                  <p className="p1">11,145</p>
                  <p className="p2">+89</p>
                </div>
                <p className="p3">Total Candidates</p>
              </div>
              <div className="tiny21">
                <div className="tiny321">
                  <p className="p1">1,14</p>
                  <p className="p2">+89</p>
                </div>
                <p className="p3">Who Attempted</p>
              </div>
            </div>
          </div>

          <div className="over2 over3 box7">
            <p className="over2p">Candidate Source</p>
            <div className="tiny2">
              <img src={view_3} />
              <div className="tiny21 border_tiny box8">
                <div className="tiny321">
                  <p className="p1">11,100</p>
                  <p className="p2">+89</p>
                </div>
                <p className="p3">Email</p>
              </div>
              <div className="tiny21 border_tiny box9">
                <div className="tiny321">
                  <p className="p1">145</p>
                  <p className="p2">+89</p>
                </div>
                <p className="p3 box10">Social Share</p>
              </div>
              <div className="tiny21 box11">
                <div className="tiny321">
                  <p className="p1">145</p>
                  <p className="p2">+89</p>
                </div>
                <p className="p3 box12">Unique Link</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowData;
