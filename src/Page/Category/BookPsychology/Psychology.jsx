import React from "react";
import "../../../Style/Category.css";
import PsychologyCard from "./PsychologyCard";
import ps1 from "../../../assets/ps1.jpg";
import ps2 from "../../../assets/ps2.jpg";
import ps3 from "../../../assets/ps3.jpg";
import ps4 from "../../../assets/ps4.jpg";
import ps5 from "../../../assets/ps5.jpg";
import ps6 from "../../../assets/ps6.jpg";
import ps7 from "../../../assets/ps7.jpg";
import ps8 from "../../../assets/ps8.jpg";

// Sample data for books
const books = [
  { id: 1, title: "ចិត្តសាស្ត្ររបស់លុយ", price: "28,000.00៛", img: ps1 },
  { id: 2, title: "ថាមពលនៃការនិយាយ", price: "28,000.00៛", img: ps2 },
  {
    id: 3,
    title: "សំនួនវោហារក្នុង​ពិភព​យុទ្ធគុនចិន",
    price: "7,500.00៛",
    img: ps3,
  },
  { id: 4, title: "កម្រងគតិបណ្ឌិត", price: "48,000.00៛", img: ps4 },
  { id: 5, title: "មាគ៌ាបុគ្គលឆ្នើម", price: "80,000.00៛", img: ps5 },
  { id: 6, title: "ការគិត", price: "32,000.00៛", img: ps6 },
  { id: 7, title: "ដឺមេជីក", price: "32,000.00៛", img: ps7 },
  {
    id: 8,
    title: "យកឈ្នះក្តីទុក្ខ សាងជីវិតស្រស់បំព្រង",
    price: "32,000.00៛",
    img: ps8,
  },
];

const BookPsychologyid = () => {
  const addToCart = (title) => {
    alert(`${title} has been added to the cart!`);
  };

  return (
    <div className="container">
      <h1>Book Collection/ចិត្តវិទ្យា</h1>
      <div className="list_Book">
        {books.map((book) => {
          const { id, title, price, img } = book;
          return (
            <div key={id}>
              <PsychologyCard
                img={img}
                title={title}
                price={price}
                addToCart={addToCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookPsychologyid;
