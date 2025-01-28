import React from "react";
const Bestseller = ({ img, name, description, price }) => {
  return (
    <div className="book_card">
      <img src={img} alt="imgBook" className="book_image" />
      <h3 className="book_title">{name}</h3>
      <p className="book_price">{description}</p>
      <p className="book_price">{price}</p>
      <button className="add_cart_btn" onClick={() => addToCart(title)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Bestseller;
