const Search = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      find countries <input type="text" onChange={handleSearch} />
    </form>
  );
};

export default Search;
