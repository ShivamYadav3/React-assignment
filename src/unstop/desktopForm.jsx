import React from "react";
import cut from "./images/cut.svg";

const DesktopForm = ({ showForm, toggleForm }) => {
  return (
    <div>
      <div className={`form-container ${showForm ? "active" : ""}`}>
        {showForm && (
          <div className="form-overlay">
            <div className="form-wrapper">
              <form className="form-content">
                {/* Your form elements go here */}
                <div className="form_top">
                  <h2>Create new assessment</h2>
                  <img onClick={() => toggleForm()} src={cut} />
                </div>
                <div className="form_div_input">
                  <div className="form_div_input1">
                    <p>Name of assessment</p>
                    <input disabled type="text" placeholder="Type Here" />
                  </div>
                  <div className="form_div_input1">
                    <p>Purpose of the test is</p>
                    <select disabled>
                      <option style={{ color: "#1C4980" }}>Select</option>
                    </select>
                  </div>
                  <div className="form_div_input1">
                    <p>Description</p>
                    <select disabled>
                      <option style={{ color: "#1C4980" }}>Select</option>
                    </select>
                  </div>
                  <div className="form_div_input1">
                    <p>Skills</p>
                    <div className="skills">
                      <span>
                        UI/UX and Design <img src={cut} />
                      </span>
                      <span>
                        No of Question <img src={cut} />
                      </span>
                      <span>
                        Web Development <img src={cut} />
                      </span>
                      <span>
                        UI/UX and Design <img src={cut} />
                      </span>
                      <span>
                        Web Development <img src={cut} />
                      </span>
                    </div>
                    <input
                      className="skills_input"
                      disabled
                      type="email"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="form_div_input1">
                    <p>Duration of assessment</p>
                    <input
                      className="hrs"
                      disabled
                      type="email"
                      placeholder="HH:MM:SS"
                    />
                  </div>
                </div>
              </form>
              <div className="but_div">
                <button className="sub_button" type="submit">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopForm;
