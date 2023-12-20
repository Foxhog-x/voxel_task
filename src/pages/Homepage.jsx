import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import ViewDetailModal from "../components/ViewDetailsModal";
import "../App.css";
import { getOverlayDirection } from "react-bootstrap/esm/helpers";
export const Homepage = ({ search }) => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [originalData, setOriginalData] = useState([]);
  const [ifExistInCity, setIfExistInCity] = useState("");

  const getStartupApi = async () => {
    const response = await fetch("http://localhost:3000/startups/");

    var data = await response.json();
    setData(data);
    setOriginalData(data);
  };
  // Calling that async function
  useEffect(() => {
    getStartupApi();
  }, []);

  const cityLoc = originalData.map((value) => {
    return value.CityLocation;
  });
  // const cityName = cityLoc.filter(
  //   (value, index) => cityLoc.indexOf(value) === index
  // );

  const cityNames = [...new Set(cityLoc)];

  const handleCityFilter = (e) => {
    let city = e.target.value;
    setIfExistInCity(city);
    if (city === "all") {
      setData(originalData);
    } else {
      const filterCities = originalData.filter((value, index) => {
        return value.CityLocation === city;
      });
      setData(filterCities);
    }
  };
  const searchFunction = () => {
    let filterData = data;
    if (search) {
      filterData = filterData.filter((value) =>
        value.StartupName.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filterData.length ? filterData : ["nodata"];
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
      <div className="select_filter">
        <select onChange={handleCityFilter}>
          <option value={"all"}>All Cities</option>
          {cityNames?.map((value, index) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
      </div>

      <div className="grid_card">
        {searchFunction().map((value, index) => {
          return value === "nodata" ? (
            `Startup Does not Exist in ${
              ifExistInCity === "all" ? "Database" : ifExistInCity
            }`
          ) : (
            <Cards
              cardData={value}
              key={index}
              handleModalData={handleModalData}
            />
          );
        })}
      </div>
    </div>
  );
};
