import { nanoid } from "nanoid";

import "./resultList.style.css";
import { fetchCurrentForecast } from "../../weatherApi/weatherApi";

export const ResultList = ({
  cities,
  setCities,
  setSavedLocation,
  setSearch,
  dropdown,
}) => {
  const handleCityClick = async (city) => {
    const response = await fetchCurrentForecast(city.lat, city.lon);
    setSavedLocation((prevState) => [...prevState, response]);
    setSearch("");
    setCities([]);
  };

  return (
    <>
      {dropdown && (
        <ul className="resultList">
          {cities?.map((city) => (
            <li
              className="resultItem"
              key={nanoid()}
              onClick={() => handleCityClick(city)}
            >
              <p className="cityName">{city.name}</p>
              {city?.state && <p>({city?.state})</p>}
              <p>{city.country}</p>
              <span className="hide">Click to add</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
