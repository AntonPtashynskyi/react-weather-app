export const fetchGeocoding = async (city) => {
  return await fetch(
    `${process.env.REACT_APP_BASE_URL}geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
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
    `${process.env.REACT_APP_BASE_URL}data/2.5/weather?&units=metric&q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
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
