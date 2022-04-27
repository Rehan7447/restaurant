import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/orderHistory">Orders</Link>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      );
    } else if (logger === "restaurant") {
      return (
        <div>
          <Link to="/restaurantMenuEdit">Menu</Link>
          <Link to="/restNewOrders">New Orders</Link>
          <Link to="/restAllOrders">All Orders</Link>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      );
    } else if (logger === "admin") {
      return (
        <div>
          <Link to="/adminRequests">Pending Requests</Link>
          <Link to="/adminAll">All Restaurants</Link>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      );
    } else if (logger === "") {
      return (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signUp">Register</Link>
        </div>
      );
    }
  };
  return (
    <nav>
      <Link to="/" className="nav-logo">
        Logo
      </Link>
      <div className="nav-links">{<ChangeHeader />}</div>
    </nav>
  );
}
