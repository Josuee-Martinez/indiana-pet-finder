import React from "react";
import "./animals.css";

function AnimalCard({ animal }) {
  
  return (
    <>
      <img
        className="pet-img"
        src={animal?.primary_photo_cropped?.medium}
        alt="pet"
      />
      <h2>{animal?.name}</h2>
      <ul>
        <li>
          <strong>status: </strong>
          {animal?.status}
        </li>
        <li>
          <strong>Age:</strong> {animal?.age}
        </li>
        <li>
          <strong>size:</strong> {animal?.size}{" "}
        </li>
        <li>
          <strong>Location: </strong>
          {animal?.contact?.address?.city}
        </li>
      </ul>
    </>
  );
}

export default AnimalCard;
