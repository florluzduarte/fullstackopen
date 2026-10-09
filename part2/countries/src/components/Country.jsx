const Country = ({ country, weatherData, iconBaseUrl }) => {
  return (
    <div key={country.flag}>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km2</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <h2>Flag</h2>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>Weather in {country.capital}</h2>
      {weatherData && (
        <>
          <p>Temperature: {(weatherData.main.temp / 32).toFixed(2)} Celsius</p>
          <img
            src={`${iconBaseUrl}/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </>
      )}
    </div>
  );
};

export default Country;
