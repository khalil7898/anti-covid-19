import React , { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";



const Popupdetaille = ({hopitale}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="App">
       <Button
              className="btn btn-outline-primary btn-block m-1 "
              onClick={toggle}
            >
              more information
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle} className="modal-header bg-primary">
                More informations about {hopitale.nom}{" "}
              </ModalHeader>
              <ModalBody></ModalBody>
              <label className="ml-3">capacite Total : </label>
              <p className="ml-3">{hopitale.capaciteTotal}</p>
              <label className="ml-3">capacite Corona : </label>
              <p className="ml-3">{hopitale.capaciteCorona}</p>
              <ModalFooter>
                <Button
                  color="secondary"
                  onClick={toggle}
                  className="btn btn-inverse-primary"
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
    </div>
  );
}

export default Popupdetaille;
