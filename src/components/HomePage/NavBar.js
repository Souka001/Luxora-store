import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiMenu, FiX } from 'react-icons/fi';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <section className="NavBar">
      <Navbar expand="lg" className={`fixed-top ${isScrolled ? "bg-body-tertiary" : ""}`}>
        <Container>
          <div className="navbar-header">
            <Navbar.Toggle 
              aria-controls="basic-navbar-nav" 
              onClick={toggleMenu}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </Navbar.Toggle>
            <Navbar.Brand id="title" href="#home">LUXORA</Navbar.Brand>
          </div>
          <Navbar.Collapse 
            id="basic-navbar-nav" 
            className={isOpen ? "show" : ""}
            style={{display: isOpen ? 'block' : 'none'}} // Force collapse on small screens
          >
            <Nav className="mx-auto gap-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Shop">Shop</Nav.Link>
              <Nav.Link href="#Product">Product</Nav.Link>
              <Nav.Link href="#Contact">Contact Us</Nav.Link>
            </Nav>
            <Nav className="nav-icons">
              <Nav.Link href="#search">
                <img src={require('../../assets/img/SearchIcon.png')} alt="search" />
              </Nav.Link>
              <Nav.Link href="#user">
                <img src={require('../../assets/img/UserCercle.png')} alt="user" />
              </Nav.Link>
              <Nav.Link href="#cart">
                <img src={require('../../assets/img/CartButton.png')} alt="cart" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default NavBar;
