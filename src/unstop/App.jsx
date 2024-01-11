import "./app.css";
import { useState } from "react";
import Desktop from "./desktop";
import Mobile from "./Mobile";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  const handleMobileToggle = () => {
    setIsMobileView(!isMobileView);
  };
  const handleToggleView = () => {
    setIsMobileView(!isMobileView);
  };
  return (
    <div className={`App ${isMobileView ? "mobile-view" : "desktop-view"}`}>
      <Desktop
        isMobileView={isMobileView}
        handleToggleView={handleToggleView}
        showForm={showForm}
        toggleForm={toggleForm}
      />
      <Mobile
        isMobileView={isMobileView}
        sidebar={sidebar}
        setSidebar={setSidebar}
        handleMobileToggle={handleMobileToggle}
        setShowForm={setShowForm}
        showForm={showForm}
      />
    </div>
  );
}

export default App;
