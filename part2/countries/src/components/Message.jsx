const Message = ({ countryCount, countries }) => {
  if (countryCount > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countryCount <= 10 && countryCount !== 0) {
    return (
      <>
        {countries.map((country) => (
          <p key={country.flag}>{country.name.common}</p>
        ))}
      </>
    );
  }
};

export default Message;
