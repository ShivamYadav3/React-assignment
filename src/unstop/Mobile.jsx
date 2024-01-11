import React, { useState } from "react";
import bar from "./images/bar_chart.svg";
import filter from "./images/filter_list_alt.svg";
import laptop from "./images/laptop_mac.svg";
import search from "./images/search.svg";
import sideBtn from "./images/segment.svg";
import NewAssessment from "./newAssessment";
import "./app.css";
import ShowData from "./showData";
import MobileSidebar from "./MobileSidebar";
import MobileBody from "./MobileBody";

const Mobile = ({
  isMobileView,
  sidebar,
  handleMobileToggle,
  setShowForm,
  showForm,
  setSidebar,
}) => {
  const [detail, setDetail] = useState(false);
  const [togMar, setTogMar] = useState(false);

  const handleDivContent = () => {
    setDetail(!detail);
    setTogMar(!togMar);
  };

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div>
      {isMobileView && (
        <div className={`mobi ${sidebar ? "active" : ""}`}>
          <MobileSidebar sidebar={sidebar} setSidebar={setSidebar} />
          <div className={`bigSide ${sidebar ? "active" : ""}`}>
            <div>
              <div className="mobnav">
                <div className="mobnav1">
                  <img
                    onClick={() => setSidebar(!sidebar)}
                    src={sideBtn}
                    alt="Toggle Sidebar"
                  />
                  <span>Assessment</span>
                </div>
                <div onClick={handleMobileToggle} className="mobnav2">
                  <img src={laptop} alt="Toggle Mobile View" />
                </div>
              </div>

              <div className="mobassess">
                <span className="as1">My Assessments</span>
                <span className="as2">Unstop Assessments</span>
              </div>
              <ShowData detail={detail} />
              <div
                className={`mobnav12 ${detail ? "active" : ""}`}
                style={{ marginTop: detail ? "60%" : "0%" }}
              >
                <span>My Assessments</span>
                <div className="mobnav123">
                  <img src={search} alt="Search Icon" />
                  <img src={filter} alt="Filter Icon" />
                  {!detail && (
                    <img
                      onClick={handleDivContent}
                      src={bar}
                      alt="Toggle Details"
                    />
                  )}
                  {detail && (
                    <img
                      className="img5"
                      onClick={handleDivContent}
                      src={bar}
                      alt="Toggle Details"
                    />
                  )}
                </div>
              </div>
              <MobileBody toggleForm={toggleForm} />
            </div>
            <NewAssessment showForm={showForm} toggleForm={toggleForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobile;
