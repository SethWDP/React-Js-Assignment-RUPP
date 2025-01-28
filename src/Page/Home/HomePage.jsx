import React from "react";
import "../../Style/HomePage.css";
import Marquee from "../../Components/Marquee";
import BestsellerCard from "../Category/BestsellerCard";
import gbook from "../../assets/Gbooks.png";
import ServiceFeatures from "../../Components/Home-component/ServiceFeatures";
import PeopleSayCard from "../../Components/Home-component/PeopleSayCard";
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

        <section className="container adv-book">
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-md-6 adv-imgbook text-center">
              <img src={gbook} alt="book" />
            </div>
            <div className="col-md-6 txt-book">
              <h2 className="fw-bold">Advantage of Reading Book</h2>
              <p className="mt-4">
                Reading books enriches the mind, boosts creativity, and enhances
                knowledge. It improves focus, vocabulary, and critical thinking
                skills while reducing stress.
              </p>
              <p>
                Books transport readers to new worlds, inspire ideas, and
                provide valuable life lessons. Whether for entertainment,
                education, or self-growth, reading fosters empathy, broadens
                perspectives, and nurtures a lifelong love for learning and
                personal development.
              </p>
              <button>Explore Now</button>
            </div>
          </div>
        </section>

        <section className="container">
          <ServiceFeatures />
        </section>
        <section className="container peoplesay">
          <h2>What people have to say</h2>
          <div>
            <PeopleSayCard />
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
