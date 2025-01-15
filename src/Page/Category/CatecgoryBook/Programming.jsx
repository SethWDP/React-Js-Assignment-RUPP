import React from "react";
import "../../Style/Category.css";
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";
import pro4 from "../assets/pro4.jpg";
import pro5 from "../assets/pro5.jpg";
import pro6 from "../assets/pro6.jpg";
import pro7 from "../assets/pro7.jpg";
import pro8 from "../assets/pro8.jpg";

// Sample data for books
const books = [
  {
    id: 1,
    title: "Python Programming",
    price: "28,000.00៛",
    img: pro1,
  },
  {
    id: 2,
    title: "C# & C++",
    price: "28,000.00៛",
    img: pro2,
  },
  {
    id: 3,
    title: "Cracking Python",
    price: "7,500.00៛",
    img: pro3,
  },
  {
    id: 4,
    title: "Beginner's Step-by-Step Coding",
    price: "48,000.00៛",
    img: pro4,
  },
  {
    id: 5,
    title: "HTML, CSS and JavaScript",
    price: "80,000.00៛",
    img: pro5,
  },
  {
    id: 6,
    title: "Coding Games in search",
    price: "32,000.00៛",
    img: pro6,
  },
  {
    id: 7,
    title: "Hello World!",
    price: "32,000.00៛",
    img: pro7,
  },
  {
    id: 8,
    title: "Python Programming for Beginners",
    price: "32,000.00៛",
    img: pro8,
  },
];

const BookProgrammingid = () => {
  return (
    <div className="container">
      <h1>Book Collection</h1>
      <div className="list_Book">
        {books.map((book) => (
          <div key={book.id} className="book_card">
            <img src={book.img} alt={book.title} className="book_image" />
            <h3 className="book_title">{book.title}</h3>
            <p className="book_price">{book.price}</p>
            <button className="add_cart_btn" onClick={() => addToCart(book.title)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookProgrammingid;
