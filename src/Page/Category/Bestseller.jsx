import React from "react";

const Bestseller = ({ img, name, descripton }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="Bestseller-Book" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{descripton}</p>
        </div>
      </div>
    </>
  );
};

export default Bestseller;
