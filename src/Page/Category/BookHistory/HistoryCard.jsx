import React from "react";
import "../../../Style/Category.css";
const HistoryCard = ({ img, title, price, addToCart }) => {
  return (
    <div className="book_card">
      <img src={img} alt="bookImg" className="book_image" />
      <h3 className="book_title">{title}</h3>
      <p className="book_price">{price}</p>
      <button className="add_cart_btn" onClick={() => addToCart(title)}>
        Add to Cart
      </button>
    </div>
  );
};

export default HistoryCard;
