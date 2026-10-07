import axios from "axios";
import { useEffect, useState } from "react";
import Message from "./components/Message";
import Search from "./components/Search";

function App() {
  const [countries, setCountries] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((resp) => setCountries(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    if (countries !== null) {
      setCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(event.target.value),
        ),
      );
    }
  };

  console.log(countries);

  return (
    <>
      <Search handleSearch={handleSearch} />
      <Message
        countryCount={countries ? countries.length : 0}
        countries={countries}
      />
    </>
  );
}

export default App;
