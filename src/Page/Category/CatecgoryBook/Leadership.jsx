import React from "react";
import "../../Style/Category.css";
import l1 from "../assets/leader1.jpg";
import l2 from "../assets/leader2.jpg";
import l3 from "../assets/leader3.jpg";
import l4 from "../assets/leader4.jpg";
import l5 from "../assets/leader5.jpg";
import l6 from "../assets/leader6.jpg";
import l7 from "../assets/leader7.jpg";
import l8 from "../assets/leader8.jpg";
import l9 from "../assets/leader8.jpg";
import l10 from "../assets/leader8.jpg";
import l11 from "../assets/leader8.jpg";
import l12 from "../assets/leader8.jpg";
import l13 from "../assets/leader8.jpg";
import l14 from "../assets/leader8.jpg";
import l15 from "../assets/leader8.jpg";
import l16 from "../assets/leader8.jpg";
import l17 from "../assets/leader8.jpg";
import l18 from "../assets/leader8.jpg";
import l19 from "../assets/leader8.jpg";
import l20 from "../assets/leader8.jpg";
// Sample data for books
const books = [
  {
    id: 1,
    title: "ចិត្តវិទ្យាអំពីប្រាក់",
    price: "28,000.00៛",
    img: l1,
  },
  {
    id: 2,
    title: "ចិត្តសាស្ត្ររបស់លុយ",
    price: "28,000.00៛",
    img: l2,
  },
  {
    id: 3,
    title: "វិធីសាស្រ្ត​ក្នុងការអានសៀវភៅ",
    price: "7,500.00៛",
    img: l3,
  },
  {
    id: 4,
    title: "ពេលព្រឹកដ៏អស្ចារ្យ ភាគ២",
    price: "48,000.00៛",
    img: l4,
  },
  {
    id: 5,
    title: "គតិរួមលោក",
    price: "80,000.00៛",
    img: l5,
  },
  {
    id: 6,
    title: "មាគ៌ាបុគ្គលឆ្នើម",
    price: "32,000.00៛",
    img: l6,
  },
  {
    id: 7,
    title: "យុទ្ធសាស្រ្តធ្វើជំនួញអចលនទ្រព្យ",
    price: "32,000.00៛",
    img: l7,
  },
  {
    id: 8,
    title: "សុភាសិតជោគជ័យ",
    price: "32,000.00៛",
    img: l8,
  },
  {
    id: 9,
    title: "មូលដ្ឋានគ្រឹះនៃអាជីវកម្ម",
    price: "32,000.00៛",
    img: l9,
  },
  {
    id: 10,
    title: "ព្រឹកព្រលឹម",
    price: "32,000.00៛",
    img: l10,
  },
  {
    id: 11,
    title: "24ទិចនិចវាយលុក និងទប់ទល់នៅលើសមរភូមិជំនួញ",
    price: "32,000.00៛",
    img: l11,
  },
  {
    id: 12,
    title: "ស្រ្តី​ដែក​ថែប",
    price: "32,000.00៛",
    img: l12,
  },
  {
    id: 13,
    title: "ជីវិតដ៏អស្ចារ្យនៅម៉ោង៥ព្រឹក",
    price: "32,000.00៛",
    img: l13,
  },
  {
    id: 14,
    title: "ប្តូររបៀបគ្រប់គ្រងលុយកាក់ផ្ទាល់ខ្លួន",
    price: "32,000.00៛",
    img: l14,
  },
  {
    id: 15,
    title: "យុទ្ធសាស្ត្រយកឈ្នះយក្ស",
    price: "32,000.00៛",
    img: l15,
  },
  {
    id: 16,
    title: "ឥទ្ធិពល – The Influence",
    price: "32,000.00៛",
    img: l16,
  },
  {
    id: 17,
    title: "របបនយោបាយរបស់មហាអំណាចរុស្សី",
    price: "32,000.00៛",
    img: l17,
  },
  {
    id: 18,
    title: "គន្លឹះការអភិវឌ្ឍជំនាញទំនាក់ទំនង",
    price: "32,000.00៛",
    img: l18,
  },
  {
    id: 19,
    title: "Eat that Frog",
    price: "32,000.00៛",
    img: l19,
  },
  {
    id: 20,
    title: "សិល្បះនិយាយ​ ខ្លី​ខ្លឹមប្រកបដោយប្រសិទ្ធភាព​",
    price: "32,000.00៛",
    img: l20,
  },
];

const BookLeadershipid = () => {
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

export default BookLeadershipid;
