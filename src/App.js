import { useState } from "react";
import { Toaster } from "react-hot-toast";

import "./App.css";
import { SearchLocation, SavedCities } from "./components/index";

function App() {
  const [savedLocation, setSavedLocation] = useState([]);

  return (
    <div className="wrapper">
      <SearchLocation setSavedLocation={setSavedLocation} />
      <SavedCities savedLocation={savedLocation} />
      <Toaster />
    </div>
  );
}

export default App;
