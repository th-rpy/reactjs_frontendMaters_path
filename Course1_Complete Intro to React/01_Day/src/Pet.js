import React from 'react';

// Create our first React Component
export default function  Pet (props)  {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.family),
  ]);
};
