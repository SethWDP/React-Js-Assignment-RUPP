import React from "react";
const PeopleSay = ({ img, name, desc }) => {
  return (
    <>
      <section className="say-card">
        <img src={img} alt="profile" className="profile-say" />
        <h2 className="name-say">{name}</h2>
        <p className="desc-say">{desc}</p>
      </section>
    </>
  );
};

export default PeopleSay;
