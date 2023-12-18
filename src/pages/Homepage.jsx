import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
export const Homepage = ({ search }) => {
  const [data, setData] = useState([]);

  const getStartupApi = async () => {
    const response = await fetch("http://localhost:3000/startups/");

    var data = await response.json();
    setData(data);
  };
  // Calling that async function
  useEffect(() => {
    getStartupApi();
  }, []);

  console.log(data);
  console.log(search, "search");

  const searchFunction = () => {
    let filterData = data;
    if (search) {
      filterData = filterData.filter((value) =>
        value.StartupName.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filterData;
  };

  return (
    <div className="main_container">
      <div className="grid_card">
        {searchFunction().map((value, index) => (
          <Cards cardData={value} key={index} />
        ))}
      </div>
    </div>
  );
};
