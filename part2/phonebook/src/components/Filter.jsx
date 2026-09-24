const Filter = ({ handleSearchSubmit, search, handleSearch }) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      filter shown with <input value={search} onChange={handleSearch} />
    </form>
  );
};

export default Filter;
