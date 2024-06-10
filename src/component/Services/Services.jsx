import React from "react";
import "./Services.css";

import img1 from "../../images/ser_img1.png";
import img2 from "../../images/ser_img2.png";
import img3 from "../../images/ser_img3.png";
import img4 from "../../images/ser_img4.png";
import img5 from "../../images/ser_img5.png";
import img6 from "../../images/ser_img6.png";

import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <>
      <Container>
        <section className="section2-color position-relative border-radius-10 py-5">
          <div className="head d-xl-block wow animate__animated animate__fadeInUp">
            <h3>Our Services</h3>
          </div>
          <Row className="set_center sec4">
            <Col>
              <Card
                className="services-img"
                style={{ width: "18rem", border: "none" }}
              >
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title className="text-center">
                    profit and loss tracking
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="services-img"
                style={{ width: "18rem", border: "none" }}
              >
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title className="text-center">
                    balance sheet analysis
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="services-img "
                style={{ width: "18rem", border: "none" }}
              >
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title className="text-center">
                    report download and backup
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="services-img "
                style={{ width: "18rem", border: "none" }}
              >
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title className="text-center">
                    gST as wll as non gST bills
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="services-img "
                style={{ width: "18rem", border: "none" }}
              >
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title className="text-center">
                    Staff management
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="services-img "
                style={{ width: "18rem", border: "none" }}
              >
                <Card.Img variant="top" src={img6} />
                <Card.Body>
                  <Card.Title className="text-center">
                    accounting records and tracking
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Services;
