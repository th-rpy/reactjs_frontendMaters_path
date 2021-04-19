import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./DropDown.js";

const SearchParams = () => {
  const [location, setLocation] = useState("Montréal, QC");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropDown("Animal", "Dog", ANIMALS);
  const [breed, BreedDropDown] = useDropDown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location:
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            id="location"
          />
        </label>

        <AnimalDropDown />
        <BreedDropDown />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
