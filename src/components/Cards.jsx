import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";
function Cards({ cardData, handleModalData }) {
  return (
    <div className="card_local">
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>{cardData?.StartupName}</h2>
          </Card.Title>
          <br></br>
          <Card.Text>
            <p>Year: {cardData?.Date?.split("/")[2]}</p>
            City:{cardData?.CityLocation}&nbsp; Funding:{" "}
            {cardData?.AmountInUSD ? (
              <>${cardData?.AmountInUSD}</>
            ) : (
              "No Record "
            )}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button onClick={() => handleModalData(cardData)}>
            View Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
