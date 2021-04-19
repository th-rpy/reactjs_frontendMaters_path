import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <div id="div_id">
        <h1> Adopt Me ! </h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

// Put our component in the 'root' div element
ReactDOM.render(<App />, document.getElementById("root"));
