import React from 'react';
import ReactDOM from 'react-dom';

// Create our first React Component
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.family),
  ]);
};

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
