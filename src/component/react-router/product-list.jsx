import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((data) => data.json())
      .then((data) => {
        console.table(data.products);
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="grid grid-cols-2 justify-items-center items-center">
        <div>
          <h1 className="text-3xl font-semibold p-5">Product</h1>
        </div>
        <div className="text-3xl font-semibold">
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-items-center items-center gap-y-5">
        {products.map((item) => {
          return (
            <Link to={`/product-details/${item.id}`} key={item.id}>
              <div className="text-1xl font-semibold p-5 border border-slate-300 rounded-3xl cursor-default w-96 flex flex-col items-center">
                <div>{item.id}</div>
                <div className="w-80 h-52 my-1">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-80 h-52 object-contain "
                  />
                </div>
                <div className="m-2">{item.title}</div>
                <div>Price : {item.price}</div>
                <br />
                <div>
                  <button className="w-40 h-12 bg-slate-300 rounded-lg">
                    Show Details
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;
