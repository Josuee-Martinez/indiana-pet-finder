import React from 'react'
import './animals.css'

function AnimalCard({animal}) {
    console.log(animal)
  return (
    <div className="animal-wrapper">
      <img src={animal?.primary_photo_cropped?.medium} alt="pet" />
      <h2>{animal?.name}</h2>
      <ul>

            <li>status: {animal?.status}</li>
          <li>Age: {animal?.age}</li>
          <li>size: {animal?.size} </li>
      </ul>
    </div>
  );
}

export default AnimalCard