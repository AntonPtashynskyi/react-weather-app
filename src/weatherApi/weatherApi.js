const BASE_URL = "http://api.openweathermap.org/";
const API_KEY = "3a7daf5c4f01256a2a38e61ecd5373d6";

export const fetchGeocoding = async (city) => {
  return await fetch(
    `${BASE_URL}geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      return res.json();
    })
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const fetchCurrentForecast = async (cityName) => {
  return await fetch(
    `${BASE_URL}data/2.5/weather?&units=metric&q=${cityName}&appid=${API_KEY}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Cant get the data");
      }

      return res.json();
    })
    .then((data) => data)
    .catch((error) => console.log(error));
};
