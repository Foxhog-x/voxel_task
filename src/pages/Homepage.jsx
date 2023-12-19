import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import ViewDetailModal from "../components/ViewDetailsModal";

export const Homepage = ({ search }) => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const getStartupApi = async () => {
    const response = await fetch("http://localhost:3000/startups/");

    var data = await response.json();
    setData(data);
  };
  // Calling that async function
  useEffect(() => {
    getStartupApi();
  }, []);

  const searchFunction = () => {
    let filterData = data;
    if (search) {
      filterData = filterData.filter((value) =>
        value.StartupName.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filterData;
  };
  const handleModalData = (cardData) => {
    setSelectedCard(cardData);
    setShowModal(true);
  };

  return (
    <div className="main_container">
      <ViewDetailModal
        setShow={setShowModal}
        show={showModal}
        selectedCard={selectedCard}
      />
      <div className="grid_card">
        {searchFunction().map((value, index) => (
          <Cards
            cardData={value}
            key={index}
            handleModalData={handleModalData}
          />
        ))}
      </div>
    </div>
  );
};
