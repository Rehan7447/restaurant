import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function AddCat(props) {
    const [show, setShow] = useState(props.show);
    const [name, setName] = useState("");
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>Add Category</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Category Name: </h4>
                <input placeholder="Category Name" onChange={(e) => { setName(e.target.value) }} />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-success" onClick={() => {
                    props.addCategory(name);
                    props.modalShow();
                }} >Save</button>
                <button className="btn btn-danger" onClick={props.modalShow} >Close</button>
            </Modal.Footer>
        </Modal>
    )
}