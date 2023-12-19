import React from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ViewDetailModal({ show, setShow, selectedCard }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
          <Modal.Title>{selectedCard.StartupName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Year: {selectedCard.Date}</p>
          <p>Investors Name: {selectedCard.InvestorsName}</p>
          <br></br>
          <p> City: {selectedCard.CityLocation}</p>
          <p> Domain: {selectedCard.IndustryVertical}</p>
          <p> Sub-Domain: {selectedCard.SubVertical}</p>
          <br></br>
          <hr></hr>
          <p>
            Funding:{" "}
            {selectedCard.AmountInUSD ? (
              <>
                <strong>$</strong>
                {<strong>{selectedCard.AmountInUSD}</strong>}
              </>
            ) : (
              "No Record "
            )}
            <p>
              Investment-Type:{" "}
              {selectedCard.InvestmentType ? (
                <>{selectedCard.InvestmentType} </>
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
    </>
  );
}

export default ViewDetailModal;
