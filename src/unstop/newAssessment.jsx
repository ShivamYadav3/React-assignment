import React from "react";
import "./app.css";
import cut from "./images/cut.svg";

const NewAssessment = ({ showForm, toggleForm }) => {
  return (
    <div className={`form-container ${showForm ? "active" : ""}`}>
      {showForm && (
        <div className="form-overlay">
          <div
            className="form-wrapper"
            style={{ width: "373px", left: "36%", top: "8%" }}
          >
            <form className="form-content">
              {/* Your form elements go here */}
              <div className="form_top">
                <h2>Create new assessment</h2>
                <img onClick={() => toggleForm()} src={cut} />
              </div>
              <div className="form_div_input">
                <div
                  className="form_div_input1"
                  style={{ marginBottom: "-10px" }}
                >
                  <p>Purpose of the test is</p>
                  <select style={{ width: "330px" }} disabled>
                    <option style={{ color: "#1C4980" }}>Select</option>
                  </select>
                </div>
                <div
                  className="form_div_input1"
                  style={{ marginBottom: "-10px" }}
                >
                  <p>Description</p>
                  <select style={{ width: "330px" }} disabled>
                    <option style={{ color: "#1C4980" }}>Select</option>
                  </select>
                </div>
                <div className="form_div_input1">
                  <p>Skills</p>
                  <div className="skills" style={{ width: "309px" }}>
                    <span style={{ width: "41%" }}>
                      UI/UX and Design <img src={cut} />
                    </span>
                    <span style={{ width: "35%" }}>
                      No of Question <img src={cut} />
                    </span>
                    <span style={{ width: "41%" }}>
                      Web Development <img src={cut} />
                    </span>
                    <span style={{ width: "35%" }}>
                      UI/UX and Design <img src={cut} />
                    </span>
                    <span style={{ width: "30%" }}>
                      Web Development <img src={cut} />
                    </span>
                  </div>
                  <input
                    style={{ width: "300px" }}
                    className="skills_input"
                    disabled
                    type="email"
                    placeholder="Type here"
                  />
                </div>
                <div className="form_div_input1">
                  <p>Duration of assessment</p>
                  <input
                    style={{ width: "300px" }}
                    className="hrs"
                    disabled
                    type="email"
                    placeholder="HH:MM:SS"
                  />
                </div>
              </div>
            </form>
            <div className="but_div">
              <button
                style={{ width: "333px" }}
                className="sub_button"
                type="submit"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewAssessment;
