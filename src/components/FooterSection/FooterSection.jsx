import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <div className="bg-footercolor py-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Div Kiri */}
        <div className="flex items-center gap-2 text-white">
          <FaInstagram className="text-xl" />
          <a
            href="https://www.instagram.com/majjatra_project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm lg:text-lg hover:text-gray-300 transition"
          >
            majjatra_project
          </a>
        </div>

        {/* Div Kanan */}
        <div className="text-gray-600">
          <h1 className="lg:text-md text-sm font-medium text-gray-400">
            Copyright © 2025
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
