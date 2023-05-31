import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((data) => data.json())
      .then((data) => setDetails(data));
    fetch(`https://api.github.com/users/${id}/repos`)
      .then((data) => data.json())
      .then((data) => setRepo(data));
  }, [id]);

  return (
    <div>
      <div>
        <div>
          <img src={details.avatar_url} alt="" />
        </div>
        <div>{details.name}</div>
        <div>{details.location}</div>
        <div>{details.bio}</div>
        <div>
          <Link to={`/followers/${id}`}>Followers</Link>
        </div>
        <div>
          <Link to={`/following/${id}`}>following</Link>
        </div>
      </div>
      <div>
        {details.length && (
          <div>
            {repo.map((item, index) => {
              return (
                <div key={index} className="border">
                  {/* <div><img src="" alt="" /></div> */}
                  <Link to={`/reposDetail/${id}/${item.name}`}>
                    <div>Name : {item.name}</div>
                    <div>Public</div>
                    <div>{item.language}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
