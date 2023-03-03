import { v4 as uuidv4 } from "uuid";
import { Button } from "./SearchBar.styled";

export const SearchBar = ({
  inputText,
  onSubmit,
  onChange,
  citiesList,
  Onclick,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="query"
        pattern="^[a-zA-Z]*$"
        title="May contain only letters."
        placeholder="Enter city name"
        value={inputText}
        onChange={onChange}
      />
      <ul>
        {citiesList.map((city) => (
          <li key={uuidv4()}>
            <Button onClick={Onclick(city)}>
              {city.name}, {city.state}, {city.country}
            </Button>
          </li>
        ))}
      </ul>
      <button type="submit" aria-label="search button">
        Search
      </button>
    </form>
  );
};
