import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CartBox = () => {
  const [list, setList] = useState([]);
  const { meraProductId } = useParams();
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setList(cartItems);
  }, []);

  const RemoveQuantity = (e) => {
    const Card = JSON.parse(localStorage.getItem("cart"));
    // let foundIndex = -1;
    console.log(e.target.id);
    console.log(meraProductId);
    console.log(Card[0].id);
    for (let i = 0; i < Card.length; i++) {
      if (Card[i].id == meraProductId) {
        //     // foundIndex = i;
        //     // let okk = Card[i].qty
        console.log(Card);
        //     Card[i]["qty"] - 1;
        //     // setList((prev) )=> [...prev, Card]);
        //     //  { ...Card[i], Card[i]["qty"]: Card[i].qty - 1};
        //     setList(Card);
        //     // break;
        //     // return { ...Card[i], qty: Card[i].qty - 1 };
        //   }
      }
      // // if (foundIndex !== -1) {
      // //   Card[foundIndex].qty--;
    }
    // console.log(e);
    // localStorage.setItem("cart", JSON.stringify(Card));
    // alert("Removed to cart");
  };

  return (
    <div className="flex flex-col gap-y-5">
      <div className="grid grid-cols-2 justify-items-center items-center">
        <div>
          <h1 className="text-2xl font-semibold p-5">My Cart</h1>
        </div>
        <div className="text-2xl font-semibold ">
          <Link to="/">Products</Link>
        </div>
      </div>

      <div className="flex justify-around font-bold text-lg items-center">
        <div className="w-64">Product Name</div>
        <div className="w-60 text-center">Quantity</div>
        <div className="w-28">Price</div>
        <div className="w-28">Rs</div>
      </div>

      <div className="flex flex-col gap-y-5">
        {list.map((data, index) => {
          return (
            <div key={index} className="flex justify-around items-center">
              <div className="w-64 inline-block">{data.title}</div>
              <div className="w-60 inline-block text-center">
                <button className="w-12 bg-slate-300 mr-8 rounded-md">+</button>
                <span>{data.qty}</span>
                <button
                  className="w-12 bg-slate-300 ml-8 rounded-md"
                  onClick={RemoveQuantity}
                >
                  -
                </button>
              </div>
              <div className="w-28 inline-block">
                {data.qty}*{data.price}
              </div>
              <div className="w-28 inline-block">{data.qty * data.price}</div>
            </div>
          );
        })}
      </div>
      <br />
      <div className="ml-20 font-extrabold text-lg">
        Total Items In The Cart : {list.length}
      </div>
      <br />
      <div className="ml-20 font-extrabold text-lg">
        Total Amount To Pay :
        {list.reduce((Total, data) => Total + data.price * data.qty, 0)}
      </div>
    </div>
  );
};
export default CartBox;
