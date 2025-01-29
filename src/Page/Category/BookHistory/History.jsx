import React from "react";
import HistoryCard from "./HistoryCard";
import "../../../Style/Category.css";

import h1 from "../../../assets/n1.jpg";
import h2 from "../../../assets/h2.jpg";
import h3 from "../../../assets/h3.jpg";
import h4 from "../../../assets/h4.jpg";
import h5 from "../../../assets/h5.jpg";
import h6 from "../../../assets/h6.jpg";
import h7 from "../../../assets/h7.jpg";
// import h8 from "../../../assets/h8.jpg";
import h9 from "../../../assets/h9.jpg";
import h10 from "../../../assets/h10.jpg";
import h11 from "../../../assets/h11.jpg";
import h12 from "../../../assets/h12.jpg";
import h13 from "../../../assets/h13.jpg";
import h14 from "../../../assets/h14.jpg";
import h15 from "../../../assets/h15.jpg";
import h16 from "../../../assets/h16.jpg";
import h17 from "../../../assets/h17.jpg";
import h18 from "../../../assets/h18.jpg";
import h19 from "../../../assets/h19.jpg";
import h20 from "../../../assets/h20.jpg";

const History = () => {
  const books = [
    {
      id: 1,
      img: h1,
      title: "100 រឿងដែលគួរយល់ដឹងពីប្រទេសវៀតណាម",
      price: "28,000.00៛",
    },
    {
      id: 2,
      img: h2,
      title: "ដើមហេតុនាំឱ្យផ្ទុះសង្គ្រាមរវាងអុីស្រាអែល-អារ៉ាប់",
      price: "28,000.00៛",
    },
    {
      id: 3,
      img: h3,
      title: "រឿងរ៉ាវដែលនៅពីក្រោយការរកសុីរបស់ក្រុមហ៊ុនល្បីៗ",
      price: "7,500.00៛",
    },
    { id: 4, img: h4, title: "ស៊ុន យ៉ាតសេន", price: "48,000.00៛" },
    { id: 5, img: h5, title: "របបកម្ពុជាប្រជាធិបតេយ្យ", price: "80,000.00៛" },
    {
      id: 6,
      img: h6,
      title: "ការល្បងបរិយាយ១០០ទស្សនៈដេីម្បីបង្កេីនគុណតម្លៃជីវិត",
      price: "32,000.00៛",
    },
    {
      id: 7,
      img: h7,
      title: "សមត្ថភាពដែលត្រូវហ្វឹកហាត់មុនអាយុ៣៥ឆ្នាំ",
      price: "32,000.00៛",
    },
    // { id: 8, img: h8, title: "ពិភពលោកដែលខ្ញុំមើលឃើញ", price: "32,000.00៛" },
    { id: 9, img: h9, title: "យុទ្ធសាស្ត្រយកឈ្នះយក្ស", price: "32,000.00៛" },
    {
      id: 10,
      img: h10,
      title: "កម្ពុជាក្រោមខ្មែរ និង វិបត្តិអន្តរជាតិ",
      price: "32,000.00៛",
    },
    {
      id: 11,
      img: h11,
      title: "ហេតុម្តេចវៀតណាមលុកលុយកម្ពុជា",
      price: "32,000.00៛",
    },
    {
      id: 12,
      img: h12,
      title: "ហុីត្លែរ កំពូលមេដឹកនាំសង្គ្រាមផ្តាច់ការ",
      price: "32,000.00៛",
    },
    { id: 13, img: h13, title: "ស៊ុនជឺ", price: "32,000.00៛" },
    { id: 14, img: h14, title: "សម្ដេច", price: "32,000.00៛" },
    { id: 15, img: h15, title: "សមុទ្រចិនខាងត្បូង", price: "32,000.00៛" },
    { id: 16, img: h16, title: "ពិភពលោកដែលខ្ញុំមើលឃើញ", price: "32,000.00៛" },
    {
      id: 17,
      img: h17,
      title: "ពិជ័យសង្គ្រាមបុរាណតម្រាសឹក",
      price: "32,000.00៛",
    },
    {
      id: 18,
      img: h18,
      title: "ប្រវត្តិសាស្រ្តខ្មែរ ដេវិឌ ឆាណ្ឌល័រ",
      price: "32,000.00៛",
    },
    { id: 19, img: h19, title: "ខ្មែរមិនដែលសូន្យ", price: "32,000.00៛" },
    {
      id: 20,
      img: h20,
      title: "ការល្បងបរិយាយ១០០ទស្សនៈដេីម្បីបង្កេីនគុណតម្លៃជីវិត",
      price: "32,000.00៛",
    },
  ];
  return (
    <div className="container">
      <h1>Book Collection/ប្រវត្តិសាស្រ្ត</h1>
      <div class name="list_Book">
        {books.map((book) => {
          const { id, img, title, price } = book;
          return (
            <div key={id}>
              <HistoryCard img={img} title={title} price={price} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
