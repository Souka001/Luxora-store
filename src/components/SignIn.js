import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import picSignUp from "../assets/img/picSignUp.png";
import Form from "react-bootstrap/Form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Style.css";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    Rememberme: false,
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
      email: "",
      password: "",
      Rememberme: false,
    });
  };

  return (
    <section className="signin">
      <Container fluid style={{ height: "100%" }}>
        <Row className="h-100">
          <Col
            style={{ padding: "0", height: "100%" }}
            md={6}
            className="d-flex justify-content-center"
          > <h2 className="title">LUXORA</h2>
            <div className="pic">
              <img src={picSignUp} alt="Sign Up" />
            </div>
          </Col>
          <Col
            md={6}
            xs={12}
            className="d-flex justify-content-center align-items-center "
          >
            <div className="form-container">
              <Form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <p>
                  Don’t have an account yet? <a href="/signup">Sign Up</a>
                </p>
                <Row>
                  <Col size={12} sm={12} className="px-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your username or email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col size={12} sm={12} className="px-1">
                    <div style={{ position: "relative" }}>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <span onClick={togglePasswordVisibility}>
                        {showPassword ? (
                          <FaEyeSlash size={20} />
                        ) : (
                          <FaEye size={20} />
                        )}
                      </span>
                    </div>
                  </Col>

                  <Row className="remember-forgot-container">
                    <Col>
                      <Form.Check
                        type="checkbox"
                        name="Rememberme"
                        label="Remember me"
                        checked={formData.Rememberme}
                        onChange={handleChange}
                        className="form-check"
                      />
                    </Col>
                    <Col className="text-end"  >
                      <a className="forgotpss" href="/forgotPassword">
                        Forgot password?
                      </a>
                    </Col>
                  </Row>

                  <Col size={12} sm={12} className="px-1">
                    <button type="submit">
                      <span>Sign In</span>
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

export default SignIn;
