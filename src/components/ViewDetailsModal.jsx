import React from "react";
import "../App.css";
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
          <div className="modal_title">
            <Modal.Title>
              <h1>{selectedCard.StartupName}</h1>
              <h5>Year:{selectedCard.Date}</h5>
            </Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body>
          <p></p>
          <p>
            Investors Name: <strong>{selectedCard.InvestorsName + ","}</strong>
          </p>
          <br></br>
          <p>
            {" "}
            City: <strong>{selectedCard.CityLocation}</strong>
          </p>
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
    </>
  );
}

export default ViewDetailModal;
