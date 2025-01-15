import React from "react";
import "../../Style/Category.css";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";

// Sample data for books
const books = [
  {
    id: 1,
    title: "ពេលព្រឹកដ៏អស្ចារ្យ ភាគ២",
    price: "28,000.00៛",
    img: p1,
  },
  {
    id: 2,
    title: "ស្វែងរកអត្ថន័យជីវិត",
    price: "28,000.00៛",
    img: p2,
  },
  {
    id: 3,
    title: "វិថីឆ្ពោះទៅកាន់មហាសេដ្ឋី",
    price: "7,500.00៛",
    img: p3,
  },
  {
    id: 4,
    title: "២២២ទស្សនៈនៃភាពជាអ្នកដឹកនាំ",
    price: "48,000.00៛",
    img: p4,
  },
  {
    id: 5,
    title: "ព្រឹកព្រលឹម",
    price: "80,000.00៛",
    img: p5,
  },
  {
    id: 6,
    title: "គតិបណ្ឌិត និងសិល្បៈនយោបាយ តេង ស៊ាវពីង",
    price: "32,000.00៛",
    img: p6,
  },
  {
    id: 7,
    title: "កុំធ្វើជាមនុស្សឆ្លាតទាំងដែលមិនចេះនិយាយស្តី",
    price: "32,000.00៛",
    img: p7,
  },
  {
    id: 8,
    title: "កម្លាំង​ការ​គិត​វិជ្ជមាន",
    price: "32,000.00៛",
    img: p8,
  },
];

const BookPhilosophyid = () => {
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

export default BookPhilosophyid;
