import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function AddDish(props) {
  const [show, setShow] = useState(props.show);
  const [cat, setCat] = useState("");
  const [dish, setDish] = useState({
    name: "",
    price: 0,
    desc: "",
    img: "",
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
          <h3>Add Dish</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h4>Category Name: </h4>
          <input
            placeholder="Category Name"
            onChange={(e) => {
              setCat(e.target.value);
            }}
          />
        </div>
        <div>
          <h4>Dish Details: </h4>
          <input
            placeholder="Dish Name"
            type="text"
            onChange={(e) => {
              {
                var temp = dish;
                temp.name = e.target.value;
                setDish(temp);
              }
            }}
          />
          <input
            placeholder="Price"
            type="number"
            onChange={(e) => {
              {
                var temp = dish;
                temp.price = e.target.value + "$";
                setDish(temp);
              }
            }}
          />
          <input
            placeholder="Description"
            type="text"
            onChange={(e) => {
              {
                var temp = dish;
                temp.desc = e.target.value;
                setDish(temp);
              }
            }}
          />
          <input
            placeholder="Image"
            type="text"
            onChange={(e) => {
              {
                var temp = dish;
                temp.img = e.target.value;
                setDish(temp);
              }
            }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-success"
          onClick={() => {
            props.addDish(cat, dish);
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
