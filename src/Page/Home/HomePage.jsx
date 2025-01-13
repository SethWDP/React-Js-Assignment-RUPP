import React from "react";
import "../../Style/HomePage.css";
import Marquee from "../../Components/Marquee";
import BestsellerCard from "../Category/BestsellerCard";
const HomePage = () => {
  return (
    <>
      <section className="home">
        <header className="header">
          <div className=" txt-header">
            <h1>Get All The Books You Need!</h1>
            <p>
              Your literary journey starts here at this ShopBook. Discover, shop
              and get book delivered fast-all in one place.
            </p>
            <button>Explore Now</button>
          </div>
        </header>

        <section className="marquee">
          <Marquee />
        </section>

        <section className="container bestseller">
          <h2 className="">Bestsellers</h2>
          <div className="row">
            <div className="bookcard">
              <BestsellerCard />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
