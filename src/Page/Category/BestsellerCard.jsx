import React from "react";
<<<<<<< HEAD
import "../../Style/Category.css";
// import "./Bookcard.css";
=======
>>>>>>> 0f9532a51dfd746753dcaa0e9d424ca8463d2159
import Bestseller from "./Bestseller";
import img5 from "../../assets/book11.jpg";
import img2 from "../../assets/book12.jpg";
import img3 from "../../assets/b4.jpg";
import img4 from "../../assets/b15.jpg";

const BestsellerCard = () => {
  const bookdata = [
    {
      id: 1,
      img: img5,
      name: "Influence ឥទ្ធិពល",
      des: "កែរសម្រួលដោយ លោក​ ញូង រ៉ាយ៉ា",
      price: "6$",
    },
    {
      id: 2,
      img: img2,
      name: "ការគិត​ Thinking",
      des: "កែរសម្រួលដោយ លោក ពិសិដ្ឋ",
      price: "7$",
    },
    {
      id: 3,
      img: img3,
      name: "មូលដ្ឋានគ្រិះនៃអាជីវកម្ម",
      des: "​កែរសម្រួលដោយ លោក  ឈុំ សីហា",
      price: "7$",
    },
    {
      id: 4,
      img: img4,
      name: "គន្លិះសម្ងាត់នៃភាពជោគជ័យ",
      des: "និពន្ដដោយលោក Alan Pease",
      price: "5$",
    },
  ];

  return (
<<<<<<< HEAD
    <>
      <div className="container">
        <div className="d-flex justify-content-around list_Book">
          {bookdata.map((book) => {
            const { id, img, name, des, price } = book;
            return (
              <div key={id}>
                <Bestseller
                  img={img}
                  name={name}
                  description={des}
                  price={price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
=======
    <div className="bestseller-container">
      {bookdata.map((book) => (
        <Bestseller
          key={book.id}
          img={book.img}
          name={book.name}
          description={book.des}
          price={book.price}
        />
      ))}
    </div>
>>>>>>> 0f9532a51dfd746753dcaa0e9d424ca8463d2159
  );
};

export default BestsellerCard;
