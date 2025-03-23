import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import emaiicon from "../../assets/img/emaiicon.png";


function Newsletter(){
    return(
        <Container className="container w-100 Newsletter">
               <Row className="Newsletter" >
        <Col md={12} className="d-flex justify-content-center align-items-center">
          <div className="newsletter-content">
            <h2 className="titrenewsletter">Join Our Newsletter</h2>
            <p>Sign up for deals, new products, and promotions</p>
            <div className="input-container">
                <img src={emaiicon} alt="icon_email" style={{width:"24px",height:"24px"}}/>
              <input type="email" placeholder="Email address" className="email-input" />
              <a href="#!" className="anewsletter">
                Signup
              </a>
            </div>
          </div>
        </Col>
      </Row>
        </Container>
     
    )

}
export default Newsletter;