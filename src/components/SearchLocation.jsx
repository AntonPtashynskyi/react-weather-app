import { useState } from "react";

export const SearchLocation = () => {
  const [city, setCity] = useState("");

  const onChange = (e) => {
    setCity(e.currentTarget.value);
  };

  return (
    <div>
      <label>
        Find weather in your city!
        <input
          type="text"
          placeholder="type name of the city..."
          onChange={onChange}
        />
      </label>
    </div>
  );
};
