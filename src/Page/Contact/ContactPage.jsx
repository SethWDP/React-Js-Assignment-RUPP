import React from "react";
import "./contact.css";
import ContactHeader from "../../Components/Contact-component/ContactHeader";
import ContactList from "../../Components/Contact-component/ContactList";
const ContactPage = () => {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <ContactHeader />
      </div>
      <div className="container contact">
        <ContactList />
      </div>
      <div className="container form">
        <div className="map"></div>
        <div className="contact-form">
          <h5>Contact Form</h5>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
