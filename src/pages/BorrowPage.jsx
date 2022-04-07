import React, { useState } from "react";

import { Form, Button, Container, Col, Navbar, Nav } from "react-bootstrap";
import FooterComp from "../components/FooterComp";
import "./BorrowPage.css";
import { useNavigate } from "react-router-dom";

const BorrowPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    formBasicName: "",
    formBasicGender: "",
    formBasicPhone: "",
  });

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    const {
      formBasicAmount,
      formBasicReason,
      formBasicDuration,
      formBasicUPI,
    } = form;
    const res = await fetch("https://amikus.herokuapp.com/borrowREQ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        formBasicAmount,
        formBasicReason,
        formBasicDuration,
        formBasicUPI,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid sign in");
      console.log("Invalid sign in");
    } else {
      window.alert("successful");
      console.log("Successful sign in");

      navigate(`/successfull`);
    }
  };

  return (
    <div>
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
      <h1 className="text-center mb-5"> Enter the Details </h1>{" "}
      <Col className="borrow-form-col">
        <Form className="form-box-borrow text-center" method="POST">
          <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Label> Amount </Form.Label>{" "}
            <Form.Control
              type="number"
              placeholder="10000"
              required
              onChange={(e) => setField("formBasicAmount", e.target.value)}
              value={form.formBasicAmount}
            />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicReason">
            <Form.Label> Reason</Form.Label>{" "}
            <Form.Control
              type="text"
              placeholder="Reason to borrow"
              required
              onChange={(e) => setField("formBasicReason", e.target.value)}
              value={form.formBasicReason}
            />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicDuration">
            <Form.Label>Duration </Form.Label>{" "}
            <Form.Control
              aria-label="Default select example"
              required
              as="select"
              onChange={(e) => setField("formBasicDuration", e.target.value)}
              value={form.formBasicDuration}
            >
              <option>Select duration</option>
              <option value="1">2 weeks</option>
              <option value="2">4 weeks</option>
            </Form.Control>
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicUPI">
            <Form.Label> UPI ID</Form.Label>{" "}
            <Form.Control
              type="text"
              placeholder="elonmusk@upi"
              required
              onChange={(e) => setField("formBasicUPI", e.target.value)}
              value={form.formBasicUPI}
            />
          </Form.Group>{" "}
          <Button
            variant="dark"
            style={{ width: "100%" }}
            type="submit"
            onClick={postData}
          >
            Borrow
          </Button>{" "}
          {/* <br />
              <p style={{ marginTop: "8px", fontSize: "17px" }}>
                Click{" "}
                <a href="/" style={{ textDecoration: "none" }}>
                  here{" "}
                </a>
                to sign in
              </p>{" "} */}
        </Form>{" "}
      </Col>
      <FooterComp />
    </div>
  );
};

export default BorrowPage;
