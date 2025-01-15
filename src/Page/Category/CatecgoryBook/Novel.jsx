import React from "react";
import "../../Style/Category.css";
import n1 from "../assets/n1.jpg";
import n2 from "../assets/n2.jpg";
import n3 from "../assets/n3.jpg";
import n4 from "../assets/n4.jpg";
import n5 from "../assets/n5.jpg";
import n6 from "../assets/n6.jpg";
import n7 from "../assets/n7.jpg";
import n8 from "../assets/n8.jpg";

// Sample data for books
const books = [
  {
    id: 1,
    title: "ចិត្តសាស្រ្តធ្វើជាបុរសដែលមនុស្សស្រីត្រូវការ",
    price: "28,000.00៛",
    img:n1,
  },
  {
    id: 2,
    title: "សម្អាងដួងចិត្ត",
    price: "28,000.00៛",
    img:n2,
  },
  {
    id: 3,
    title: "វិញ្ញាសាស្នេហ៏",
    price: "7,500.00៛",
    img:n3,
  },
  {
    id: 4,
    title: "វិថីសុភមង្គល",
    price: "48,000.00៛",
    img:n4,
  },
  {
    id: 5,
    title: "រាជទាយាទ",
    price: "80,000.00៛",
    img:n5,
  },
  {
    id: 6,
    title: "ប្រលោមចិត្ត ភាគ២",
    price: "32,000.00៛",
    img:n6,
  },
  {
    id: 7,
    title: "សែងសុរិយា",
    price: "32,000.00៛",
    img:n7,
  },
  {
    id: 8,
    title: "បំពេនាង",
    price: "32,000.00៛",
    img:n8,
  },
];

const BookNovelid = () => {
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

export default BookNovelid;
