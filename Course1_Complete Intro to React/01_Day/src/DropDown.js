import React, { useState } from "react";

const useDropDown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = label.toLowerCase();
  const DropDown = () => (
    <label htmlFor="label">
      {label}
      <select
        name={label}
        value={state}
        id={id}
        disabled={options.length === 0}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
      >
        <option value="ALL">ALL</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, DropDown, setState];
};

export default useDropDown;
