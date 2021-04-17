import React from 'react';
import ReactDOM from 'react-dom';
import Pet  from './Pet';

const App = () => {
  return React.createElement(
    "div",
    { id: "div_app" },
    React.createElement("h1", {}, "Adopt Me !"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      family: "Rex",
    })
  );
};

// Put our component in the 'root' div element
ReactDOM.render(React.createElement(App), document.getElementById("root"));
