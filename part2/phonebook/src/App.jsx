import { useState } from "react";

const dummyData = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];

const App = () => {
  const [persons, setPersons] = useState(dummyData);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      id: new Date().getDate().toString(),
    };

    const isNew = persons.find(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase(),
    );

    if (isNew === undefined) {
      setPersons(persons.concat(newPerson));
    } else {
      alert(`${newPerson.name} is already added to phonebook`);
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
    console.log("search executed");
    const filterResults = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase()),
    );
    console.log("filtered list", filterResults);
    setSearchResults(filterResults);
  };

  const handleSearch = (event) => {
    console.log("search: ", event.target.value);
    setSearch(event.target.value);
  };

  console.log(searchResults);

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSearchSubmit}>
        filter shown with <input value={search} onChange={handleSearch} />
      </form>
      <h2>Add new contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchResults.length > 0
        ? searchResults.map((person) => (
            <p key={person.id}>
              {person.name} {person.number}
            </p>
          ))
        : persons.map((person) => (
            <p key={person.id}>
              {person.name} {person.number}
            </p>
          ))}
    </div>
  );
};

export default App;
