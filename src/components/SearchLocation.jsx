import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";

import { fetchGeocoding } from "../weatherApi/weatherApi";
import { ResultList } from "./index";

export const SearchLocation = ({ setSavedLocation }) => {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);
  const debouncedValue = useDebounce(search, 300);

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    if (debouncedValue.length < 3) {
      return;
    }

    const fetchData = async () => {
      const data = await fetchGeocoding(debouncedValue);
      setCities(data);
    };

    fetchData();
  }, [debouncedValue, search.length]);

  return (
    <div className="inputWrapper">
      <label>
        Find weather in your city!
        <input
          type="text"
          placeholder="type name of the city..."
          value={search}
          onChange={handleChange}
        />
      </label>
      <ResultList
        cities={cities}
        search={search}
        setCities={setCities}
        setSavedLocation={setSavedLocation}
      />
    </div>
  );
};
