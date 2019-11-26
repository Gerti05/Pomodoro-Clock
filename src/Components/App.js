import React from "react";
import { Container, Row } from "react-bootstrap";
import SetBreak from "./setBreak";
import Session from "./setSession";
import DisplayBreak from "./displayBreak";
import DisplaySession from "./displaySession";

const App = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-between text-center">
          <SetBreak />
          <Session />
        </Row>

        <Row className="justify-content-center">
          <DisplayBreak />
          <DisplaySession />
        </Row>
      </Container>
    </div>
  );
};

export default App;
