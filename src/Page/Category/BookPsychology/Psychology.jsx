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
import p1 from "../../../assets/p1.jpg";
import p2 from "../../../assets/p2.jpg";
import p3 from "../../../assets/p3.jpg";
import p4 from "../../../assets/p4.jpg";
import p5 from "../../../assets/p5.jpg";
import p6 from "../../../assets/p6.jpg";
import p7 from "../../../assets/p7.jpg";
import p8 from "../../../assets/p8.jpg";

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
  { id: 1, title: "ពេលព្រឹកដ៏អស្ចារ្យ ភាគ២", price: "28,000.00៛", img: p1 },
    { id: 2, title: "ស្វែងរកអត្ថន័យជីវិត", price: "28,000.00៛", img: p2 },
    { id: 3, title: "វិថីឆ្ពោះទៅកាន់មហាសេដ្ឋី", price: "7,500.00៛", img: p3 },
    { id: 4, title: "២២២ទស្សនៈនៃភាពជាអ្នកដឹកនាំ", price: "48,000.00៛", img: p4 },
    { id: 5, title: "ព្រឹកព្រលឹម", price: "80,000.00៛", img: p5 },
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
    { id: 8, title: "កម្លាំង​ការ​គិត​វិជ្ជមាន", price: "32,000.00៛", img: p8 },
];

const BookPsychologyid = () => {
  const addToCart = (title) => {
    alert(`${title} has been added to the cart!`);
  };

  return (
    <div className="container">
      <h1>Book Collection / ចិត្តវិទ្យា</h1>
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
