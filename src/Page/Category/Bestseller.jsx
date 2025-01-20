import React from "react";
import "./Bookcard.css"; // Ensure this contains the updated styles
const Bestseller = ({ img, name, description, price, onAddToCart }) => {
  return (
    <div
      className="card bestseller-card"
      style={{ width: "18rem", height: "32rem" }}
    >
      <img src={img} className="card-img-top" alt={`${name}-book`} />
      <div className="card-body ">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">{price}</p>
        <button className="add-to-cart-btn  " onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Bestseller;
