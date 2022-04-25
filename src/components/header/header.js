import { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  //check who is logged in
  const [logger, setLogger] = useState("");
  useEffect(() => {
    if (localStorage.getItem("restaurant")) {
      setLogger("restaurant");
    } else if (localStorage.getItem("user")) {
      setLogger("user");
    } else if (localStorage.getItem("admin")) {
      setLogger("admin");
    }
  }, [setLogger]);
  //logout whoever is logged in
  const logout = () => {
    localStorage.removeItem(logger);
    window.location.reload(false);
  };

  //component for determingin what options to show in header
  const ChangeHeader = () => {
    if (logger === "user") {
      return (
        <div>
          <a href="/orderHistory">Orders</a>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      );
    } else if (logger === "restaurant") {
      return (
        <div>
          <a href="/restaurantMenuEdit">Menu</a>
          <a href="/restNewOrders">New Orders</a>
          <a href="/restAllOrders">All Orders</a>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      );
    } else if (logger === "admin") {
      return (
        <div>
          <a href="/adminRequests">Pending Requests</a>
          <a href="/adminAll">All Restaurants</a>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      );
    } else if (logger === "") {
      return (
        <div>
          <a href="/login">Login</a>
          <a href="/signUp">Register</a>
        </div>
      );
    }
  };
  return (
    <nav>
      <a href="/" className="nav-logo">
        Logo
      </a>
      <div className="nav-links">{<ChangeHeader />}</div>
    </nav>
  );
}
