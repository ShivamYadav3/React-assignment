import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { meraProductId } = useParams();
  const [productDetails, setProductDetails] = useState({});

  const addCart = (e) => {
    const cartlist = JSON.parse(localStorage.getItem("cart")) || [];
    let foundIndex = -1;

    for (let i = 0; i < cartlist.length; i++) {
      if (cartlist[i].id == meraProductId) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex !== -1) {
      cartlist[foundIndex].qty++;
    } else {
      cartlist.push({ ...productDetails, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cartlist));
    alert("Added to cart");
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${meraProductId}`)
      .then((data) => data.json())
      .then((data) => {
        setProductDetails(data);
      });
  }, [meraProductId]);

  return (
    <div className="flex flex-col gap-y-5 p-5">
      <div className="grid grid-cols-2 justify-items-center items-center text-3xl font-semibold p-5">
        <div>
          <Link to="/">Products</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <div>Product Details : {meraProductId}</div>
        <div className="flex flex-col gap-y-5">
          <div>Product Name : {productDetails.title}</div>
          <div>Description : {productDetails.description}</div>
          <div>Price : {productDetails.price}</div>
          <div>
            <img
              src={productDetails.thumbnail}
              alt=""
              className="w-80 h-52 object-contain "
            />
          </div>
          <div>
            <button
              onClick={addCart}
              className="w-40 h-12 bg-slate-300 rounded-lg"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
