import React from "react";
import { useEffect } from "react";
import PasteImage from "../../assets/img/PasteImage.png";
import backgroundimg from "../../assets/img/backgroundimg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../assets/img/Card.png";
import Card2 from "../../assets/img/Card2.png";
import Card3 from "../../assets/img/Card3.png";
import flesh from "../../assets/img/flesh.png";
import like from "../../assets/img/like.png";
import sofa from "../../assets/img/sofa.png";
import lamp from "../../assets/img/lamp.png";
import table from "../../assets/img/table.png";
import Toasted from "../../assets/img/Toasted.png";
import imgarticle1 from "../../assets/img/imgarticle1.png";
import article2 from "../../assets/img/article2.png";
import article3 from "../../assets/img/article3.png";
import ProductCard from "./ProductCard"; 
import { useState } from "react";
import "./Styleshome.css";
import { FaHeart } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import AOS from "aos";
function Banner() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("animatedTitle");
    if (element) {
      const position = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      const threshold = 200;

      if (position < screenHeight - threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const products = [
    {
      imgSrc: sofa,
      title: "Loveseat Sofa",
      price: "$199.00",
      oldPrice: "$400.00",
      rating: 4.5,
    },
    {
      imgSrc: lamp,
      title: "Table Lamp",
      price: "$22.99",
      rating: 5,
    },
    {
      imgSrc: table,
      title: "Beige Table Lamp",
      price: "$20.99",
      rating: 4.5,
    },
    {
      imgSrc: Toasted,
      title: "Toasted",
      price: "$24.99",
      rating: 5,
    },
  ];

  return (
    <section className="Banner mt-5">
      <Container>
        <Row>
          <Col size={12} md={12} className="boxtitle">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              className="w-100"
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={PasteImage}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={backgroundimg}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col size={12} md={6}>
            <h1 data-aos="fade-up">
              Simply Unique/
              <br />
              <span> Simply Better.</span>
            </h1>
          </Col>
          <Col size={12} md={6}>
            <p className="mt-4">
              3legant is a gift & decorations store based in HCMC,
              <br /> Vietnam. Est since 2025.{" "}
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col size={12} md={6}>
            <div className="position-relative me-1">
              <img src={Card} alt="card" className="img-fluid w-100 mb-4" />
              <div className="position-absolute top-0 text-white p-2 text-start m-4">
                <h2 className="mb-0 ">Living Room</h2>
                <p className="mt-1 text-decoration-underline cursor-pointer ">
                  Shop Now{" "}
                  <i>
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={flesh}
                      alt="flesh"
                    />
                  </i>
                </p>
              </div>
            </div>
          </Col>
          <Col size={12} md={6}>
            <div className="position-relative me-1">
              <img src={Card2} alt="card2" className="img-fluid w-100 " />
              <div className="position-absolute bottom-0 text-white p-2 text-start m-4">
                <h2 className="mb-0">Bedroom</h2>
                <p className="mt-2 text-decoration-underline cursor-pointer ">
                  Shop Now{" "}
                  <i>
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={flesh}
                      alt="flesh"
                    />
                  </i>
                </p>
              </div>
            </div>
            <br />
            <div className="position-relative me-1">
              <img src={Card3} alt="card3" className="img-fluid w-100 mt-0" />
              <div className="position-absolute bottom-0 text-white p-2 text-start m-4 ">
                <h2 className="mb-0">Kitchen</h2>
                <p className="mt-2 text-decoration-underline cursor-pointer ">
                  Shop Now{" "}
                  <i>
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={flesh}
                      alt="flesh"
                    />
                  </i>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="contarrv">
            <h1 className="mb-2 mt-3">
              New
              <br /> Arrivals
            </h1>
          </Col>
          <Col md={6}>
            <div
              className="mb-4 text-decoration-underline cursor-pointer text-end "
              style={{ marginTop: "3rem" }}
            >
              <a>More Products</a>
              <img
                style={{ width: "20px", height: "20px" }}
                src={flesh}
                alt={flesh}
              />
            </div>
          </Col>
        </Row>

        {/* <Row className="allcards ">
          <Col md={3} style={{ marginBottom: "3rem" }}>
            <div className="card position-relative ">
              <img src={sofa} className="card-img-top" alt="Sofa" />
              <div className="position-absolute top-0 text-white p-2 text-start m-0">
                <button
                  style={{ width: "67px", height: "24px", fontSize: "16px" }}
                  className="bg-white text-dark "
                >
                  NEW
                </button>
                <button
                  style={{
                    width: "71px",
                    height: "24px",
                    fontSize: "16px",
                    marginTop: "8px",
                    backgroundColor: "#38CB89",
                  }}
                >
                  -50%
                </button>
              </div>
              <div className="position-absolute top-0 end-0 m-2">
                <FaHeart
                  size={24}
                  color={liked ? "red" : "black"}
                  style={{ cursor: "pointer" }}
                  onClick={() => setLiked(!liked)}
                />
              </div>
              <div
                style={{ width: "140px", height: "46px", marginBottom: "15px" }}
                className="position-absolute start-50 translate-middle-x bottom-0"
              >
                {" "}
                <button className="add-to-cart-btn btn btn-dark w-100 h-100 ">
                  Add to cart
                </button>
              </div>
            </div>

            <div className="stars mt-2">
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStarHalfAlt} className="text-black" />
            </div>

            <h5 className="mt-2">Loveseat Sofa</h5>
            <span className="fw-bold me-3">$199.00</span>
            <span className="text-decoration-line-through text-muted ">
              $400.00
            </span>
          </Col>

          <Col md={3} style={{ marginBottom: "3rem" }}>
            <div className="card position-relative">
              <img src={lamp} className="card-img-top" alt="lamp" />
              <div className="position-absolute top-0 text-white p-2 text-start m-0">
                <button
                  style={{ width: "67px", height: "24px", fontSize: "16px" }}
                  className="bg-white text-dark "
                >
                  NEW
                </button>
                <button
                  style={{
                    width: "71px",
                    height: "24px",
                    fontSize: "16px",
                    marginTop: "10px",
                    backgroundColor: "#38CB89",
                  }}
                >
                  -50%
                </button>
              </div>
              <div className="position-absolute top-0 end-0 m-2">
                <FaHeart
                  size={24}
                  color={liked ? "red" : "black"}
                  style={{ cursor: "pointer" }}
                  onClick={() => setLiked(!liked)}
                />
              </div>
              <div
                style={{ width: "140px", height: "46px", marginBottom: "15px" }}
                className="position-absolute start-50 translate-middle-x bottom-0"
              >
                {" "}
                <button className="add-to-cart-btn btn btn-dark w-100 h-100 ">
                  Add to cart
                </button>
              </div>
            </div>

            <div className="stars mt-2">
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
            </div>

            <h5 className="mt-2">Table Lamp</h5>
            <span className="fw-bold me-3">$22.99</span>
          </Col>
          <Col md={3} style={{ marginBottom: "3rem" }}>
            <div className="card position-relative">
              <img src={table} className="card-img-top" alt="table" />
              <div className="position-absolute top-0 text-white p-2 text-start m-0">
                <button
                  style={{ width: "67px", height: "24px", fontSize: "16px" }}
                  className="bg-white text-dark "
                >
                  NEW
                </button>
                <button
                  style={{
                    width: "71px",
                    height: "24px",
                    fontSize: "16px",
                    marginTop: "10px",
                    backgroundColor: "#38CB89",
                  }}
                >
                  -50%
                </button>
              </div>
              <div className="position-absolute top-0 end-0 m-2">
                <FaHeart
                  size={24}
                  color={liked ? "red" : "black"}
                  style={{ cursor: "pointer" }}
                  onClick={() => setLiked(!liked)}
                />
              </div>
              <div
                style={{ width: "140px", height: "46px", marginBottom: "15px" }}
                className="position-absolute start-50 translate-middle-x bottom-0"
              >
                {" "}
                <button className="add-to-cart-btn btn btn-dark w-100 h-100 ">
                  Add to cart
                </button>
              </div>
            </div>

            <div className="stars mt-2">
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStarHalfAlt} className="text-black" />
            </div>

            <h5 className="mt-2">Beige Table Lamp</h5>
            <span className="fw-bold me-3">$20.99</span>
          </Col>
          <Col md={3} style={{ marginBottom: "3rem" }}>
            <div className="card position-relative">
              <img src={Toasted} className="card-img-top" alt="Toasted" />
              <div className="position-absolute top-0 text-white p-2 text-start m-0">
                <button
                  style={{ width: "67px", height: "24px", fontSize: "16px" }}
                  className="bg-white text-dark "
                >
                  NEW
                </button>
                <button
                  style={{
                    width: "71px",
                    height: "24px",
                    fontSize: "16px",
                    marginTop: "10px",
                    backgroundColor: "#38CB89",
                  }}
                >
                  -50%
                </button>
              </div>
              <div className="position-absolute top-0 end-0 m-2">
                <FaHeart
                  size={24}
                  color={liked ? "red" : "black"}
                  style={{ cursor: "pointer" }}
                  onClick={() => setLiked(!liked)}
                />
              </div>
              <div
                style={{ width: "140px", height: "46px", marginBottom: "15px" }}
                className="position-absolute start-50 translate-middle-x bottom-0"
              >
                {" "}
                <button className="add-to-cart-btn btn btn-dark w-100 h-100 ">
                  Add to cart
                </button>
              </div>
            </div>

            <div className="stars mt-2">
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
              <FontAwesomeIcon icon={faStar} className="text-black" />
            </div>

            <h5 className="mt-2">Toasted</h5>
            <span className="fw-bold me-3">$24.99</span>
          </Col>
        </Row> */}
 <Row className="allcards mt-5">
        {products.map((product, index) => (
          <Col key={index} md={3} style={{ marginBottom: "3rem" }}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
        <Row className="values" style={{ marginTop: "0.5rem" }}>
          <Col size={12} md={6} xs={6} lg={3}>
            <div className="crd">
              <svg
                className="picavg"
                width="48px"
                height="48px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 38V14M28 38H32M28 38H18M28 14C28 9.58172 24.4183 6 20 6H12C7.58172 6 4 9.58172 4 14V30C4 33.7304 6.55333 36.8645 10.0077 37.7499M28 14H34.4182C35.4344 14 36.4126 14.3868 37.154 15.0819L42.7358 20.3148C43.5424 21.071 44 22.1273 44 23.2329V34C44 36.2091 42.2091 38 40 38M40 38C40 40.2091 38.2091 42 36 42C33.7909 42 32 40.2091 32 38M40 38C40 35.7909 38.2091 34 36 34C33.7909 34 32 35.7909 32 38M18 38C18 40.2091 16.2091 42 14 42C11.7909 42 10 40.2091 10 38C10 37.916 10.0026 37.8326 10.0077 37.7499M18 38C18 35.7909 16.2091 34 14 34C11.8748 34 10.1368 35.6573 10.0077 37.7499"
                  stroke="#141718"
                  stroke-width="2.5"
                />
                <path
                  d="M20 16H16"
                  stroke="#141718"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 24H12"
                  stroke="#141718"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h5>Free Shipping</h5>
              <p>Order above $200</p>
            </div>
          </Col>
          <Col size={12} md={6} xs={6} lg={3}>
            <div className="crd">
              <svg
                className="picavg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="8"
                  width="40"
                  height="32"
                  rx="4"
                  stroke="#141718"
                  stroke-width="2.5"
                />
                <circle
                  cx="4"
                  cy="4"
                  r="4"
                  transform="matrix(1 0 0 -1 20 28)"
                  stroke="#141718"
                  stroke-width="2.5"
                />
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="matrix(1 0 0 -1 34 26)"
                  fill="#141718"
                />
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  transform="matrix(1 0 0 -1 10 26)"
                  fill="#141718"
                />
              </svg>

              <h5>Money-back</h5>
              <p>30 days guarantee</p>
            </div>
          </Col>
          <Col size={12} md={6} xs={6} lg={3}>
            <div className="crd">
              <svg
                className="picavg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 16H16M32 16C36.4183 16 40 19.5817 40 24V36C40 40.4183 36.4183 44 32 44H16C11.5817 44 8 40.4183 8 36V24C8 19.5817 11.5817 16 16 16M32 16V12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12V16M24 32V28"
                  stroke="#141718"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </svg>

              <h5>Secure Payments</h5>
              <p>Secured by Stripe</p>
            </div>
          </Col>
          <Col size={12} md={6} xs={6} lg={3}>
            <div className="crd">
              <svg
                className="picavg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42 38V34.7081C42 33.0725 41.0042 31.6017 39.4856 30.9942L35.4173 29.3669C33.4857 28.5943 31.2844 29.4312 30.354 31.292L30 32C30 32 25 31 21 27C17 23 16 18 16 18L16.708 17.646C18.5688 16.7156 19.4057 14.5143 18.6331 12.5827L17.0058 8.51444C16.3983 6.99581 14.9275 6 13.2919 6H10C7.79086 6 6 7.79086 6 10C6 27.6731 20.3269 42 38 42C40.2091 42 42 40.2091 42 38Z"
                  stroke="#141718"
                  stroke-width="2.5"
                  stroke-linejoin="round"
                />
              </svg>

              <h5>24/7 Support</h5>
              <p>Phone and Email support</p>
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: "3rem" }}>
          <Col md={6} xs={6} className="picback">
            <img
              src={backgroundimg}
              alt="no_backgroundimg"
              className="img-fluid w-100  "
            />
          </Col>
          <Col md={6} className="content">
            <p className="contp">SALE UP TO 35% OFF</p>
            <h2>
              HUNDREDS of <br />
              New lower prices!
            </h2>
            <p className="paraph">
              It’s more affordable than ever to give every <br />
              room in your home a stylish makeover
            </p>
            <p
              className="mt-1  text-decoration-underline cursor-pointer text-black "
              id="pshop"
            >
              Shop Now{" "}
              <i>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={flesh}
                  alt="flesh"
                />
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h1 className="mb-2 ">Articles</h1>
          </Col>
          <Col md={6}>
            <div className="text-decoration-underline cursor-pointer text-end  ">
              <a>More Articles</a>
              <img
                style={{ width: "20px", height: "20px" }}
                src={flesh}
                alt={flesh}
              />
            </div>
          </Col>
        </Row>
        <Row className="allartcls">
          <Col md={4} className="mt-3 mb-3">
            <div className="cardarticle">
              <img
                src={imgarticle1}
                alt="img1"
                className="img-fluid w-100 h-auto"
              />
              <p className="part ppt mb-0 d-md-block d-flex justify-content-between align-items-center">
                7 ways to decor your home
                <span className="text-decoration-underline cursor-pointer ms-2 d-flex align-items-center mt-2">
                  <a>Read More</a>
                  <img
                    style={{ width: "20px", height: "20px", marginLeft: "5px" }}
                    src={flesh}
                    alt="flesh"
                  />
                </span>
              </p>
            </div>
          </Col>

          <Col md={4} className="mt-3 mb-3">
            <div className="cardarticle">
              <img
                src={article2}
                alt="img2"
                className="img-fluid w-100 h-auto"
              />
              <p className="part mb-0 d-md-block d-flex justify-content-between align-items-center">
                Kitchen organization
                <span className="text-decoration-underline cursor-pointer ms-2 d-flex align-items-center mt-2">
                  <a>Read More</a>
                  <img
                    style={{ width: "20px", height: "20px", marginLeft: "5px" }}
                    src={flesh}
                    alt="flesh"
                  />
                </span>
              </p>
            </div>
          </Col>

          <Col md={4} className="mt-3 mb-3">
            <div className="cardarticle">
              <img
                src={article3}
                alt="img3"
                className="img-fluid w-100 h-auto"
              />
              <p className="part mb-0 d-md-block d-flex justify-content-between align-items-center">
                Decor your bedroom
                <span className="text-decoration-underline cursor-pointer ms-2 d-flex align-items-center mt-2">
                  <a>Read More</a>
                  <img
                    style={{ width: "20px", height: "20px", marginLeft: "5px" }}
                    src={flesh}
                    alt="flesh"
                  />
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
