import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import ViewDetailModal from "../components/ViewDetailsModal";
import "../App.css";
import { getOverlayDirection } from "react-bootstrap/esm/helpers";
import Skeleton from "../components/Skeleton";
export const Homepage = ({ search }) => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [originalData, setOriginalData] = useState([]);
  const [ifExistInCity, setIfExistInCity] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getStartupApi = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://raw.githubusercontent.com/Foxhog-x/startupAPI/master/startup_Data.json"
      );

      const resData = await response.json();
      setData(resData);
      setOriginalData(resData);
    } catch (error) {
      console.log(error, "something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  // Calling that async function
  useEffect(() => {
    getStartupApi();
  }, []);

  const cityLoc = originalData.map((value) => {
    return value.CityLocation;
  });

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
      console.log(filterCities.length);
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
  const animation = () => {
    for (i = 0; i <= 10; i++) {
      return <Skeleton />;
    }
  };
  return (
    <>
      <div className="select_filter">
        <select onChange={handleCityFilter}>
          <option value={"all"}>All Cities</option>
          {cityNames?.map((value, index) => {
            return <option value={value}>{value}</option>;
          })}
        </select>
      </div>
      <ViewDetailModal
        setShow={setShowModal}
        show={showModal}
        selectedCard={selectedCard}
      />
      <div className="grid_card">
        {searchFunction().map((value, index) => (
          <>
            {isLoading ? (
              <Skeleton />
            ) : (
              <>
                {value === "nodata" ? (
                  <div>
                    `Startup Does not Exist in $
                    {ifExistInCity === "all" ? "Database" : ifExistInCity}`
                  </div>
                ) : (
                  <div>
                    <Cards
                      cardData={value}
                      key={index}
                      handleModalData={handleModalData}
                    />
                  </div>
                )}
              </>
            )}
          </>
        ))}
      </div>
    </>
  );
};
