export const ResultList = ({ cities }) => {
  return (
    <div>
      <ul>
        {cities &&
          cities.map((city) => (
            <li key={city.id}>
              <p>{city.name}</p>
              <span> info: </span>
            </li>
          ))}
      </ul>
    </div>
  );
};
