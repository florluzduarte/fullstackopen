import { useEffect, useState } from "react";
import weather from "../services/weather";
import CountriesList from "./CountriesList";
import Country from "./Country";

const Message = ({ countryCount, countries, handleSelectCountry }) => {
  const [weatherData, setWeatherData] = useState(null);
  const iconBaseUrl = "https://openweathermap.org/payload/api/media/file";

  useEffect(() => {
    if (countries && countries.length === 1) {
      weather
        .getWeather(countries[0].capital)
        .then((resp) => setWeatherData(resp));
    }
  }, [countries]);

  if (countryCount > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countryCount <= 10 && countryCount >= 2) {
    return (
      <CountriesList
        countries={countries}
        handleSelectCountry={handleSelectCountry}
      />
    );
  } else if (countryCount === 1) {
    return (
      <Country
        country={countries[0]}
        weatherData={weatherData}
        iconBaseUrl={iconBaseUrl}
      />
    );
  }
};

export default Message;
