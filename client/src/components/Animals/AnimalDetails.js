import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from "react-router-dom";
import "./animals.css";

function AnimalDetails() {
  let location = useLocation();
  const { from } = location.state;
  let navigate = useNavigate();

  return (
    <div className="details-wrapper m-5">
      <Container>
        <button onClick={() => navigate(-1)}>Back</button>
      </Container>
      <Container className="details-container w-100">
        <Row className="d-flex justify-content-center flex-lg-row  flex-sm-column w-100 ">
          <Col className="details-column w-50  ">
            <img className="details-img" src={from?.photos[0]?.full} />
          </Col>
          <Col className="details-column w-50 col-25 d-flex flex-lg-column ">
            <h3 class="mx-auto">{from?.name}</h3>
            <ul>
              {Object.entries(from?.attributes).map(([k, v], i) =>
                from?.attributes[k] === true ? (
                  <li key={i}>
                    {" "}
                    <strong>{k}:</strong> yes
                  </li>
                ) : (
                  <li key={i}>
                    {" "}
                    <strong>{k}:</strong> no
                  </li>
                )
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AnimalDetails;
