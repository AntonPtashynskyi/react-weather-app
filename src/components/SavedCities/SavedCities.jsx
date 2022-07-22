import { BsFillTrashFill } from "react-icons/bs";

import "./savedCities.style.css";
import { getCurrentDate } from "../../utilities/getCurrentDate";

export const SavedCities = ({ savedLocation, setSavedLocation }) => {
  const date = getCurrentDate("-");

  const handleDelete = (id) => {
    setSavedLocation((prevSate) => prevSate.filter((item) => item.id !== id));
  };

  return (
    <div className="savedCitiesContainer">
      <h2>Saved cities</h2>
      {savedLocation.length ? (
        <ul className="savedCitiesList">
          {savedLocation.map((location) => (
            <li key={location.id} className="savedCities">
              <span
                className="deleteIcon"
                onClick={() => handleDelete(location.id)}
              >
                <BsFillTrashFill />
              </span>
              <p className="locationName">{location.name}</p>
              <p>{date}</p>
              <p className="temperature">{location.main.temp} (st C)</p>
            </li>
          ))}
        </ul>
      ) : (
        <p> There is no added cities yet </p>
      )}
    </div>
  );
};
