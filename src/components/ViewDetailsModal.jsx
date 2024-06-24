import { useEffect } from "react";
import "../App.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ViewDetailModal({ show, setShow, data }) {
  const { SNo } = useParams();
  console.log(SNo, "statrup name");

  const filteredData = data?.filter((item) => item.StartupName === String(SNo));

  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navigate(-1);
  };

  useEffect(() => {}, [SNo]);

  return (
    <>
      {filteredData && (
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
                  <h1> {filteredData[0]?.StartupName}</h1>
                  <h5>Date : &nbsp;{filteredData[0].Date} </h5>
                </Modal.Title>
              </div>
            </Modal.Header>

            <Modal.Body>
              <p></p>
              <p>
                Investors Name :&nbsp;{" "}
                <strong>
                  {+","}
                  {filteredData[0]?.InvestorsName}
                </strong>
              </p>
              <br></br>
              <p>
                City :&nbsp;<strong> {filteredData[0]?.CityLocation}</strong>
              </p>
              <p> Domain :&nbsp; {filteredData[0]?.IndustryVertical}</p>
              <p> Sub-Domain : &nbsp;{filteredData[0]?.SubVertical} </p>
              <br></br>
              <hr></hr>
              {/* <p>
              Funding :&nbsp;{" "}
              {   ? (
                <>
                  <strong>$&nbsp;</strong>
                  {<strong>{selectedCard.AmountInUSD}</strong>}
                </>
              ) : (
                "No Record "
              )}
              <p> */}
              {/* Investment-Type : &nbsp;{" "}
                {selectedCard.InvestmentType ? (
                  <>
                    <strong>{selectedCard.InvestmentType}</strong>{" "}
                  </>
                ) : (
                  "No Record"
                )}
              </p>
            </p> */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
}

export default ViewDetailModal;
