import React from "react";

// Create our first React Component
export default function Pet(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.animal}</h1>
      <h1>{props.family}</h1>
    </div>
  );
}
