import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function IngatlanMobileView ({ ingatlanok }) {
    return(
        <Container>
        <Row>
          {ingatlanok.map((ingatlan, index) => (
            <Col key={index} xs={12} md={6}>
              <Card className="mb-4">
                <Card.Header className="d-flex justify-content-between">
                  <span><strong>{ingatlan.Kategória}</strong></span>
                  <span><strong>{ingatlan["Hirdetés dátuma"]}</strong></span>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{ingatlan.Leírás}</Card.Text>
                  <Card.Img variant="top" src={ingatlan.Fénykép} alt="Ingatlan kép"/>
                  <div className="d-flex justify-content-center">
                    <Button className="text-center p-2 m-2">Megnéz</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
 
};