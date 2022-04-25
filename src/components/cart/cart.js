import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      //getting all items of cart from localstorage
      var tempCart = localStorage.getItem("cart");
      //converting the tempCart to Json using JSON.parse and then storing it inside the cart hook
      setCart(JSON.parse(tempCart));
      setEmpty(false)
      let temp = 0;
      for (let i = 0; i < cart.length; i++) {
        temp = temp + parseInt(cart[i].price) * parseInt(cart[i].quantity);
      }
      setTotal(temp);
    }

  }, [cart, setCart, setTotal]);

  return (
    <div className="menuMain">
      <div className="menuContent">
        <h2 className="cartHeadind">Cart</h2>

        <div className="cartContent" >
          {!empty ? cart.map((item, i) => {
            return (
              <div className="cartItem">
                <h6>Item {i + 1}: </h6>
                <div className="d-flex justify-content-between" key={i}>
                  <p>name: {item.name}</p>
                  <p>quantity: {item.quantity}</p>
                  <p>
                    price: {parseInt(item.price) * parseInt(item.quantity)}$
                  </p>
                </div>
              </div>
            )
          }) : <div><h4 style={{ textAlign: "center", margin: "20px auto" }} >Your cart is empty!</h4></div>}
        </div>

        <hr />
        <div className="d-flex justify-content-between">
          <h5>Total: </h5>
          <h5>${total}</h5>
        </div>
      </div>

      <div className="cartFooter">
        <button
          className="btn btn-success"
          onClick={() => {
            navigate("/order");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
