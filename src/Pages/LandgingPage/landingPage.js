import "./landingPage.css";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="landingBanner">
        <h1>Find the Best Restaurants for you</h1>
        <div className="input-group landingSearch">
          <input
            type="text"
            className="form-control"
            id="inputGroupFile04"
            placeholder="Enter Your Location"
          />
          <button
            className="btn btn-secondary"
            type="button"
            id="inputGroupFileAddon04"
            onClick={() => {
              navigate("/allRestaurants");
            }}
          >
            Find Restaurants near you
          </button>
        </div>
      </div>
    </div>
  );
}
