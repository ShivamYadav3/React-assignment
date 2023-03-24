import React, { useEffect, useState } from "react";
import FetchItem from "./views/Product.Layout";
import { MainDiv } from "./Product.style";

function Products() {
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
        return <FetchItem key={data.id} {...data} />;
      })}
    </MainDiv>
  );
}
export default Products;
