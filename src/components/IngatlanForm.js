import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function IngatlanForm() {
  const [kategoria, setKategoria] = useState("");
  const [leiras, setLeiras] = useState("");
  const [hirdetesdatuma, setHirdetesDatuma] = useState("");
  const [tehermentes, setTehermentes] = useState("false");
  const [ar, setar] = useState("");
  const [kepUrl, setkepUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (kategoria.length === 0) {
      alert("Nincs kitöltve a kategória!");
    } else if (leiras.length === 0) {
      alert("Nincs kitöltve a leírás!");
    } else if (hirdetesdatuma.length === 0) {
      alert("Nincs kitöltve a hirdetés dátuma!");
    }else if (ar.length === 0) {
      alert("Nincs kitöltve az ár!");
    }else if (kepUrl.length === 0) {
      alert("Nincs kitöltve a kép!");
    } else {
      try {
        const adat = {
          ar:ar,
          kategoria: kategoria,
          leiras: leiras,
          hirdetesdatuma: hirdetesdatuma,
          tehermentes: tehermentes ? "1" : "0", 
          kepUrl: kepUrl,
        };
        await Kuldes(adat);
        alert("Az ingatlan sikeresen beküldve!");
        window.location.reload();
      } catch (error) {
        alert("Hiba történt az ingatlan beküldése során: " + error.message);
      }
    }
  };

  const Kuldes = async (adat) => {
    try {
      const response = await axios.post("http://localhost:8000/api/ingatlanok", adat);
      console.log(adat);
      return response.data;
    } catch (error) {
      console.error("Hiba történt az ingatlan beküldése során: " + error.message);
    }
  };

  return (
    <>
      <Container style={{ border:"solid 1px black", borderRadius:"8px",margin:"10px", padding:"10px",marginBottom:"30px" }}>
        <h1 className="text-center">Új ingatlan beküldése</h1>
        <Form  onSubmit={handleSubmit}>
          <div >
            <Form.Group className="mb-3 mt-4" controlId="kategoria">
              <Form.Label> Ingatlan kategóriája</Form.Label>
              <Form.Select
                onChange={(e) => setKategoria(e.target.value)}
                value={kategoria}
              >
                <option value="">Kérem válasszon</option>
                <option value="1">Ház</option>
                <option value="2">Lakás</option>
                <option value="3">Építési telek</option>
                <option value="4">Garázs</option>
                <option value="5">Mezőgazdasági terület</option>
                <option value="6">Ipari ingatlan</option>
                </Form.Select>
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="hirdetesdatuma">
              <Form.Label>Hirdetés dátuma</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => {
                  setHirdetesDatuma(e.target.value);
                }}
              />
            </Form.Group>
          </div>
          <div>
          <Form.Group className="mb-3 mt-4" controlId="tehermentes">
            <Form.Check 
              type="checkbox"
              label="Tehermentes ingatlan"
              onChange={(e) => {
                setTehermentes(e.target.checked);
              }}
            />
          </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="ar">
              <Form.Label>Ingatlan ára</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => {
                  setar(e.target.value);
                }}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="kepUrl">
              <Form.Label>Fénykép az ingatlanról</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                onChange={(e) => {
                  setkepUrl(e.target.value);
                }}
              />
            </Form.Group>
            </div>
          <div>
            <Form.Group className="mb-3" controlId="leiras">
              <Form.Label>Leírás</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setLeiras(e.target.value);
                }}
              />
            </Form.Group>
          </div>
          <div className="text-center my-3">
            <Button variant="primary" type="submit">
              Küldés
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
