const BASE_URL = "http://api.openweathermap.org/geo/1.0/direct?";
const API_KEY = "3a7daf5c4f01256a2a38e61ecd5373d6";

export const weatherApi = async () => {
  const response = await fetch(`${BASE_URL}q=London&limit=5&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return response;
};
