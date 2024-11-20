import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>Have a question or need help? Contact us!</p>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Your Name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your Email" />
        </label>
        <label>
          Message:
          <textarea placeholder="Your Message"></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
