import { useEffect } from "react";
import { nanoid } from "nanoid";

import { fetchCurrentForecast } from "../weatherApi/weatherApi";

export const ResultList = ({ cities, search, setCities, setSavedLocation }) => {
  const handleCityClick = async (city) => {
    const response = await fetchCurrentForecast(city.lat, city.lon);
    setSavedLocation((prevState) => [...prevState, response]);
    setCities([]);
  };

  useEffect(() => {
    if (search.length < 3) {
      setCities([]);
    }
  }, [search.length, setCities]);

  return (
    <div>
      <ul>
        {cities?.map((city) => (
          <li key={nanoid()} onClick={() => handleCityClick(city)}>
            <p>{city.name}</p>
            <p>{city.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
