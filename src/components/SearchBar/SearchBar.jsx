export const SearchBar = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="query"
        autoComplete="off"
        pattern="^[a-zA-Z]*$"
        title="May contain only letters."
        required
        autoFocus
        placeholder="Enter city name"
      />
      <button type="submit" aria-label="search button">
        Search
      </button>
    </form>
  );
};
