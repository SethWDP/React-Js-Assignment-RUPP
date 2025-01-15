import React from "react";
import "./ServiceFeatures.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faBook,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
const ServiceFeatures = () => {
  return (
    <>
      <section className="service">
        <div className="freeDeliverySection">
          <FontAwesomeIcon className="icon" icon={faTruck} />
          <h3>Free Delivery</h3>
          <p>Enjoy free shipping on all orders.</p>
        </div>
        <div className="bookglory">
          <FontAwesomeIcon className="icon" icon={faBook} />
          <h3>Book Galore</h3>
          <p>Browse our extensive collection of books.</p>
        </div>
        <div className="exchange">
          <FontAwesomeIcon className="icon" icon={faArrowRightArrowLeft} />
          <h3>Returns & Exchanges</h3>
          <p>Easy returns and hassle-free exchanges.</p>
        </div>
      </section>
    </>
  );
};

export default ServiceFeatures;
