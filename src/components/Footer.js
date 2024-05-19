import React from "react";
import { Container } from "react-bootstrap";

export default function Footer(){
    return(
        <Container>
            <footer style={{ position:"fixed",left:0,bottom:0,width:"100%" }} className="footer bg-dark text-white">
                <div className="container text-center py-1">
                    <h4>Készítette: Tóth Alexandra</h4>
                </div>
            </footer>
        </Container>
    )
}