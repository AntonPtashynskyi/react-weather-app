import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useDebounce } from "../../hooks/debounce";
import { fetchGeocoding } from "../../weatherApi/weatherApi";
import { ResultList } from "../index";
import "./searchLocation.style.css";

export const SearchLocation = ({ setSavedLocation }) => {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const debouncedValue = useDebounce(search, 300);

  const handleChange = (e) => {
    const value = e.currentTarget.value;

    setSearch(value.toLowerCase());
  };

  useEffect(() => {
    if (debouncedValue.length < 2) {
      setDropdown(false);
      setCities([]);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await fetchGeocoding(debouncedValue);

        if (!data) {
          throw new Error("Something went wrong");
        }

        if (data?.length === 0) {
          toast.error("We cant find this city", {
            duration: 1500,
            position: "top-right",
            icon: "😥",
          });
        }

        setDropdown(debouncedValue.length > 1 && data?.length > 0);
        setCities(data);
      } catch (error) {
        toast(error.message, {
          duration: 2000,
          icon: "😟",
        });
      }
    };

    fetchData();
  }, [debouncedValue]);

  return (
    <div className="searchContainer">
      <div className="inputWrapper">
        <label htmlFor="search">Find weather in your city</label>
        <input
          className="input"
          id="search"
          type="text"
          placeholder="type name of the city.. (at least 2 letters)"
          value={search}
          autoComplete="off"
          onChange={handleChange}
          onFocus={() => setDropdown(true)}
        />
        {dropdown && (
          <ResultList
            cities={cities}
            search={search}
            setCities={setCities}
            setSearch={setSearch}
            setSavedLocation={setSavedLocation}
            dropdown={dropdown}
            setDropdown={setDropdown}
          />
        )}
      </div>
    </div>
  );
};
