import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Final = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">AppName</h3>
          <p className="text-gray-400 mb-4">
            Empowering businesses with innovative mobile solutions that drive growth and success.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-gray-400" />
              <span className="text-gray-400">123 Business Street, Tech City, TC 12345</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-3 text-gray-400" />
              <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-gray-400" />
              <a href="mailto:info@example.com" className="text-gray-400 hover:text-white transition-colors">info@example.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} AppName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Final;