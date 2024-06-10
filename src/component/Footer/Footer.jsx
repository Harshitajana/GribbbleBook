import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";


import logo from "../../images/logo.png";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "black", color: "white", padding: "25px 50px"}}
      >
        <Row>
          <Col>
            <div className="first">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="text">
                <span>gribbble book easy to use tack it easy</span>
              </div>
              <div className="icons">
                <i>
                  <FaYoutube />
                </i>
                <i>
                  <FaInstagram />
                </i>
                <i>
                  <FaFacebook />
                </i>
                <i>
                  <FaXTwitter />
                </i>
                <i>
                  <FaLinkedinIn />
                </i>
              </div>
              <div className="text">
                <span>
                <FaRegCopyright /> 2024 gribbble Private Limited, All rights reserved.
                </span>
              </div>
            </div>
          </Col>

          <Col className="second">
            <div className="name">
              <span>Company</span>
            </div>
            <div className="menu">
              <ul>
                <li><a href="">About</a></li>
                <li>Founder</li>
                <li><a href="">Team</a></li>
                <li><a href="">Website</a></li>
                <li><a href="">Privte Policy</a></li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="info-icon">
              <i>
                <IoMdMail />
              </i>
              <span>harshit@gribbble.inx</span>
              <br />
              <i>
                <IoCall />
              </i>
              <span> +91 75674 72516</span>
              <br />
              <i>
                <FaLocationDot />
              </i>
              <span>
                3Rd flr, shop no-341 Laxmi Enclave 2, Gajera Cir, Rajanand
                Society, Mahavir Nagar Society, Patel Nagar,
                Surat, Gujarat 395004
              </span>
              <div className="text">terms & conditions are applied</div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Footer;
