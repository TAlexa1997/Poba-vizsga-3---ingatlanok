import React from "react";
import Container  from "react-bootstrap/Container";
import Nav  from "react-bootstrap/Nav";
import Navbar  from "react-bootstrap/Navbar";

export default function MyNav(){
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/Home">Főoldal</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}