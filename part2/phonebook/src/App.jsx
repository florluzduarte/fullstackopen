import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      id: new Date().toString(),
    };

    const isNew = persons.find(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase(),
    );

    if (isNew === undefined) {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newPerson.name} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filterResults = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchResults(filterResults);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
        search={search}
      />
      <h2>Add a new</h2>
      <PersonForm
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchResults={searchResults} />
    </div>
  );
};

export default App;
