import React from "react";
import "../../../Style/Category.css";
import NovelCard from "./NovelCard";
import n1 from "../../../assets/n1.jpg";
import n2 from "../../../assets/brolom.jpg";
import n3 from "../../../assets/n3.jpg";
import n4 from "../../../assets/n4.jpg";
import n5 from "../../../assets/n5.jpg";
import n6 from "../../../assets/n6.jpg";
import n7 from "../../../assets/n7.jpg";
import n8 from "../../../assets/n8.jpg";
import n9 from "../../../assets/n9.jpg";
import n10 from "../../../assets/n10.jpg";
import n11 from "../../../assets/n11.jpg";
import n12 from "../../../assets/n12.jpg";
import n13 from "../../../assets/n13.jpg";
import n14 from "../../../assets/n14.jpg";
import n15 from "../../../assets/n15.jpg";
import n16 from "../../../assets/n16.jpg";
import n17 from "../../../assets/n17.jpg";
import n18 from "../../../assets/n18.jpg";
import n19 from "../../../assets/n19.jpg";
import n20 from "../../../assets/n20.jpg";

const books = [
  {id: 1,title: "ចិត្តសាស្រ្តធ្វើជាបុរសដែលមនុស្សស្រីត្រូវការ",price: "28,000.00៛",img: n1,},
  { id: 2, title: "សម្អាងដួងចិត្ត", price: "28,000.00៛", img: n2 },
  { id: 3, title: "វិញ្ញាសាស្នេហ៏", price: "7,500.00៛", img: n3 },
  { id: 4, title: "វិថីសុភមង្គល", price: "48,000.00៛", img: n4 },
  { id: 5, title: "រាជទាយាទ", price: "80,000.00៛", img: n5 },
  { id: 6, title: "ប្រលោមចិត្ត ភាគ២", price: "32,000.00៛", img: n6 },
  { id: 7, title: "សែងសុរិយា", price: "32,000.00៛", img: n7 },
  { id: 8, title: "បំពេនាង", price: "32,000.00៛", img: n8 },
  { id: 9, title: "វិស្សមកាលអំពិលអំពែក", price: "32,000.00៛", img: n9 },
  { id: 10, title: "យុទ្ធសាស្ត្រសង្គ្រាម ឆាវឆាវ", price: "9,000.00៛", img: n10 },
  { id: 11, title: "ប្រាសាទបិទមុខ", price: "14,000.00៛", img: n11 },
  { id: 12, title: "និទានប្រាជ្ញា (រួមភាគ)", price: "18,000.00៛", img: n12 },
  { id: 13, title: "យុទ្ឋសាស្រ្តទម្លុះ​គោលដៅ", price: "16,000.00៛", img: n13 },
  { id: 14, title: "អតីតកូនលោកម្ចាស់", price: "28,000.00៛", img: n14 },
  { id: 15, title: "មនុស្សគល់ឈើ", price: "28,000.00៛", img: n15 },
  { id: 16, title: "មកតាមសន្យា", price: "26,000.00៛", img: n16 },
  { id: 17, title: "ស្អប់​ពេញស្រលាញ់", price: "12,500.00៛", img: n17 },
  { id: 18, title: "បុប្ផាណា ផ្កាមិនរុះរោយ", price: "24,000.00៛", img: n18 },
  { id: 19, title: "ទឹកក្រោមភ្លៀងរលឹម", price: "30,000.00៛", img: n19 },
  { id: 20, title: "អាថ៌កំបាំងជីវិត", price: "8,000.00៛", img: n20 },
];

const BookNovelid = () => {
  const addToCart = (title) => {
    alert(`${title} has been added to the cart!`);
  };

  return (
    <div className="container">
      <h1>Book Collection/ប្រលោមលោក</h1>
      <div className="list_Book">
        {books.map((book) => {
          const { id, title, price, img } = book;
          return (
            <div key={id}>
              <NovelCard
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

export default BookNovelid;
