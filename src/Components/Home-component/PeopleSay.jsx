import React from "react";

const PeopleSay = ({ img, name, desc }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="card" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default PeopleSay;
