import axios from "axios";
import { useEffect, useState } from "react";
import Message from "./components/Message";
import Search from "./components/Search";

function App() {
  const [countries, setCountries] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountried] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((resp) => setCountries(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    if (countries) {
      setFilteredCountried(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(event.target.value),
        ),
      );
      setSearchTerm("");
    }
  };

  const countryCount =
    filteredCountries && filteredCountries.length !== 0
      ? filteredCountries.length
      : countries
        ? countries.length
        : 250;

  return (
    <>
      <Search handleSearch={handleSearch} />
      <Message countryCount={countryCount} countries={filteredCountries} />
    </>
  );
}

export default App;
