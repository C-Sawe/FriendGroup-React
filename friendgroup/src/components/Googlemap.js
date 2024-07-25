// GoogleMap.jsx
import React from 'react';

const GoogleMap = () => {
  return (
    <div style={{ width: '100%', height: '450px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.779323535943!2d36.81178177501337!3d-1.3076080986799785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f7adf96bf5%3A0x61bebf77710f1830!2sOle-Sangale%20Link%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1720976036184!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen="true"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ole Sangale Road, Nairobi"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
