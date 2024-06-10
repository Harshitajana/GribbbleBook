import React, { useEffect } from "react";
import "../App.css";
import "../css/media.css";
import "animate.css";
import WOW from "wowjs";
import {
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Row,
  SplitButton,
} from "react-bootstrap";

import img1 from "../images/img1.png";
import img2 from "../images/img2.png";

function Section1() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  });

  return (
    <>
      <section className="space-x">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="heading poppins wow animate__animated animate__fadeIn">
                <h1>
                  Aapka Sathi
                  <i style={{ fontWeight: 600 }}>
                    <i style={{ color: "#03045a" }}>Gri</i>
                    <i style={{ color: "yellow" }}>b</i>
                    <i style={{ color: "red" }}>b</i>
                    <i style={{ color: "green" }}>b</i>
                    <i style={{ color: "#03045a" }}>le</i> Book-
                  </i>
                </h1>
                <h2 className="fs-2 fw-light heading-2">
                  Smooth Business Easy Journey
                </h2>
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col lg={4} sm={6}>
              <InputGroup className="mb-3 wow animate__animated animate__fadeIn">
                <SplitButton
                  variant="outline-secondary"
                  title="+91"
                  id="segmented-button-dropdown-1"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </SplitButton>
                <Form.Control
                  aria-label="Text input with dropdown button"
                  placeholder="Enter your phone number"
                  maxLength={10}
                  
                />
              </InputGroup>
              <button className="phone-btn">Submit</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="bg-img wow animate__animated animate__fadeInTopRight">
                <img src={img1} width={100} />
              </div>
              <div className="dot-img position-relative wow animate__animated animate__fadeInBottomLeft">
                <img
                  src={img2}
                  alt="dot"
                  width={100}
                  className="p-abs"
                />
              </div>
              <div>
                <div className="box-green poppins wow animate__animated animate__fadeInBottomRight">
                  <h3 className="text-center mb-3">
                    EXPLORE SIMPLICITY WITH GRIBBBLE
                  </h3>
                  <span className="d-flex justify-content-center align-items-center">
                    <p className="me-4">
                      Easy To Use For <br /> Non-IT Also
                    </p>
                    <div className="border-start border-black"></div>
                    <p className="ms-4">
                      Pocket <br /> Friendly
                    </p>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section1;
