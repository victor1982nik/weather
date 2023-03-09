import { nanoid } from "nanoid";
import { Button, Container, Form, Input} from "./SearchBar.styled";
import { useEffect, useState } from "react";
import { getCities } from "../api/fetchData";

export const SearchBar = ({  
  onSubmit,   
  onClick  
}) => {
  const [query, setQuery] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (!query) return;
    const getCitiesByQuery = async (query) => {
      const response = await getCities(query);
      // console.log(response.data);
      setCities(response.data);
    };
    getCitiesByQuery(query);
  }, [query]);

  const handleChangeInput = (e) => {    
    const input = e.target;
    setQuery(input.value);
    setIsSelected(true);
  };
  const handleClick = (city) => {
    setIsSelected(false);
   onClick(city)
}

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
            value={query}
            onChange={handleChangeInput}
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
            {cities.map((city, index) => (
              <li
                key={nanoid()}
                style={{
                  position: "absolute",
                  top: index * 20,                  
                }}
              >
                <Button onClick={()=>handleClick(city)}>
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
