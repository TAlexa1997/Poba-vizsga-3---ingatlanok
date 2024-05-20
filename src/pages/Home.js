import React, { useEffect, useState } from "react";
import IngatlanTable from "../components/Ingatlan";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import IngatlanForm from "../components/IngatlanForm";

export default function Home() {
  const [ingatlanok, setIngatlanok] = useState([]);
  const [ingatlanok2, setIngatlanok2] = useState([]);

  useEffect(() => {
    fetchIngatlanok();
  }, []);

  async function fetchIngatlanok() {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/kategoriasingatlanok"
      );
      setIngatlanok(response.data);
    } catch (error) {
      console.error("Hiba történt az ingatlanok lekérésekor:", error);
    }
    try {
      const response = await axios.get(
        "http://localhost:8000/api/kategoriasingatlanok2"
      );
      setIngatlanok2(response.data);
    } catch (error) {
      console.error("Hiba történt az ingatlanok lekérésekor:", error);
    }
  }

  return (
    <Container
      className="p-2 d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Col>
        <Row xs={12} md={8} className="">
        <IngatlanTable ingatlanok={ingatlanok} ingatlanok2={ingatlanok2} />
        </Row>
      </Col>
      <Col>
        <Row xs={12} md={8} className="">
          <IngatlanForm />
        </Row>
      </Col>
    </Container>
  );
}
