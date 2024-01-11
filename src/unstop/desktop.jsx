import React from "react";
import mobilepic from "./images/mobile_screen_share.svg";
import view_1 from "./images/view_agenda.svg";
import view_2 from "./images/Frame 1000009353.svg";
import view_3 from "./images/Frame 1000005832.svg";
import view_4 from "./images/Frame 1000009100.svg";
import "./app.css";
import DesktopForm from "./desktopForm";
import SideBar from "./sideBar";
import DesktopBody from "./DesktopBody";

const Desktop = ({ isMobileView, handleToggleView, showForm, toggleForm }) => {
  return (
    <div>
      {!isMobileView && (
        <div className="big_div">
          <SideBar />
          <div className="sidebar2">
            <div className="sidebar21">
              <div className="main-div">
                <div className="div-left">
                  <p className="Assessment-1">Assessment</p>
                  <div className="border-right"></div>
                  <div className="assess">
                    <p className="Assessment-2">My Assessments</p>
                  </div>
                </div>
                <div onClick={() => handleToggleView()}>
                  <img src={mobilepic}></img>
                </div>
              </div>
              <p className="ass_over">Assessment Overview</p>
              <div className="assessment_overview">
                <div className="over1">
                  <p>Total Assessments</p>
                  <div className="tiny1">
                    <img src={view_1} />
                    <p>34</p>
                  </div>
                </div>

                <div className="over2">
                  <p className="over2p">Candidates</p>
                  <div className="tiny2">
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

                <div className="over2 over3">
                  <p className="over2p">Candidate Source</p>
                  <div className="tiny2">
                    <img src={view_3} />
                    <div className="tiny21 border_tiny">
                      <div className="tiny321">
                        <p className="p1">11,100</p>
                        <p className="p2">+89</p>
                      </div>
                      <p className="p3">Email</p>
                    </div>
                    <div className="tiny21 border_tiny">
                      <div className="tiny321">
                        <p className="p1">145</p>
                        <p className="p2">+89</p>
                      </div>
                      <p className="p3">Social Share</p>
                    </div>
                    <div className="tiny21">
                      <div className="tiny321">
                        <p className="p1">145</p>
                        <p className="p2">+89</p>
                      </div>
                      <p className="p3">Unique Link</p>
                    </div>
                  </div>
                </div>

                <div className="over4">
                  <p>Total Purpose</p>
                  <div className="tiny4">
                    <img src={view_4} />
                    <p>11</p>
                  </div>
                </div>
              </div>
              <p className="ass_over">My Assessment</p>
              <DesktopBody toggleForm={toggleForm} />
              <DesktopForm showForm={showForm} toggleForm={toggleForm} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Desktop;
