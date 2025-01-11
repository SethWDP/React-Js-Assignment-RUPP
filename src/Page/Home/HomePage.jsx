import React from "react";
import "../../Style/HomePage.css";
import Gbook from "../../assets/Gbooks.png";
const HomePage = () => {
  return (
    <>
      <section className="home">
        <header className="header d-flex">
          <div className="txt-header">
            <h1 className="text-white">Get All The Books You Need!</h1>
            <p className="text-white">
              Your literary journey starts here at this ShopBook. Discover, shop
              and get book delivered fast-all in one place.
            </p>
            <button className="btn btn-dark w-25 ">Explore-Now</button>
          </div>
          <div className="img-book w-50 ">
            <img src={Gbook} alt="" />
          </div>
        </header>
      </section>
      ;
    </>
  );
};

export default HomePage;
