import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/styles.css';

const Footer = () => {
  return (
    <footer className="bg-teal text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; 2025 StayKenya. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-yellow" aria-label="Facebook">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
