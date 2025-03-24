import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ imgSrc, title, price, oldPrice, rating }) => {
  const [liked, setLiked] = useState(false); // État de like pour chaque produit

  return (
    <div className="card position-relative">
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="position-absolute top-0 text-white p-2 text-start m-0">
        <button
          style={{ width: "67px", height: "24px", fontSize: "16px" }}
          className="bg-white text-dark"
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
          onClick={() => setLiked(!liked)} // Gère le like pour ce produit
        />
      </div>
      <div
        style={{ width: "140px", height: "46px", marginBottom: "15px" }}
        className="position-absolute start-50 translate-middle-x bottom-0"
      >
        <button className="add-to-cart-btn btn btn-dark w-100 h-100">
          Add to cart
        </button>
      </div>
      <div className="stars mt-2">
        {Array.from({ length: Math.floor(rating) }, (_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-black" />
        ))}
        {rating % 1 !== 0 && (
          <FontAwesomeIcon icon={faStarHalfAlt} className="text-black" />
        )}
      </div>
      <h5 style={{ marginLeft: "0.5rem" }} className="mt-2">
        {title}
      </h5>
      <div style={{ marginLeft: "0.5rem" }} className="d-flex align-items-center">
        <span className="fw-bold me-2">{price}</span>
        {oldPrice && (
          <span className="text-decoration-line-through text-muted">
            {oldPrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;