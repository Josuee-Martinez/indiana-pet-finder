import React from "react";
import "./animals.css";
import { useAnimalStore } from "../../utility/AnimalData";
import AnimalCard from "./AnimalCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AnimalContainer({ children }) {
  const [state, setAnimalState] = useAnimalStore();
  const { data } = state;

  return (
    <div className="animal-container">
      <Container className="mx-auto">
        <Row  className="card-row" >
            {!state
              ? null
              : data?.animals.map((animal) => {
                  return <Col lg={3} md={5} sm={5} xs={9} className="border m-3 shadow-sm card-container"  >
                    <AnimalCard animal={animal} />
                  </Col>;
                })}
          
        </Row>
      </Container>
    </div>
  );
}

export default AnimalContainer;
