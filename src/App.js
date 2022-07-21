import { useState } from "react";

import "./App.css";
import { SearchLocation, SavedCities } from "./components/index";

function App() {
  const [savedLocation, setSavedLocation] = useState([]);

  return (
    <div className="wrapper">
      <SearchLocation setSavedLocation={setSavedLocation} />
      <SavedCities savedLocation={savedLocation} />
    </div>
  );
}

export default App;
