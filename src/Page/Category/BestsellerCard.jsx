import React from "react";
import Bestseller from "./Bestseller";
import img1 from "../../assets/book1.jpg";
import img2 from "../../assets/book2.jpg";
import img3 from "../../assets/book3.jpg";
import img4 from "../../assets/book4.jpg";
const BestsellerCard = () => {
  const bookdata = [
    {
      id: 1,
      img: img1,
      name: "Book",
      des: "Book description",
    },
    {
      id: 2,
      img: img2,
      name: "Book 2",
      des: "Book 2 description",
    },
    {
      id: 3,
      img: img3,
      name: "Book 3",
      des: "Book 3 description",
    },
    {
      id: 4,
      img: img4,
      name: "Book 4",
      des: "Book 4 description",
    },
  ];
  return (
    <div className="d-flex justify-content-around">
      {bookdata.map((book) => {
        const { id, img, name, des } = book;
        return (
          <div key={id}>
            <Bestseller img={img} name={name} description={des} />
          </div>
        );
      })}
    </div>
  );
};

export default BestsellerCard;
