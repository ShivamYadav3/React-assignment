import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartBox = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    setList(cartItems);
  }, []);

  const RemoveQuantity = (data) => {
    const Card = [...list];
    for (let i = 0; i < Card.length; i++) {
      if (Card[i].id == data) {
        console.log(Card[i]);
        Card[i]["qty"] = Card[i]["qty"] - 1;
        console.log(Card[i]);
        setList(Card);
        localStorage.setItem("cart", JSON.stringify(Card));
      }
      if (Card[i].qty < 1) {
        Card.splice(i, 1);
        setList(Card);
        localStorage.setItem("cart", JSON.stringify(Card));
      }
    }
  };

  const AddQuantity = (data) => {
    const Card = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < Card.length; i++) {
      if (Card[i].id == data) {
        console.log(Card[i]);
        Card[i]["qty"] = Card[i]["qty"] + 1;
        setList(Card);
        localStorage.setItem("cart", JSON.stringify(Card));
      }
    }
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
          console.log(data.id);
          return (
            <div key={data.id} className="flex justify-around items-center">
              <div className="w-64 inline-block">{data.title}</div>
              <div className="w-60 inline-block text-center">
                <button
                  className="w-12 bg-slate-300 mr-8 rounded-md"
                  onClick={() => AddQuantity(data.id)}
                >
                  +
                </button>
                <span>{data.qty}</span>
                <button
                  className="w-12 bg-slate-300 ml-8 rounded-md"
                  onClick={() => RemoveQuantity(data.id)}
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
        Total Amount To Pay :{" "}
        {list.reduce((Total, data) => Total + data.price * data.qty, 0)}
      </div>
    </div>
  );
};
export default CartBox;
