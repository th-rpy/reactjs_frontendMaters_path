import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Montréal, QC");
  const [animal, setAnimal] = useState("Dog");

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

        <label htmlFor="animal">
          Animal:
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option value="ALL">ALL</option>
            {ANIMALS.map((animal) => (
              <option value={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
      <p>{location.split(",")}</p>
    </div>
  );
};

export default SearchParams;
