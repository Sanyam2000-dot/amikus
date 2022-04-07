import React, { useState } from "react";
import "./LoginPage.css";
import FooterComp from "../components/FooterComp";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
} from "react-bootstrap";

const LoginPage = () => {
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
    const { formBasicName, formBasicGender, formBasicPhone } = form;
    const res = await fetch("https://amikus.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        formBasicName,
        formBasicGender,
        formBasicPhone,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid sign in");
      console.log("Invalid sign in");
    } else {
      window.alert("successful");
      console.log("Successful sign in");

      navigate(`/borrow`);
    }
  };

  return (
    <>
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
      <Container className="outer-box ">
        <h1> Udhaar Banking Services </h1>{" "}
        <Row className="justify-content-md-center">
          <Col md="auto" className="frosted-box">
            <img className="bank-image" src="/bank.svg" alt="" />
          </Col>{" "}
          <Col md="auto" style={{ margin: "auto" }}>
            <Form className="form-box" method="POST">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label> Name </Form.Label>{" "}
                <Form.Control
                  type="name"
                  placeholder="Elon Musk"
                  required
                  onChange={(e) => setField("formBasicName", e.target.value)}
                  value={form.formBasicName}
                />
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label> Gender </Form.Label>{" "}
                <Form.Control
                  aria-label="Default select example"
                  required
                  as="select"
                  onChange={(e) => setField("formBasicGender", e.target.value)}
                  value={form.formBasicGender}
                >
                  <option>Select Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </Form.Control>
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label> Phone No </Form.Label>{" "}
                <Form.Control
                  required
                  type="number"
                  maxLength="10"
                  placeholder="Phone"
                  onChange={(e) => setField("formBasicPhone", e.target.value)}
                  value={form.formBasicPhone}
                />
              </Form.Group>{" "}
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  style={{ textAlingn: "left", fontSize: "17px" }}
                  type="checkbox"
                  label="I agree to platform's terms of service"
                />
              </Form.Group>{" "}
              <Button
                variant="dark"
                style={{ width: "100%" }}
                type="submit"
                onClick={postData}
              >
                Sign in
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
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
      <FooterComp />
    </>
  );
};

export default LoginPage;
