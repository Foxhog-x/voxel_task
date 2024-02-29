import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";
import Skeleton from "./Skeleton";
import { motion } from "framer-motion";
function Cards({ cardData, handleModalData, isLoading }) {
  return (
    <motion.div whileHover={{ scale: 0.95 }} className="card_local">
      {isLoading ? (
        <Skeleton />
      ) : (
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
      )}
    </motion.div>
  );
}

export default Cards;
