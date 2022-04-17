import "./cart.css";

export default function Cart() {
  return (
    <div className="menuMain">
      <div className="menuContens">
        <h2 className="cartHeadind">Cart</h2>
        <div className="cartItem">
          <h6>Item 1: </h6>
          <div className="d-flex justify-content-between">
            <p>name: kebab</p>
            <p>quantity: 3</p>
            <p>price: 23$</p>
          </div>
        </div>
        <div className="cartItem">
          <h6>Item 2: </h6>
          <div className="d-flex justify-content-between">
            <p>name: kebab</p>
            <p>quantity: 3</p>
            <p>price: 23$</p>
          </div>
        </div>
        <hr />
      </div>

      <div className="cartFooter">
        <button className="btn btn-success">Checkout</button>
      </div>
    </div>
  );
}
