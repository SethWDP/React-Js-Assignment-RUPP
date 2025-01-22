import React from "react";
import "../../../Styles/Category.css";

const BookCard = ({ book, addToCart }) => {
  return (
    <div className="book_card">
      <img src={book.img} alt={book.title} className="book_image" />
      <h3 className="book_title">{book.title}</h3>
      <p className="book_price">{book.price}</p>
      <button className="add_cart_btn" onClick={() => addToCart(book.title)}>
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;
