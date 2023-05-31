import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Followers() {
  const { id } = useParams();

  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}/followers`)
      .then((response) => response.json())
      .then((data) => {
        setFollowers(data);
      });
  }, [id]);

  return (
    <div>
      <div>
        {followers.map((item, index) => (
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

export default Followers;
