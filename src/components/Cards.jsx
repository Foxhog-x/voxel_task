import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css'
function Cards({cardData}) {
   
  return (
   <div className='card_local'>
     <Card  >
      <Card.Body>
        <Card.Title><h2>{cardData.StartupName}</h2></Card.Title>
        <br></br>
        <Card.Text>
          Year: {cardData.Date.split('/')[2]}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <p>City: {cardData.CityLocation}</p>
        <br>
        </br>
        <hr>
        </hr>
        <p>Funding: {cardData.AmountInUSD ? <>${cardData.AmountInUSD}</>: 'No Record Available'}</p>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
   </div>
  );
}

export default Cards;