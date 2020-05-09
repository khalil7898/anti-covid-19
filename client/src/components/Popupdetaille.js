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
               <ModalBody>
                  <label className="ml-3"> Région: </label>
                  <p className="ml-3">{hopitale.adress.nom}</p>
                  <label className="ml-3">Nombre total de lits: </label>
                  <p className="ml-3">{hopitale.capaciteTotal}</p>
                  <label className="ml-3">
                    Nombre de lits consacrés à la maladie corona:{" "}
                  </label>
                  <p className="ml-3">{hopitale.capaciteCorona}</p>
                  <label className="ml-3">Nombre de lits de récupération </label>
                  <p className="ml-3">{hopitale.capaciteRea}</p>
                  <label className="ml-3">
                    Nombre totales des patients hospitalisés{" "}
                  </label>
                  <p className="ml-3">{hopitale.totalCharger}</p>
                  <label className="ml-3">Nombre de personnes avec corona </label>
                  <p className="ml-3">{hopitale.coronaCharger}</p>
                  <label className="ml-3">
                    nombre de patients corona en réanimation
                  </label>
                  <p className="ml-3">{hopitale.reacharger}</p>
        </ModalBody>
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
