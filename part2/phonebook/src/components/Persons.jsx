import Person from "./Person";

const Persons = ({ searchResults, persons, handleDelete }) => {
  return (
    <>
      {searchResults.length > 0
        ? searchResults.map((person) => (
            <Person person={person} key={person.id} />
          ))
        : persons.map((person) => (
            <Person
              person={person}
              key={person.id}
              handleDelete={handleDelete}
            />
          ))}
    </>
  );
};

export default Persons;
