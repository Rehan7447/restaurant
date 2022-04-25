import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./editMenuBanner.css";

export default function EditMenuBanner(props) {
  const [show, setShow] = useState(props.show);
  const [image, setImage] = useState(props.image);
  const [input, setInput] = useState();
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>Edit Banner</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modalBannerImage">
          <h3>Preview</h3>
          <img src={image} alt="current banner" />
        </div>
        <div>
          <h3>New Image</h3>
          <form>
            <input type="file" />
            <input
              type="text"
              placeholder="image address"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setImage(input);
              }}
            >
              Save
            </button>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-success"
          onClick={() => {
            props.changeBanner(image);
            props.modalShow();
          }}
        >
          Save
        </button>
        <button className="btn btn-danger" onClick={props.modalShow}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
