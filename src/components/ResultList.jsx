import { useEffect } from "react";
import { nanoid } from "nanoid";

export const ResultList = ({ cities, search, setCities }) => {
  const handleCityClick = (city) => {
    console.log(city.lat, city.lon);
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
