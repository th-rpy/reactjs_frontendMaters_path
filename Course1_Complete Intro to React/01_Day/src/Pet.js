import React from "react";

// Create our first React Component
export default function Pet(props) {
  const { name, animal, breed, media, location, id } = props;
  let hero = "https://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div1 className="image-container">
        <img src={hero} alt={name} />
      </div1>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
}
