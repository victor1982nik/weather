import { nanoid } from 'nanoid';
import { Button } from "./SearchBar.styled";

export const SearchBar = ({
  inputText,
  onSubmit,
  onChange,
  citiesList,
  onClick,
  isSelected
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
      <button type="submit" aria-label="search button">Search</button>
      {!isSelected && (<ul>
        {citiesList.map((city) => (
          <li key={nanoid()}>
            <Button onClick={()=>onClick(city)}>
              {city.name}, {city.state}, {city.country}
            </Button>
          </li>
        ))}
      </ul>)}
      
        
    </form>
  );
};
