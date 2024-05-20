import axios from "axios";
import React, { useState } from "react";
import { Table, Container, Button, Form } from "react-bootstrap";

export default function IngatlanWebView({ ingatlanok2 }) {
  const [editedRows, setEditedRows] = useState([]);
  const [editedLeírás, setEditedLeírás] = useState({});

  const toggleEditing = (id) => {
    if (editedRows.includes(id)) {
      setEditedRows(editedRows.filter((rowId) => rowId !== id));
    } else {
      setEditedRows([...editedRows, id]);
    }
  };

  const isRowEdited = (id) => editedRows.includes(id);

  const handleLeírásChange = (id, newValue) => {
    setEditedLeírás({ ...editedLeírás, [id]: newValue });
  };

  const torlesgomb = async (id) => {
    try {
      const data = { id };
      await axios.delete(`http://localhost:8000/api/ingatlanok/${id}`, {
        data,
      });
      window.location.reload();
      alert("Sikeres ingatlan törlése!");
    } catch (error) {
      console.error("Hiba történt az ingatlan törlésekor:", error);
      alert("Hiba történt az ingatlan törlésekor!");
    }
  };

  const szerkesztesgomb = async (id) => {
    try {
      const data = { id, Leírás: editedLeírás[id] };
      console.log("Adatok:", data);
      await axios.put(`http://localhost:8000/api/ingatlanok/${id}`, data);
      console.log("Adatok:", data);
      alert("Sikeres ingatlan szerkesztése!");
      toggleEditing(id);
      window.location.reload();
      console.log("Adatok:", data);
    } catch (error) {
      console.error("Hiba történt az ingatlan szerkesztése közben:", error);
      alert("Hiba történt az ingatlan szerkesztése közben");
    }
  };

  return (
    <Container>
      <Table
        striped
        bordered
        hover
        responsive
        className="align-middle text-center"
      >
        <thead>
          <tr>
            <th>ID</th>
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
              <td>{ingatlan.id}</td>
              <td>{ingatlan.Kategória}</td>
              {/* <td>{ingatlan.Leírás}</td> */}
              <td>
                {isRowEdited(ingatlan.id) ? (
                  <Form.Control
                    type="text"
                    value={editedLeírás[ingatlan.id] ?? ingatlan.Leírás}
                    onChange={(e) =>
                      handleLeírásChange(ingatlan.id, e.target.value)
                    }
                  />
                ) : (
                  ingatlan.Leírás
                )}
              </td>
              <td>{ingatlan["Hirdetés dátuma"]}</td>
              <td
                style={{ color: ingatlan.Tehermentes === 0 ? "red" : "green" }}
              >
                {ingatlan.Tehermentes === 0 ? "Nem" : "Igen"}
              </td>
              <td>
                <img
                  src={ingatlan.Fénykép}
                  alt="Ingatlan kép"
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                />
              </td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => torlesgomb(ingatlan.id)}
                >
                  Törlés
                </Button>
              </td>
              <td>
                {isRowEdited(ingatlan.id) ? (
                  <Button
                    variant="danger"
                    onClick={() => szerkesztesgomb(ingatlan.id)}
                  >
                    Mentés
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => toggleEditing(ingatlan.id)}
                  >
                    Szerkesztés
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
