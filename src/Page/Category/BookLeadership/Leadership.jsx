import React from "react";
import LeadershipCard from "../BookLeadership/LeadershipCard";
import "../../../Style/Category.css";
import l1 from "../../../assets/leader1.jpg";
import l2 from "../../../assets/leader2.jpg";
import l3 from "../../../assets/leader3.jpg";
import l4 from "../../../assets/leader4.jpg";
import l5 from "../../../assets/leader5.jpg";
import l6 from "../../../assets/leader6.jpg";
import l7 from "../../../assets/leader7.jpg";
import l8 from "../../../assets/leader8.jpg";
import l9 from "../../../assets/leader9.jpg";
import l10 from "../../../assets/leader10.jpg";
import l11 from "../../../assets/leader11.jpg";
import l12 from "../../../assets/leader12.jpg";
import l13 from "../../../assets/leader13.jpg";
import l14 from "../../../assets/leader14.jpg";
import l15 from "../../../assets/leader15.jpg";
import l16 from "../../../assets/leader16.jpg";
import l17 from "../../../assets/leader17.jpg";
import l18 from "../../../assets/leader18.jpg";
import l19 from "../../../assets/leader19.jpg";
import l20 from "../../../assets/leader20.jpg";

const books = [
  { id: 1, img: l1, title: "ចិត្តវិទ្យាអំពីប្រាក់", price: "28,000.00៛" },
  { id: 2, img: l2, title: "ចិត្តសាស្ត្ររបស់លុយ", price: "28,000.00៛" },
  { id: 3, img: l3, title: "វិធីសាស្រ្ត​ក្នុងការអានសៀវភៅ", price: "7,500.00៛" },
  { id: 4, img: l4, title: "ពេលព្រឹកដ៏អស្ចារ្យ ភាគ២", price: "48,000.00៛" },
  { id: 5, img: l5, title: "គតិរួមលោក", price: "80,000.00៛" },
  { id: 6, img: l6, title: "មាគ៌ាបុគ្គលឆ្នើម", price: "32,000.00៛" },
  {
    id: 7,
    img: l7,
    title: "យុទ្ធសាស្រ្តធ្វើជំនួញអចលនទ្រព្យ",
    price: "32,000.00៛",
  },
  { id: 8, img: l8, title: "សុភាសិតជោគជ័យ", price: "32,000.00៛" },
  { id: 9, img: l9, title: "មូលដ្ឋានគ្រឹះនៃអាជីវកម្ម", price: "32,000.00៛" },
  { id: 10, img: l10, title: "ព្រឹកព្រលឹម", price: "32,000.00៛" },
  {
    id: 11,
    img: l11,
    title: "24ទិចនិចវាយលុក និងទប់ទល់នៅលើសមរភូមិជំនួញ",
    price: "32,000.00៛",
  },
  { id: 12, img: l12, title: "ស្រ្តី​ដែក​ថែប", price: "32,000.00៛" },
  {
    id: 13,
    img: l13,
    title: "ជីវិតដ៏អស្ចារ្យនៅម៉ោង៥ព្រឹក",
    price: "32,000.00៛",
  },
  {
    id: 14,
    img: l14,
    title: "ប្តូររបៀបគ្រប់គ្រងលុយកាក់ផ្ទាល់ខ្លួន",
    price: "32,000.00៛",
  },
  { id: 15, img: l15, title: "យុទ្ធសាស្ត្រយកឈ្នះយក្ស", price: "32,000.00៛" },
  { id: 16, img: l16, title: "ឥទ្ធិពល – The Influence", price: "32,000.00៛" },
  {
    id: 17,
    img: l17,
    title: "របបនយោបាយរបស់មហាអំណាចរុស្សី",
    price: "32,000.00៛",
  },
  {
    id: 18,
    img: l18,
    title: "គន្លឹះការអភិវឌ្ឍជំនាញទំនាក់ទំនង",
    price: "32,000.00៛",
  },
  { id: 19, img: l19, title: "Eat that Frog", price: "32,000.00៛" },
  {
    id: 20,
    img: l20,
    title: "សិល្បះនិយាយ​ ខ្លី​ខ្លឹមប្រកបដោយប្រសិទ្ធភាព​",
    price: "32,000.00៛",
  },
];

const BookLeadershipid = () => {
  // const addToCart = (title) => {
  //   alert(`${title} has been added to the cart!`);
  // };

  return (
    <div className="container">
      <h1>Book Collection / ភាពជាអ្នកដឹកនាំ</h1>
      <div className="list_Book">
        {books.map((book) => {
          const { id, img, title, price } = book;
          return (
            <div key={id}>
              <LeadershipCard img={img} title={title} price={price} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookLeadershipid;
