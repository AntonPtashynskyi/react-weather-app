const BASE_URL = "http://api.openweathermap.org/";
const API_KEY = "3a7daf5c4f01256a2a38e61ecd5373d6";

export const fetchGeocoding = async (city) => {
  return await fetch(
    `${BASE_URL}geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const fetchCurrentForecast = async (lat, lon) => {
  return await fetch(
    `${BASE_URL}data/2.5/weather?&units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
};
