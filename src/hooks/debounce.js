import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const debounceHandler = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(debounceHandler);
  }, [value, delay]);

  return debounce;
};
