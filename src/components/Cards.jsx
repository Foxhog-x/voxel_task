import Card from "react-bootstrap/Card";

import "../App.css";
function Cards({ cardData }) {
  return (
    <div className="card_local">
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>{cardData.StartupName}</h2>
          </Card.Title>
          <br></br>
          <Card.Text>
            <p>Year: {cardData.Date.split("/")[2]}</p>
            <br></br>
            <p> City: {cardData.CityLocation}</p>
            <br></br>
            <p>
              Funding:{" "}
              {cardData.AmountInUSD ? (
                <>${cardData.AmountInUSD}</>
              ) : (
                "No Record "
              )}
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
