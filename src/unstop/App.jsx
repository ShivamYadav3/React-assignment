import "./app.css";
import dot from "./images/3 dot.svg";
import plus from "./images/add.svg";
import redult from "./images/admin_meds.svg";
import bar from "./images/bar_chart.svg";
import calender from "./images/calendar_today.svg";

import cut from "./images/cut.svg";
import dashboard from "./images/dashboard.svg";
import filter from "./images/filter_list_alt.svg";

import bag from "./images/Frame 1000008703.svg";

import laptop from "./images/laptop_mac.svg";
import link from "./images/link.svg";
import mobilepic from "./images/mobile_screen_share.svg";
import assessment from "./images/note_alt.svg";
import quiz from "./images/quiz.svg";
import search from "./images/search.svg";
import sidebtn from "./images/segment.svg";

import view_1 from "./images/view_agenda.svg";

import view_2 from "./images/Frame 1000009353.svg";
import view_3 from "./images/Frame 1000005832.svg";
import view_4 from "./images/Frame 1000009100.svg";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [divc, setDivc] = useState(false);
  const [togMar, setTogmar] = useState(false);

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handlemobileToggle = () => {
    document.body.style.width = "100%";
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "rgb(247, 248, 250)";
    // // document.querySelector('.sidebar').style.display='none'
    // // document.querySelector('.my-assessment').width='100%'
    setIsMobileView(!isMobileView);
  };

  const handleToggleView = () => {
    document.body.style.width = "375px";
    document.body.style.margin = "auto";
    document.body.style.backgroundColor = "black";
    // // document.querySelector('.sidebar').style.display='none'
    // // document.querySelector('.my-assessment').width='100%'
    setIsMobileView(!isMobileView);
  };

  const handleDivConetent = () => {
    setDivc(!divc);
    if (!togMar) document.querySelector(".mobnav12").style.marginTop = "60%";
    setTogmar(!togMar);
    if (togMar) document.querySelector(".mobnav12").style.marginTop = "0%";
  };

  return (
    <div className="App">
      {!isMobileView && (
        <div className="big_div">
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
              <img style={{ alignItems: "center" }} src={redult} />
              <span style={{ textAlign: "center", wordWrap: "unset" }}>
                Round Status
              </span>
            </div>
          </div>
          <div className="sidebar2">
            <div className="sidebar21">
              <div className="main-div">
                <div className="div-left">
                  <p className="Assessment-1">Assessment</p>
                  <div className="border-right"></div>
                  <div className="assess">
                    {" "}
                    <p className="Assessment-2">My Assessments</p>
                  </div>
                </div>
                <div onClick={handleToggleView}>
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

              {/* component 2 */}
              <div className="my-assessment">
                <div onClick={toggleForm} className="my-assess-items item1">
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
                <div className="my-assess-items item3">
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
              </div>

              <div className={`form-container ${showForm ? "active" : ""}`}>
                {/* <button onClick={toggleForm}>Add</button> */}
                {showForm && (
                  <div className="form-overlay">
                    <div className="form-wrapper">
                      <form className="form-content">
                        {/* Your form elements go here */}
                        <div className="form_top">
                          <h2>Create new assessment</h2>
                          <img onClick={toggleForm} src={cut} />
                        </div>
                        <div className="form_div_input">
                          <div className="form_div_input1">
                            <p>Name of assessment</p>
                            <input
                              disabled
                              type="text"
                              placeholder="Type Here"
                            />
                          </div>
                          <div className="form_div_input1">
                            <p>Purpose of the test is</p>
                            <select disabled>
                              <option style={{ color: "#1C4980" }}>
                                Select
                              </option>
                            </select>
                          </div>
                          <div className="form_div_input1">
                            <p>Description</p>
                            <select disabled>
                              <option style={{ color: "#1C4980" }}>
                                Select
                              </option>
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
          </div>
        </div>
      )}
      {isMobileView && (
        <div className={`mobi ${sidebar ? "active" : ""}`}>
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
                  <img style={{ paddingRight: "8px" }} src={redult} />
                  <span>Round Status</span>
                </div>

                <div className="admin">
                  <span>Admin</span>
                </div>
              </div>
            </div>
          )}
          <div className={`bigSide ${sidebar ? "active" : ""}`}>
            <div>
              <div className="mobnav">
                <div className="mobnav1">
                  <img onClick={() => setSidebar(!sidebar)} src={sidebtn} />
                  <span>Assessment</span>
                </div>
                <div onClick={handlemobileToggle} className="mobnav2">
                  <img src={laptop} />
                </div>
              </div>

              <div className="mobassess">
                <span className="as1">My Assessments</span>
                <span className="as2">Unstop Assessments</span>
              </div>

              {divc && (
                <div
                  className={`assessment_overview ${divc ? "active" : ""}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "none",
                    paddingTop: "25px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      border: "1px #DADCE0 solid",
                      borderTopRightRadius: "8px",
                      borderTopLeftRadius: "8px",
                    }}
                  >
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

                  <div
                    className="over2"
                    style={{
                      borderBottom: "1px #DADCE0 solid",
                      borderRight: "1px #DADCE0 solid",
                      borderLeft: "1px #DADCE0 solid",
                      width: "295px",
                    }}
                  >
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

                  <div
                    className="over2 over3"
                    style={{
                      borderBottom: "1px #DADCE0 solid",
                      borderRight: "1px #DADCE0 solid",
                      borderLeft: "1px #DADCE0 solid",
                      width: "295px",
                      borderBottomRightRadius: "8px",
                      borderBottomLeftRadius: "8px",
                    }}
                  >
                    <p className="over2p">Candidate Source</p>
                    <div className="tiny2">
                      <img src={view_3} />
                      <div
                        className="tiny21 border_tiny"
                        style={{ paddingRight: "7px", paddingLeft: "10px" }}
                      >
                        <div className="tiny321">
                          <p className="p1">11,100</p>
                          <p className="p2">+89</p>
                        </div>
                        <p className="p3">Email</p>
                      </div>
                      <div
                        className="tiny21 border_tiny"
                        style={{ paddingRight: "10px", paddingLeft: "7px" }}
                      >
                        <div className="tiny321">
                          <p className="p1">145</p>
                          <p className="p2">+89</p>
                        </div>
                        <p style={{ width: "135%" }} className="p3">
                          Social Share
                        </p>
                      </div>
                      <div
                        className="tiny21"
                        style={{ paddingRight: "7px", paddingLeft: "7px" }}
                      >
                        <div className="tiny321">
                          <p className="p1">145</p>
                          <p className="p2">+89</p>
                        </div>
                        <p style={{ width: "115%" }} className="p3">
                          Unique Link
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className={`mobnav12 ${divc ? "active" : ""}`}>
                <span>My Assessments</span>
                <div className="mobnav123">
                  <img src={search} />
                  <img src={filter} />
                  {!divc && <img onClick={handleDivConetent} src={bar} />}
                  {divc && (
                    <img
                      style={{
                        backgroundColor: "#F2F8FE",
                        borderRadius: "50%",
                        border: "1px solid #0073E6",
                      }}
                      onClick={handleDivConetent}
                      src={bar}
                    />
                  )}
                </div>
              </div>

              <div
                className="my-assessment"
                style={{
                  flexDirection: "column",
                  width: "300%",
                  overflowY: "auto",
                }}
              >
                <div onClick={toggleForm} className="my-assess-items item1">
                  <div className="img-con">
                    <img src={plus}></img>
                  </div>
                  <p className="item1-head">New Assessment</p>
                  <p className="item1-text">
                    From here you can add questions of multiple types like MCQs,
                    subjective(text or paragraph)!
                  </p>
                </div>
                <div
                  className="my-assess-items item2"
                  style={{
                    height: "160px",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
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
                      <p
                        style={{
                          color: "#1C4980",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        +324
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="my-assess-items item2"
                  style={{
                    height: "160px",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
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
                      <button className="bt2">LP</button>
                      <button className="bt3">LP</button>
                      <p
                        style={{
                          color: "#1C4980",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        +324
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="my-assess-items item2"
                  style={{
                    height: "160px",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
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
                      <button className="bt2">LP</button>
                      <button className="bt3">LP</button>
                      <p
                        style={{
                          color: "#1C4980",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        +324
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="my-assess-items item2"
                  style={{
                    height: "160px",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
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
                      <button className="bt2">LP</button>
                      <button className="bt3">LP</button>
                      <p
                        style={{
                          color: "#1C4980",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        +324
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="my-assess-items item2"
                  style={{
                    height: "160px",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
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
                      <button className="bt2">LP</button>
                      <button className="bt3">LP</button>
                      <p
                        style={{
                          color: "#1C4980",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        +324
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="my-assess-items item2"
                  style={{
                    height: "160px",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
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
                      <button className="bt2">LP</button>
                      <button className="bt3">LP</button>
                      <p
                        style={{
                          color: "#1C4980",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        +324
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="my-assess-items item2"
                  style={{
                    height: "160px",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
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
                      {/* <button className='bt2'>LP</button> */}
                      <button className="bt3">LP</button>
                      <p
                        style={{
                          color: "#1C4980",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        +324
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`form-container ${showForm ? "active" : ""}`}>
              {/* <button onClick={toggleForm}>Add</button> */}
              {showForm && (
                <div className="form-overlay">
                  <div
                    className="form-wrapper"
                    style={{ width: "370px", left: "37%", top: "8%" }}
                  >
                    <form className="form-content">
                      {/* Your form elements go here */}
                      <div className="form_top">
                        <h2>Create new assessment</h2>
                        <img onClick={toggleForm} src={cut} />
                      </div>
                      <div className="form_div_input">
                        {/* <div className='form_div_input1' style={{marginBottom:'-10px'}}>
                          <p>Name of assessment</p>
                          <input style={{width:'300px'}} disabled type="text" placeholder="Type Here" />
                        </div> */}
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
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
