const CountriesList = ({ countries, handleSelectCountry }) => {
  return (
    <>
      {countries.map((country) => (
        <p key={country.flag}>
          {country.name.common}{" "}
          <button onClick={() => handleSelectCountry(country)}>Show</button>
        </p>
      ))}
    </>
  );
};

export default CountriesList;
