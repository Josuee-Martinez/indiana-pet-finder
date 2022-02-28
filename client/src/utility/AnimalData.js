import React, { useState, useContext, createContext } from "react";

export const AnimalContext = createContext();

export const AnimalProvider = (props) => {
  const [state, setAnimalState] = useState({
  });

  return (
    <AnimalContext.Provider value={[state, setAnimalState]}>
      {props.children}
    </AnimalContext.Provider>
  );
};

export const useAnimalStore = () => useContext(AnimalContext);
