import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [inputId, setInputId] = useState("");
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border w-96 flex flex-col items-center justify-center gap-y-16 h-80">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png"
            alt=""
            className="w-32 object-contain"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="search id"
            value={inputId}
            className="border p-1 pl-2"
            onChange={(e) => setInputId(e.target.value)}
          />
          <Link to={`/profile/${inputId}`}>
            <button className="ml-5 bg-slate-300 p-1 w-20">Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
