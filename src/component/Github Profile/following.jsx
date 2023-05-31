import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Following() {
  const { id } = useParams();

  const [following, setFollowing] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}/following`)
      .then((response) => response.json())
      .then((data) => {
        setFollowing(data);
      });
  }, [id]);

  return (
    <div>
      <div>
        {following.map((item, index) => (
          <Link to={`/profile/${item.login}`} key={index}>
            <div>
              <img src={item.avatar_url} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Following;
