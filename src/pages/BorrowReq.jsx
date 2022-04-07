import React from "react";
import FooterComp from "../components/FooterComp";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./BorrowReq.css";

const BorrowReq = () => {
  return (
    <div>
      {" "}
      <Navbar
        bg="dark"
        variant="dark"
        className="navbar"
        style={{ borderEndStartRadius: "8px", marginBottom: "1rem" }}
      >
        <Container fluid>
          <Navbar.Brand
            style={{ fontSize: "2rem", fontWeight: "600" }}
            href="#home"
          >
            Udhaar{" "}
          </Navbar.Brand>{" "}
          <Nav className="mr-auto">
            <Nav.Link href="#home"> Services </Nav.Link>{" "}
            <Nav.Link href="#features"> Features </Nav.Link>{" "}
            <Nav.Link href="#pricing"> Pricing </Nav.Link>{" "}
          </Nav>{" "}
        </Container>{" "}
      </Navbar>{" "}
      <div class="box">
        <div class="success alert">
          <div class="alert-body">Success !</div>
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default BorrowReq;
