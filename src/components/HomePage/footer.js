import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Styleshome.css";

const Footer = () => {
  return (
    <footer className="footer  ">
      <Container className="container w-100" >
        <Row  className="container w-100 footer">
          <Col md={12}>
            <div className="fulltitlecnt">
              <h3 className="title">LUXORA</h3>
              <p>Gift & Decoration Store</p>
            </div>
            <div className="navbar-horizontal">
              <a href="#!" className="text-white">
                Home
              </a>
              <a href="#!" className="text-white">
                Shop
              </a>
              <a href="#!" className="text-white">
                Product
              </a>
              <a href="#!" className="text-white">
                Blog
              </a>
              <a href="#!" className="text-white">
                Contact Us
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-4 mb-md-0" size={12}>
            <div className="pfooter">
             
              
              <p >Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Copyright © 2025 LUXORA. All rights reserved</p>
            </div>
            <div className="allicons">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="4"
                  stroke="#FEFEFE"
                  stroke-width="1.5"
                />
                <circle cx="18" cy="6" r="1" fill="#FEFEFE" />
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="#FEFEFE"
                  stroke-width="1.5"
                />
              </svg>
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1H10C7.23858 1 5 3.23858 5 6V8H1V12H5V19H9V12H13V8H9V6C9 5.44772 9.44771 5 10 5H13V1Z"
                  stroke="#FEFEFE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="3"
                  width="20"
                  height="18"
                  rx="4"
                  stroke="#FEFEFE"
                  stroke-width="1.5"
                />
                <path
                  d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                  stroke="#FEFEFE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
