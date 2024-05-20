import React, { useState } from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";

export default function Szures(){
    const filterMenuOptions = {
        Kategória: ["Ház", "Lakás", "Építési telek", "Garázs", "Mezőgazdasági terület","Ipari ingatlan"],
        Tehermentes: ["Igen", "Nem"]
      };
      const [selectedFilterOption, setSelFilterOption] = useState(
        Object.keys(filterMenuOptions)[0]
      );
    return(
        <Container>
        <Row style={{ minWidth: "50vw" }}>
          <Col>
            <ListGroup variant="flush">
              {Object.keys(filterMenuOptions).map((fKey, id) => (
                <ListGroup.Item
                  key={id}
                  action
                  active={selectedFilterOption === fKey}
                  onClick={() => setSelFilterOption(fKey)}
                  variant="success"
                >
                  {fKey}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              {filterMenuOptions[selectedFilterOption].map((option, id) => (
                <Row key={id}>
                  <Col xs="2">
                    <input type="checkbox" />
                  </Col>
                  <Col>
                    <p>{option}</p>
                  </Col>
                </Row>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
}