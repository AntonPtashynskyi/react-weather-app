import { useState } from "react";
import { useDebounce } from "../hooks/debounce";

export const SearchLocation = () => {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 300);

  return (
    <div>
      <label>
        Find weather in your city!
        <input
          type="text"
          placeholder="type name of the city..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </label>
      <div></div>
    </div>
  );
};
