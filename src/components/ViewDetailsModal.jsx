import React from "react";
import "../App.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ViewDetailModal({ show, setShow, selectedCard }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="modal">
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <div className="modal_title">
              <Modal.Title>
                <h1>{selectedCard.StartupName}</h1>
                <h5>Date : &nbsp;{selectedCard.Date}</h5>
              </Modal.Title>
            </div>
          </Modal.Header>

          <Modal.Body>
            <p></p>
            <p>
              Investors Name :&nbsp;{" "}
              <strong>{selectedCard.InvestorsName + ","}</strong>
            </p>
            <br></br>
            <p>
              City :&nbsp;<strong> {selectedCard.CityLocation}</strong>
            </p>
            <p> Domain :&nbsp; {selectedCard.IndustryVertical}</p>
            <p> Sub-Domain : &nbsp;{selectedCard.SubVertical}</p>
            <br></br>
            <hr></hr>
            <p>
              Funding :&nbsp;{" "}
              {selectedCard.AmountInUSD ? (
                <>
                  <strong>$&nbsp;</strong>
                  {<strong>{selectedCard.AmountInUSD}</strong>}
                </>
              ) : (
                "No Record "
              )}
              <p>
                Investment-Type : &nbsp;{" "}
                {selectedCard.InvestmentType ? (
                  <>
                    <strong>{selectedCard.InvestmentType}</strong>{" "}
                  </>
                ) : (
                  "No Record"
                )}
              </p>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ViewDetailModal;
