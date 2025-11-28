import React from "react";
import { Link } from "react-router";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import logo from "../assets/GreenNest Logo.webp";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-12">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center gap-2">
                      <img
                        src={logo}
                        alt="GreenNest"
                        className="w-10 h-10 rounded-full border border-green-400"
                      />
                      <span className="font-bold text-4xl text-white mb-2 tracking-wide">
                        GreenNest
                      </span>
                    </Link>
          <p className="text-gray-200 text-sm">Nurture your space with plants that thrive.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-green-300 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-300 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-Policy" className="hover:text-green-300 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition-colors text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 transition-colors text-2xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-500 transition-colors text-2xl"
              aria-label="Pinterest"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
      {/* All rights reserved. */}
      <div className="border-t border-green-700">
        <div className="container mx-auto px-6 py-4 text-center text-gray-300 text-sm">
          © 2025 GreenNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}