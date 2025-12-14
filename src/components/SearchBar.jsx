function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by course name or category..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-input"
    />
  );
}

export default SearchBar;
