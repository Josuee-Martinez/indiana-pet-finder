import React from 'react'
import "./animals.css"
import { useAnimalStore } from "../../utility/AnimalData";
import AnimalCard from './AnimalCard'


function AnimalContainer({children}) {
    const [state, setAnimalState] = useAnimalStore()
    const {data} = state;

  return (
    <div className="animal-container">{!state ? null : data?.animals.map(animal =>{
        return <AnimalCard animal={animal} />
    })}</div>
  )
}

export default AnimalContainer