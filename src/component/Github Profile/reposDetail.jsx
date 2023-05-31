import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RepoDetail() {
  const { id, Detail } = useParams();

  const [reposDetail, setReposDetail] = useState([]);
  useEffect(() => {
    if (!id) return;

    fetch(`https://api.github.com/repos/${id}/${Detail}`)
      .then((data) => data.json())
      .then((data) => setReposDetail(data));
  }, [id, Detail]);

  return (
    <div>
      <h2 style={{ fontFamily: "Lato, sans-serif" }}>Repository Details</h2>
      <div className="">
        <div className="grid-item">
          <span>
            Repository Name<p>{reposDetail.name}</p>
          </span>
          <span>
            Repository Default-Branch
            <p>{reposDetail.default_branch}</p>
          </span>
          <span>
            Repository Id<p>{reposDetail.id}</p>
          </span>
        </div>
      </div>
      <Link to={`/profile/${id}`}>
        <button>Profile</button>
      </Link>
    </div>
  );
}

export default RepoDetail;
