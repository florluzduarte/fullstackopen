const Search = ({ handleSearch }) => {
  return (
    <form action="">
      find countries <input type="text" onChange={handleSearch} />
    </form>
  );
};

export default Search;
