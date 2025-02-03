import React from "react";
import "./ContactCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactCard = ({ icon, title, contact, num }) => {
  return (
    <section className="ContactCard">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{contact}</p>
      <p>{num}</p>
    </section>
  );
};

export default ContactCard;
