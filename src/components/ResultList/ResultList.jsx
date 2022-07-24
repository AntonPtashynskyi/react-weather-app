import { nanoid } from "nanoid";
import toast from "react-hot-toast";

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
    try {
      const response = await fetchCurrentForecast(city.name);

      if (!response) {
        throw new Error("Ups!!!");
      }

      setSavedLocation((prevState) => [...prevState, response]);
      setSearch("");
      setCities([]);
    } catch (error) {
      toast(error.message);
    }
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
              title="click to add"
            >
              <p className="cityName">{city.name}</p>
              {city?.state && <p>({city?.state})</p>}
              <p>{city.country}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
