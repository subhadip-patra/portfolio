import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-slate-800 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
    <div className="text-center text-slate-400">
      <div className="mb-4 flex justify-center space-x-6">
        <a
          href="#"
          className="hover:text-cyan-400 transition-colors duration-200"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="#"
          className="hover:text-cyan-400 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#"
          className="hover:text-cyan-400 transition-colors duration-200"
          aria-label="Twitter"
        >
          <FaTwitter size={24} />
        </a>
      </div>
      <p className="text-sm">
        &copy; 2024 Subhadip Patra. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
