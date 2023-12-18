import { useState } from "react";
import { Header } from "./layout/Header";
import { Homepage } from "./pages/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <Header setSearch={setSearch} />
      <Homepage search={search} />
    </>
  );
}

export default App;
