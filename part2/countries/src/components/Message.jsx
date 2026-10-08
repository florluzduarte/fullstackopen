const Message = ({ countryCount, countries }) => {
  if (countryCount > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countryCount <= 10 && countryCount >= 2) {
    return (
      <>
        {countries.map((country) => (
          <p key={country.flag}>{country.name.common}</p>
        ))}
      </>
    );
  } else if (countryCount === 1) {
    return (
      <>
        {countries.map((country) => (
          <div key={country.flag}>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km2</p>
            <h2>Languages</h2>
            <ul>
              {Object.values(country.languages).map((language) => (
                <li>{language}</li>
              ))}
            </ul>
            <h2>Flag</h2>
            <img src={country.flags.png} alt={country.flags.alt} />
          </div>
        ))}
      </>
    );
  }
};

export default Message;
