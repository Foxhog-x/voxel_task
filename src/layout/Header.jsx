import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = ({ setSearch }) => {
  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">
              <h1 className="nav_heading">Indian Startups</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                {/* <Nav.Link href="#action2">Link</Nav.Link> */}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  style={{ width: "300px" }}
                  type="search"
                  placeholder="Search Company Name"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {/* <Button onClick={() => setSearch("")} variant="outline-danger">
                  Clear
                </Button> */}
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
