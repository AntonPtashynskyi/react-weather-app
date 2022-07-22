import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import "./App.css";
import { SearchLocation, SavedCities } from "./components/index";

function App() {
  const [savedLocation, setSavedLocation] = useState(() => {
    const localData = localStorage.getItem("cities");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(savedLocation));
  }, [savedLocation]);

  return (
    <div className="wrapper">
      <SearchLocation setSavedLocation={setSavedLocation} />
      <SavedCities
        savedLocation={savedLocation}
        setSavedLocation={setSavedLocation}
      />
      <Toaster />
    </div>
  );
}

export default App;
