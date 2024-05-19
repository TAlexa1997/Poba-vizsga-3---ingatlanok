import React, { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import IngatlanMobileView from "../view/IngatlanMobileView";
import IngatlanWebView from "../view/IngatlanWebView";

export default function IngatlanTable({ ingatlanok ,ingatlanok2}) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  return (
    <Container>
      <h1 className="text-center p-3">Ajánlataink</h1>
      {isDesktop ? (
        <IngatlanWebView  ingatlanok2={ingatlanok2}/>
      ) : (
        <IngatlanMobileView ingatlanok={ingatlanok} />
      )}
    </Container>
  );
}
