/* eslint-disable react/prop-types */
import { useState } from "react";
import Cards from "../components/Cards";
import ViewDetailModal from "../components/ViewDetailsModal";
import "../App.css";
import Skeleton from "../components/Skeleton";
export const Homepage = ({
  search,
  setShowModal,
  originalData,
  data,
  isLoading,
  setData,
}) => {
  const [ifExistInCity, setIfExistInCity] = useState("");

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
      const filterCities = originalData.filter((value) => {
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

  // const animation = () => {
  //   for (i = 0; i <= 10; i++) {
  //     return <Skeleton />;
  //   }
  // };
  return (
    <>
      <div className="select_filter">
        <select onChange={handleCityFilter}>
          <option value={"all"}>All Cities</option>
          {cityNames?.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
      <ViewDetailModal />
      <div className="grid_card">
        {searchFunction().map((value, index) => (
          <>
            {isLoading ? (
              <Skeleton key={index} />
            ) : (
              <>
                {value === "nodata" ? (
                  <div key={index}>
                    `Startup Does not Exist in $
                    {ifExistInCity === "all" ? "Database" : ifExistInCity}`
                  </div>
                ) : (
                  <div>
                    <Cards
                      cardData={value}
                      key={index}
                      setShowModal={setShowModal}
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
