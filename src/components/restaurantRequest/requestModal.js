import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const RequestModal = (props) => {
  const [show, setShow] = useState(props.show);
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
          <div className="col-md-12 detailInfo ">
            <div className="d-flex">
              <h5>Restaurant Name: </h5>
              <p>{props.data.Restaurant_Name} </p>
            </div>
            <div className="d-flex">
              <h5>Date: </h5>
              <p>{props.data.Date} </p>
            </div>
            <div className="d-flex">
              <h5>Address: </h5>
              <p>{props.data.Address} </p>
            </div>
            <div className="d-flex">
              <h5>Request: </h5>
              <p>{props.data.Request} </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-between w-100 ">
          {props.data.Request === "Pending" ? (
            <div className="d-flex justify-content-between">
              <button
                style={{ marginRight: "20px" }}
                className="btn btn-danger"
                onClick={props.showModal}
              >
                Reject
              </button>
              <button className="btn btn-success" onClick={props.showModal}>
                Accept
              </button>
            </div>
          ) : (
            <></>
          )}
          <button className="btn btn-danger" onClick={props.showModal}>
            Close
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default RequestModal;
