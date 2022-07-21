export const SavedCities = ({ savedLocation }) => {
  return (
    <>
      <p>Saved cities</p>
      <ul>
        {savedLocation &&
          savedLocation.map((location) => (
            <li key={location.id}>{location.name}</li>
          ))}
      </ul>
    </>
  );
};
