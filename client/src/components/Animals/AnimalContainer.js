import React from "react";
import "./animals.css";
import { useAnimalStore } from "../../utility/AnimalData";
import AnimalCard from "./AnimalCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function AnimalContainer({ children }) {
  const [state, setAnimalState] = useAnimalStore();
  const { data } = state;

  return (
    <div className="animal-container">
      <Container className="mx-auto">
        <Row className="card-row d-flex flex-wrap">
          {!state
            ? null
            : data?.animals.map((animal, id) => {
                return (
                  <Col
                    key={animal?.id}
                    lg={3}
                    md={4}
                    sm={5}
                    xs={9}
                    className=" border m-3 shadow-sm card-container"
                  >
                    <Link to={`${animal?.id}`} state={{ from: animal }}>
                      <AnimalCard animal={animal} />
                    </Link>
                  </Col>
                );
              })}
        </Row>
      </Container>
    </div>
  );
}

export default AnimalContainer;
