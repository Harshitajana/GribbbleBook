import React from "react";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img-5.png";

function Section2() {
  return (
    <>
      <section className="section2-color">
        <Container>
          <Row>
            <Col>
              <div className="position-relative wow animate__animated animate__fadeInLeft">
                <div className="s2-heading">
                  <h3>Optimized For Growing Business</h3>
                </div>
              </div>
            </Col>
          </Row>

          <div className="m-6">
            <Row className="my-5">
              <Col lg={6}>
                <div className="s2-info wow animate__animated animate__fadeInRight">
                  <h4 className="wow animate__animated animate__fadeInLeft">
                    Inventory <i style={{ color: "#1839A4" }}>Management</i>
                  </h4>
                  <ul>
                    <li>
                      Comprehensive Stock History with Sale and Purchase Details
                    </li>
                    <li>Monitor Stock Levels and Profit Margins </li>
                    <li>Low Stock Notifications </li>
                    <li>Track Profits Daily, Weekly, and Monthly</li>
                  </ul>
                  <button className="s2-btn">Learn More</button>
                </div>
              </Col>
              <Col>
                <div className="s2-img">
                  <img src={img4} alt="inventory management" width={100} />
                  
                </div>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <div className="s3-img">
                  <img src={img3} alt="billings and accounting for all business" />
                  
                </div>
              </Col>
              <Col>
                <div className="s3-info wow animate__animated animate__fadeInLeft">
                  <h4 className="wow animate__animated animate__fadeInRight">
                    Billings and Accounting For All
                    <i style={{ color: "#F0D075" }}> Business</i>
                  </h4>
                  <ul>
                    <li>
                      Comprehensive Stock History with Sale and Purchase Details
                    </li>
                    <li>Monitor Stock Levels and Profit Margins </li>
                    <li>Low Stock Notifications </li>
                    <li>Track Profits Daily, Weekly, and Monthly</li>
                  </ul>
                  <button className="s3-btn">Learn More</button>
                </div>
              </Col>
            </Row>
            <Row className="my-5">
              <Col sm={12} lg={6}>
                <div className="s2-info wow animate__animated animate__fadeInRight">
                  <h4 className="wow animate__animated animate__fadeInLeft">
                  quotations and <i style={{ color: "#92E99C" }}>formatting</i>
                  </h4>
                  <ul>
                    <li>
                      Comprehensive Stock History with Sale and Purchase Details
                    </li>
                    <li>Monitor Stock Levels and Profit Margins </li>
                    <li>Low Stock Notifications </li>
                    <li>Track Profits Daily, Weekly, and Monthly</li>
                  </ul>
                  <button className="s4-btn">Learn More</button>
                </div>
              </Col>
              <Col>
                <div className="s2-img my-2">
                  <img src={img5} alt="inventory management" width={100} />
                
                </div>
              </Col>
            </Row>
          </div>
          <div className="d-sm-block d-xl-none">
            <Row className="my-5">
              <Col>
                <div className="s2-img">
                  <img src={img4} alt="inventory management" width={100} />
                </div>
              </Col>
              <Col lg={6}>
                <div className="s2-info wow animate__animated animate__fadeInRight">
                  <h4 className="wow animate__animated animate__fadeInLeft">
                    Inventory <i style={{ color: "#1839A4" }}>Management</i>
                  </h4>
                  <ul>
                    <li>
                      Comprehensive Stock History with Sale and Purchase Details
                    </li>
                    <li>Monitor Stock Levels and Profit Margins </li>
                    <li>Low Stock Notifications </li>
                    <li>Track Profits Daily, Weekly, and Monthly</li>
                  </ul>
                  <button className="s2-btn">Learn More</button>
                </div>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <div className="s3-img">
                  <img
                    src={img3}
                    alt="billings and accounting for all business"
                  />
                </div>
              </Col>
              <Col>
                <div className="s3-info wow animate__animated animate__fadeInLeft">
                  <h4 className="wow animate__animated animate__fadeInRight">
                    Billings and Accounting For All
                    <i style={{ color: "#F0D075" }}> Business</i>
                  </h4>
                  <ul>
                    <li>
                      Comprehensive Stock History with Sale and Purchase Details
                    </li>
                    <li>Monitor Stock Levels and Profit Margins </li>
                    <li>Low Stock Notifications </li>
                    <li>Track Profits Daily, Weekly, and Monthly</li>
                  </ul>
                  <button className="s3-btn">Learn More</button>
                </div>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <div className="s2-img my-2">
                  <img src={img5} alt="inventory management" width={100} />
                </div>
              </Col>
              <Col sm={12} lg={6}>
                <div className="s2-info wow animate__animated animate__fadeInRight">
                  <h4 className="wow animate__animated animate__fadeInLeft">
                    quotations and{" "}
                    <i style={{ color: "#92E99C" }}>formatting</i>
                  </h4>
                  <ul>
                    <li>
                      Comprehensive Stock History with Sale and Purchase Details
                    </li>
                    <li>Monitor Stock Levels and Profit Margins </li>
                    <li>Low Stock Notifications </li>
                    <li>Track Profits Daily, Weekly, and Monthly</li>
                  </ul>
                  <button className="s4-btn">Learn More</button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Section2;
