import { useEffect, useState } from "react";
import personsService from "./services/persons";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const isNew = persons.find(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase(),
    );

    if (isNew === undefined) {
      personsService.create(newPerson).then((data) => {
        setPersons(persons.concat(data));
        setNewName("");
        setNewNumber("");
      });
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

  const handleDelete = (person) => {
    personsService
      .deletePerson(person.id)
      .then(() => {
        confirm(`Delete ${person.name}?`)
          ? setPersons(persons.filter((p) => p.id !== person.id))
          : "";
      })
      .catch(() => {
        alert(`the note '${person.name}' was already deleted from server`);
        setPersons(persons.filter((p) => p.id !== person.id));
      });
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
      <Persons
        persons={persons}
        searchResults={searchResults}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
