import React, { useState } from "react";
import "../App.css";
import "../css/media.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";

import { VscThreeBars } from "react-icons/vsc";
import logo from "../images/logo.png";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Navbar expand="lg" className="">
          <Row className="d-flex justify-content-center align-items-center">
            <Col>
              <Navbar.Brand href="#">
                <img
                  src={logo}
                  alt="logo"
                  width={"100"}
                  className="logo sm-w"
                />
              </Navbar.Brand>
            </Col>
            <Col>
              <div className="d-flex justify-content-end align-items-center">
                <Button className="d-lg-none off-btn" onClick={handleShow}>
                  <i>
                    <VscThreeBars />
                  </i>
                </Button>
                <Offcanvas show={show} onHide={handleClose} responsive="lg">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu bar</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className=" d-lg-flex  justfy-content-center">
                      <a
                        href="#"
                        className="a-remove position-relative mx-3 space-m"
                      >
                        Home
                        <i className="line-1"></i>
                      </a>
                      <a
                        href="#"
                        className="a-remove position-relative mx-3 space-m"
                      >
                        Features
                        <i className="line-2"></i>
                      </a>
                      <a
                        href="#"
                        className="a-remove position-relative mx-3 space-m"
                      >
                        Services
                        <i className="line-3"></i>
                      </a>
                      <a
                        href="#"
                        className="a-remove position-relative mx-3 space-m"
                      >
                        About
                        <i className="line-4"></i>
                      </a>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
                <Button className="login-btn text-end">login</Button>
              </div>
            </Col>
          </Row>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;
