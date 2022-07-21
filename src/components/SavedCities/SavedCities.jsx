import "./savedCities.syle.css";
import { getCurrentDate } from "../../utilits/getCurretnDate";

export const SavedCities = ({ savedLocation }) => {
  const date = getCurrentDate("-");

  return (
    <div className="savedCitiesContainer">
      <h1>Saved cities</h1>
      <ul className="savedCitiesList">
        {savedLocation &&
          savedLocation.map((location) => (
            <li key={location.id} className="savedCities">
              <p className="locationName">{location.name}</p>
              <p>{date}</p>
              <p className="temperature">{location.main.temp} (st C)</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
