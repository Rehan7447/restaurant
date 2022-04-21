import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import ContentOrderCust from "../../../components/orderContentCust/content";

import "./order.css";
export default function Order() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid orderMain ">
        <div className="row">
          <div className="orderForm col-md-6 ">
            <h3>Billing and Delivery Details</h3>
            <div className="map">
              {isLoaded ? (
                <GoogleMap
                  zoom={1}
                  center={{ lat: 44, lng: -40 }}
                  mapContainerClassName="googleMap"
                ></GoogleMap>
              ) : (
                <div>Loading .. </div>
              )}
            </div>
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  First Name
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Second Name
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  Card Number
                </label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-4">
                <label for="inputZip" class="form-label">
                  Expiration Date
                </label>
                <input type="date" class="form-control" id="inputZip" />
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  CVV
                </label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-12 confirmButton ">
                <button
                  type="submit"
                  class="btn btn-success"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/orderHistory");
                  }}
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
          <div className="confirmOrderDetails col-md-6">
            <h3>Order Details</h3>
            <ContentOrderCust />
          </div>
        </div>
      </div>
    </>
  );
}
