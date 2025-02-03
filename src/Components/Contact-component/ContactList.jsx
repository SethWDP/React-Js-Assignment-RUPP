import React from "react";
import ContactCard from "./ContactCard";
import "./ContactCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faPhone} />,
      title: "Phone",
      contact: "Tel : 012345678",
      num: "xxxxxxxxxxxxx",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faEnvelope} />, // You can replace with another icon
      title: "Email",
      contact: "Email : 123@example.com",
      num: "Support : 456@example.com",
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faLocationDot} />, // You can replace with another icon
      title: "Address",
      contact: "No : 123 Main St, Phnom Penh City,",
      num: "Cambodia",
    },
  ];

  return (
    <div className="Cards">
      {contacts.map(({ id, icon, title, contact, num }) => (
        <div key={id}>
          <ContactCard icon={icon} title={title} contact={contact} num={num} />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
