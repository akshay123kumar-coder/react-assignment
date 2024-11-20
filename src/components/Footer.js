import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Cake Shop. All Rights Reserved.</p>
      <p>
        Follow us on{' '}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>{' '}
        |{' '}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </p>
    </footer>
  );
};

export default Footer;

