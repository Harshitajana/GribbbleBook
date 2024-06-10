import React from "react";
import { Col, Container, Dropdown, Form, InputGroup, Row, SplitButton } from "react-bootstrap";
import img6 from "../images/img6.png";
import qr from "../images/qr.png";
import gp from "../images/gp.png";
function Section4() {
  return (
    <>
      <Container>
        <section className="space-x section-4">
        <Row className="d-md-none d-lg-block">
            <Col>
              <div className="position-relative wow animate__animated animate__fadeInDown">
                <div className="s4-heading">
                  <h3>registered now</h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="p-1">
                <img src={img6} alt="" width={100} />
              </div>
            </Col>
            <Col>
              <div className="p-2">
                <img src={qr} alt="" className="qr" />
                <p>
                  Scan to Download <br /> This App
                </p>
                <img src={gp} alt="" className="gp" />
              </div>
            </Col>
            <Col sm={12} lg={4}>
              <h4 className="heading-4">get registered now</h4>
              <InputGroup className="mb-4">
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
                />
              </InputGroup>
              <button className="r-btn">Submit</button>
              <div className="d-flex sales">
                <p>Sales and purchase accounting</p>
                <p className="border-start border-end p-2 text-center">
                  GST/Non-GST bill creation
                </p>
                <p className="ps-1">profit and loss statement</p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
}

export default Section4;
