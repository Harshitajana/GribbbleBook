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
      <section>

        <Container>
        <div className="head">
                <h3>Our Services</h3>
        </div>
          <Row className="set_center">
            <Col>
              <Card
                className="services-img "
                style={{ width: "18rem", border: "none" }}
              >
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>profit and loss tracking</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="services-img "
                style={{ width: "18rem", border: "none" }}
              >
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>balance sheet analysis</Card.Title>
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
                  <Card.Title>report download and backup</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="set_center">
            <Col>
              <Card
                className="services-img "
                style={{ width: "18rem", border: "none" }}
              >
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title>gST as wll as non gST bills</Card.Title>
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
                  <Card.Title>Staff management </Card.Title>
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
                  <Card.Title>accounting records and tracking</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
