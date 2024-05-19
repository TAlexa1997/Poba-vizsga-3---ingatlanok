import React, { useEffect, useState } from "react";
import { Table, Container} from "react-bootstrap";


export default function IngatlanWebView({ ingatlanok2 }) {
 
  return (
    <Container>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Kategória</th>
              <th>Leírás</th>
              <th>Hirdetés dátuma</th>
              <th>Tehermentes</th>
              <th>Kép</th>
            </tr>
          </thead>
          <tbody>
            {ingatlanok2.map((ingatlan, index) => (
              <tr key={index}>
                <td>{ingatlan.Kategória}</td>
                <td>{ingatlan.Leírás}</td>
                <td>{ingatlan["Hirdetés dátuma"]}</td>
                <td>{ingatlan.tehermentes}</td>
                <td>
                  <img
                    src={ingatlan.Fénykép}
                    alt="Ingatlan kép"
                    style={{ maxWidth: "300px", maxHeight: "300px" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </Container>
  );
}