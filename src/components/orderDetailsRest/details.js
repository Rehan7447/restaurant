import { useState } from "react";
import { Modal } from "react-bootstrap";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./details.css";

export default function DetailModal(props) {
  const [show, setShow] = useState(props.show);
  const [status, setStatus] = useState(props.data.DeliveryStatus);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  const DelverButton = () => {
    if (status === "Pending") {
      return (
        <div>
          <div className="d-flex">
            <h5>Delivery Status: </h5>
            <p>Pending</p>
          </div>
          <button
            className="btn btn-success"
            onClick={() => {
              setStatus("Enroute");
            }}
          >
            Send Delivery
          </button>
        </div>
      );
    } else if (status === "Enroute") {
      return (
        <div>
          <div className="d-flex">
            <h5>Delivery Status: </h5>
            <p>Delivery on Its Way </p>
          </div>
          <button
            className="btn btn-success"
            onClick={() => {
              setStatus("Delivered");
            }}
          >
            Deliver
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="d-flex">
            <h5>Delivery Status: </h5>
            <p>Delivered </p>
          </div>
        </div>
      );
    }
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Order Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row detailModalMain">
          <div className="col-md-6 detailInfo ">
            <div className="d-flex">
              <h5>Customer Name: </h5>
              <p>{props.data.Customer_Name} </p>
            </div>
            <div className="d-flex">
              <h5>Order Date: </h5>
              <p>{props.data.Date} </p>
            </div>
            <div className="d-flex">
              <h5>Order Status: </h5>
              <p>{props.data.Status} </p>
            </div>
            <div className="d-flex">
              <h5>Address: </h5>
              <p>{props.data.Address} </p>
            </div>
            <div className="d-flex">
              <h5>Order Status: </h5>
              <p>{props.data.OrderStatus} </p>
            </div>
            {<DelverButton />}
          </div>
          <div className="col-md-6">
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
            <div className="d-flex detailModalPrice">
              <h3>Total Price: </h3>
              <h3>{props.data.Total_Price}</h3>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" onClick={props.showModal}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
