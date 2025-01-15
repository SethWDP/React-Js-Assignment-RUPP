import React from "react";
import BookLan from "./BookLan";
import img1 from "../../../assets/book1.jpg";
import img2 from "../../../assets/book4.jpg";
import img3 from "../../../assets/book6.jpg";

const BookLanCard = () => {
  const CodeBook = [
    {
      id: 1,
      img: img1,
      name: "Book",
      des: "Book description",
    },
    {
      id: 2,
      img: img2,
      name: "Book",
      des: "Book description",
    },
    {
      id: 3,
      img: img3,
      name: "Book",
      des: "Book description",
    },
    {
      id: 3,
      img: img3,
      name: "Book",
      des: "Book description",
    },
    {
      id: 3,
      img: img3,
      name: "Book",
      des: "Book description",
    },
    {
      id: 3,
      img: img3,
      name: "Book",
      des: "Book description",
    },
    {
      id: 3,
      img: img3,
      name: "Book",
      des: "Book description",
    },
    {
      id: 3,
      img: img3,
      name: "Book",
      des: "Book description",
    },
  ];
  return (
    <div className="container d-flex justify-content-start flex-wrap gap-5">
      {CodeBook.map((cbook) => {
        const { id, img, name, des } = cbook;
        return (
          <div key={id}>
            <BookLan img={img} name={name} description={des} />
          </div>
        );
      })}
    </div>
  );
};

export default BookLanCard;
