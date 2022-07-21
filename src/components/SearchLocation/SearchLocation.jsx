import { useEffect, useState } from "react";

import { useDebounce } from "../../hooks/debounce";
import { fetchGeocoding } from "../../weatherApi/weatherApi";
import { ResultList } from "../index";
import "./searchLocation.style.css";

export const SearchLocation = ({ setSavedLocation }) => {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);
  const debouncedValue = useDebounce(search, 300);

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    if (debouncedValue.length < 1) return;

    const fetchData = async () => {
      const data = await fetchGeocoding(debouncedValue);
      setCities(data);
    };

    fetchData();
  }, [debouncedValue]);

  return (
    <div className="searchContainer">
      <div className="inputWrapper">
        <label htmlFor="search">Find weather in your city</label>
        <input
          className="input"
          id="search"
          type="text"
          placeholder="type name of the city..."
          value={search}
          autoComplete="false"
          onChange={handleChange}
        />
        {cities.length > 0 && (
          <ResultList
            cities={cities}
            search={search}
            setCities={setCities}
            setSearch={setSearch}
            setSavedLocation={setSavedLocation}
          />
        )}
      </div>
    </div>
  );
};
