import { nanoid } from "nanoid";
import { Button, Container, Form, Input, SubmitButton } from "./SearchBar.styled";
// import { FaSearch } from 'react-icons/fa';

export const SearchBar = ({
  inputText,
  onSubmit,
  onChange,
  citiesList,
  onClick,
  isSelected,
}) => {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <div >
          <Input
            type="text"
            name="query"
            pattern="^[a-zA-Z\s]*$"
            title="May contain only letters."
            placeholder="Enter city name"
            value={inputText}
            onChange={onChange}
          />
          {/* <SubmitButton
            type="submit"
            aria-label="search button"
            onSubmit={onSubmit}
          >
            <FaSearch />
          </SubmitButton> */}
        </div>
        {isSelected && (
          <ul style={{ position: "relative", width:"175px", left:"50%", transform: "translate(-50%)" }}>
            {citiesList.map((city, index) => (
              <li
                key={nanoid()}
                style={{
                  position: "absolute",
                  top: index * 20,                  
                }}
              >
                <Button onClick={() => onClick(city)}>
                  {city.name}, {city.state}, {city.country}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </Form>
    </Container>
  );
};
