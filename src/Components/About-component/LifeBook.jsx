import React from "react";
import "./LifeBook.css";
import readbook from "../../assets/readbook.jpg";
import seed from "../../assets/seed.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faSeedling } from "@fortawesome/free-solid-svg-icons";
const LifeBook = () => {
  return (
    <>
      <section className="book-life">
        <div className="container read">
          <div className="read-img">
            <img src={readbook} alt="book" />
          </div>
          <div className="read-txt">
            <FontAwesomeIcon icon={faFire} className="fire-icon" />
            <h2>Give life to reading</h2>
            <p>
              Books can change lives. Reading brings ideas, grows imagination,
              and helps us understand others. It makes us curious, teaches us
              new things, and connects people, making the world kinder and
              smarter.
            </p>
          </div>
        </div>
        <div className="container seed">
          <div className="seed-txt">
            <FontAwesomeIcon icon={faSeedling} className="seed-icon" />
            <h2>Seed of knowledge</h2>
            <p>
              Starting with small ideas that grow into learning and
              understanding. Like a tiny seed grows into a big tree, knowledge
              grows when we learn little by little. It helps us solve problems,
              make good choices, and share with others. The more we take care of
              it, the more it grows and helps us in life.
            </p>
          </div>
          <div className="seed-img">
            <img src={seed} alt="book" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LifeBook;
