import { useEffect, useState } from "react";
import { Header } from "./layout/Header";
import { Homepage } from "./pages/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewDetailModal from "./components/ViewDetailsModal";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);
  const [search, setSearch] = useState("");
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

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              search={search}
              setShowModal={setShowModal}
              originalData={originalData}
              isLoading={isLoading}
              setData={setData}
              data={data}
            />
          }
        />
        <Route
          path="/info/:SNo"
          element={
            <ViewDetailModal
              setShow={setShowModal}
              show={showModal}
              data={data}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
