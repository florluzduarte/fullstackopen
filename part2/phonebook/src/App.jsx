import { useEffect, useState } from "react";
import personsService from "./services/persons";

import Filter from "./components/Filter";
import Notification from "./components/Notification";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const notificationInitialState = {
    message: null,
    type: "message",
  };

  const [notification, setNotification] = useState(notificationInitialState);

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
      setNotification({ message: `Added ${newPerson.name}`, type: "message" });
      setTimeout(() => {
        setNotification(notificationInitialState);
      }, 1500);
      personsService.create(newPerson).then((data) => {
        setPersons(persons.concat(data));
        setNewName("");
        setNewNumber("");
      });
    } else {
      if (
        confirm(
          `${newPerson.name} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        const changedPerson = { ...isNew, number: newPerson.number };
        personsService
          .update(isNew.id, changedPerson)
          .then((resp) => {
            setNotification({
              message: `Phone number updated: ${isNew.name}`,
              type: "message",
            });
            setTimeout(() => {
              setNotification(notificationInitialState);
            }, 2000);
            setPersons(
              persons.map((p) => (p.id === resp.id ? changedPerson : p)),
            );
            setNewName("");
            setNewNumber("");
          })
          .catch(() => {
            setNotification({
              message: `${isNew.name} was already deleted from server`,
              type: "error",
            });
            setTimeout(() => {
              setNotification(notificationInitialState);
            }, 2000);
            setPersons(persons.filter((p) => p.id !== isNew.id));
            setNewName("");
            setNewNumber("");
          });
      }
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
        setNotification({
          message: `Information of '${person.name}' has already been removed from server`,
          type: "error",
        });
        setTimeout(() => {
          setNotification(notificationInitialState);
        }, 2000);
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
      <Notification message={notification.message} type={notification.type} />
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
