import React from "react";
import "./contact.css";
import ContactHeader from "../../Components/Contact-component/ContactHeader";
import ContactList from "../../Components/Contact-component/ContactList";
import FormContact from "../../Components/Contact-component/FormContact";
const ContactPage = () => {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <ContactHeader />
      </div>

      <div className="container contact">
        <ContactList />
      </div>

      {/* ✅ Fixed Structure */}
      <div className="container form">
        <div className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4687.47382590369!2d104.88950057575052!3d11.568127044090646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e1!3m2!1sen!2skh!4v1738551749271!5m2!1sen!2skh"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* ✅ Moved this inside the `.container.form` */}
        <div className="contact-form">
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
