import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import RestaurantSignUp from "./Pages/restaurantSignUp/signUp";
import AllRestOrders from "./Pages/restaurantPages/Allorders/orders";
import NewOrders from "./Pages/restaurantPages/newOrders/newOrders";
import AllRest from "./Pages/adminPages/allRestaurants/allRest";
import Requests from "./Pages/adminPages/requestPage/requests";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/restaurantSignUp" element={<RestaurantSignUp />} />
        <Route path="/allRestaurants" element={<AllRestaurants />} />
        <Route path="/restarauntMenu" element={<Restaurant />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/orderTracking" element={<OrderTracking />} />
        <Route path="/restaurantMenuEdit" element={<RestaurantMenu />} />
        <Route path="/restAllOrders" element={<AllRestOrders />} />
        <Route path="/restNewOrders" element={<NewOrders />} />
        <Route path="/adminAll" element={<AllRest />} />
        <Route path="/adminRequests" element={<Requests />} />
      </Routes>
    </div>
  );
}

export default App;
