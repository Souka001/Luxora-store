import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import picSignUp from "../assets/img/picSignUp.png";
import Form from "react-bootstrap/Form";
import "./Style.css";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
      agreeToTerms: false,
    });
  };

  return (
    <section className="signup">
      <Container fluid style={{ height: "100%" }}>
        <Row className="h-100">
          <Col 
             style={{ padding: "0", height: "100%" }}
             md={6}
             className="d-flex justify-content-center"
          >
            <h2 className="title">LUXORA</h2>
            <img className="pic1" src={picSignUp} alt="Sign Up" />

          </Col>
          <Col md={6}
            xs={12}
            className="d-flex justify-content-center align-items-center" style={{marginBottom:"50px"}}>
              <div className="form-container"> 
            <Form
             
              onSubmit={handleSubmit}
            >
              <h2>Sign up</h2>
              <p>
                Already have an account? <a href="/signin">Sign in</a>
              </p>
              <Row>
                <Col size={12} sm={12} className="px-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col size={12} sm={12} className="px-1">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col size={12} sm={12} className="px-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col size={12} sm={12} className="px-1 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                   
                  >
                    {showPassword ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </span>
                </Col>
                <Col size={12} sm={12} className="px-1">
                  <Form.Check
                    type="checkbox"
                    name="agreeToTerms"
                    label={
                      <span>
                        <span style={{ color: "#6C7275" }}>I agree with</span>{" "}
                        <span style={{ color: "black", fontWeight: "bold" }}>
                          Privacy Policy
                        </span>{" "}
                        <span style={{ color: "#6C7275" }}>and</span>{" "}
                        <span style={{ color: "black", fontWeight: "bold" }}>
                          Terms of Use
                        </span>
                      </span>
                    }
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                </Col>
                <Col size={12} sm={12} className="px-1">
                  <button type="submit">
                    <span>Sign Up</span>
                  </button>
                </Col>
              </Row>
            </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignUp;
