import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import IngatlanMobileView from "../view/IngatlanMobileView";
import IngatlanWebView from "../view/IngatlanWebView";
import Szures from "./Szures";

export default function Ingatlan({ ingatlanok, ingatlanok2 }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <Container>

      <h1 className="text-center p-3">Ajánlataink</h1>
      {/* <Szures/> */}
      {windowWidth > 1000 ? (
        <IngatlanWebView ingatlanok2={ingatlanok2} />
      ) : (
        <IngatlanMobileView ingatlanok={ingatlanok} />
      )}
    </Container>
  );
}
