import React from "react";
// import "./Bookcard.css";
// import "../../Style/Category.css";
const Bestseller = ({ img, name, description, price }) => {
  return (
    // <div
    //   className="card bestseller-card"
    //   style={{ width: "18rem", height: "32rem" }}
    // >
    //   <img src={img} className="book_image" alt={`${name}-book`} />
    //   <div className="card-body ">
    //     <h5 className="card-title">{name}</h5>
    //     <p className="card-text">{description}</p>
    //     <p className="card-price">{price}</p>
    //     <button className="add-to-cart-btn  " onClick={onAddToCart}>
    //       Add to Cart
    //     </button>
    //   </div>
    // </div>
    <div className="book_card">
      <img src={img} alt="imgBook" className="book_image" />
      <h3 className="book_title">{name}</h3>
      <p className="book_price">{description}</p>
      <p className="book_price">{price}</p>
      <button className="add_cart_btn" onClick={() => addToCart(title)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Bestseller;
