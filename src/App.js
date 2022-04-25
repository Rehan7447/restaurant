import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/login";
import SignUp from "./Pages/SignupPage/signUp";
import LandingPage from "./Pages/LandgingPage/landingPage";
import Header from "./components/header/header";
import AllRestaurants from "./Pages/customerPages/allRestaurants/allRestaurants";
import Restaurant from "./Pages/customerPages/Restauraunt/restaurant";
import Order from "./Pages/customerPages/orderPage/order";
import OrderHistory from "./Pages/customerPages/orderHistory/orderHistory";
import OrderTracking from "./Pages/customerPages/orderTracking/orderTracking";
import RestaurantMenu from "./Pages/restaurantPages/menuPage/menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/allRestaurants" element={<AllRestaurants />} />
          <Route path="/restarauntMenu" element={<Restaurant />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/orderTracking" element={<OrderTracking />} />
          <Route path="/restaurantMenuEdit" element={<RestaurantMenu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
