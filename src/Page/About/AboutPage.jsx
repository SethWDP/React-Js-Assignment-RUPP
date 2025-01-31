import React from "react";
import HeaderAbout from "../../Components/About-component/HeaderAbout";
import LifeBook from "../../Components/About-component/LifeBook";
import Team from "../../Components/About-component/Team";

const AboutPage = () => {
  return (
    <section className="aboutpage">
      <div className="about-header">
        <HeaderAbout />
      </div>
      <div className="about-content">
        <LifeBook />
      </div>
      <div className="team">
        <Team />
      </div>
    </section>
  );
};

export default AboutPage;
