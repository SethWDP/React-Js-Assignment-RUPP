// import React from "react";

// const ContactPage = () => {
//   return <div>Contact form </div>;
// };

// export default ContactPage;
import React from 'react';  
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';  
const ContactInfo = ({ icon, title, content }) => (  
  <div style={styles.infoBox}>  
    <img src={icon} alt="icon" style={styles.icon} />  
    <h4 style={styles.title}>{title}</h4>  
    <p>{content}</p>  
  </div>  
);  

// Main Component  
const ContactUs = () => {  
  const mapContainerStyle = {  
    height: '300px',  
    width: '100%',  
    marginBottom: '20px',  
  };  

  const center = {  
    lat: 37.7749, // Replace with desired latitude  
    lng: -122.4194, // Replace with desired longitude  
  };  

  // Info Data  
  const contactData = [  
    {  
      icon: '', // Replace with your phone icon URL  
      title: 'Phone',  
      content: 'Toll-Free: 0803 - 080 - 3081\nFax: 0803 - 080 - 3082',  
    },  
    {  
      icon: 'email_icon_url', // Replace with your email icon URL  
      title: 'Email',  
      content: 'mail@example.com\nsupport@example.com',  
    },  
    {  
      icon: 'address_icon_url', // Replace with your address icon URL  
      title: 'Address',  
      content: 'No: 58 A, East Madison Street,\nBaltimore, MD, USA 4508',  
    },  
  ];  

  return (  
    <div style={styles.container}>  
      <div style={styles.contactInfo}>  
        {contactData.map((data, index) => (  
          <ContactInfo  
            key={index}  
            icon={data.icon}  
            title={data.title}  
            content={data.content}  
          />  
        ))}  
      </div>  
      <div style={styles.map}>  
        <LoadScript googleMapsApiKey="AIzaSyBQyGbghEIwzcJ5SJ3CNLBiFTiCXqSDmEg">  
          <GoogleMap  
            mapContainerStyle={mapContainerStyle}  
            center={center}  
            zoom={12}  
          >  
            <Marker position={center} />  
          </GoogleMap>  
        </LoadScript>  
      </div>  
      <div style={styles.contactForm}>  
        <h5>Contact Form</h5>  
        <form>  
          <input type="text" placeholder="Name" required style={styles.input} />  
          <input type="email" placeholder="Email" required style={styles.input} />  
          <input type="tel" placeholder="Phone number" required style={styles.input} />  
          <textarea placeholder="Comment" required style={styles.input} />  
          <button type="submit" style={styles.button}>Send</button>  
        </form>  
      </div>  
    </div>  
  );  
};  

// Styles  
const styles = {  
  container: {  
    display: 'flex',  
    flexDirection: 'column',  
    padding: '20px',  
  },  
  contactInfo: {  
    display: 'flex',  
    justifyContent: 'space-between',  
    marginBottom: '20px',  
  },  
  infoBox: {     
    border: '1px solid #ccc',  
    padding: '10px',  
    flex: '1',  
    margin: '0 10px',  
  },  
  title: {  
    fontWeight: 'bold',  
  },  
  icon: {  
    width: '20px',  
    height: '20px',  
    marginRight: '10px',  
  },  
  map: {  
    border: '1px solid #ccc',  
    marginBottom: '20px',  
  },  
  contactForm: {  
    border: '1px solid #ccc',  
    padding: '20px',  
  },  
  input: {  
    width: '100%',  
    marginBottom: '10px',  
    padding: '8px',  
  },  
  button: {  
    backgroundColor: '#f76c6c',  
    color: '#fff',  
    padding: '10px 15px',  
    border: 'none',  
    cursor: 'pointer',  
  },  
};  

export default ContactUs;
