import React, { useEffect, useState } from "react";
import FetchItem from "./FetchItem";
import { MainDiv } from "./styled";

function FetchApi() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MainDiv>
      {user.map((data, index) => {
        return <FetchItem key={data.id} item={data} />;
      })}
    </MainDiv>
  );
}
export default FetchApi;
