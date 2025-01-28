import React from "react";
import HeaderAbout from "../../Components/About-component/HeaderAbout";
import LifeBook from "../../Components/About-component/LifeBook";

const AboutPage = () => {
  return (
    <section className="aboutpage">
      <div className="about-header">
        <HeaderAbout />
      </div>
      <div className="about-content">
        <LifeBook />
      </div>
    </section>
  );
};

export default AboutPage;
