import { useState } from "react";
import { Modal } from "react-bootstrap";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export default function CustomModal(props) {
  const [show, setShow] = useState(props.show);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });
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
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex ">
              <h3>Restaurant Name: </h3>
              <h3>{props.data.Resturant_Name} </h3>
            </div>
            <div className="d-flex ">
              <h3>Order Date: </h3>
              <h3>{props.data.Date} </h3>
            </div>
            <div className="d-flex ">
              <h3>Order Status: </h3>
              <h3>{props.data.Status} </h3>
            </div>
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
            <div>
              <h3>Total Price: </h3>
              <h3>{props.data.Total_Price}</h3>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" onClick={() => setShow(!show)}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
