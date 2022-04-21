import { useState, useEffect } from "react";
import "./content.css";

export default function ContentOrderCust() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //getting all items of cart from localstorage
    var tempCart = localStorage.getItem("cart");
    //converting the tempCart to Json using JSON.parse and then storing it inside the cart hook
    setCart(JSON.parse(tempCart));
    let temp = 0;
    for (let i = 0; i < cart.length; i++) {
      temp = temp + parseInt(cart[i].price) * parseInt(cart[i].quantity);
    }
    setTotal(temp);
  }, [cart, setCart, setTotal]);

  return (
    <div className="menuContens orderContents ">
      <div className="cartContent">
        {cart.map((item, i) => {
          return (
            <div className="cartItem">
              <h6>Item {i + 1}: </h6>
              <div className="d-flex justify-content-between" key={i}>
                <p>name: {item.name}</p>
                <p>quantity: {item.quantity}</p>
                <p>price: {parseInt(item.price) * parseInt(item.quantity)}$</p>
              </div>
            </div>
          );
        })}
      </div>

      <hr />
      <div className="d-flex justify-content-between orderContentTotal btn-secondary">
        <h5>Total: </h5>
        <h5>${total}</h5>
      </div>
    </div>
  );
}
