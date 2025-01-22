import React from 'react';
import About from '../../assets/About.jpg'; // Pastikan mengganti path ini dengan lokasi gambar Anda
import { FaCheckCircle } from 'react-icons/fa'; // Library Ikon (react-icons)

function HeroAbout() {
  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-6xl font-bold text-gray-800 m-5">
              We are ready to serve and satisfy our customers
            </h1>
            <p className="text-lg text-gray-600">
              We provide good materials, competitive prices, well-trained and professional team with superior products and perfect delivery & after-sales time.
            </p>
          </div>
          {/* Right Content */}
          <div className="flex-1">
            <p className="text-lg text-gray-600">
              PT. MAJJATRA HIKARI INDONESIA Founded in 2017, and located in West Java, Indonesia. Achieving very fast growth over the years and we are dedicated to being a leader in the flooring industry giving the impression of elegance, comfort and safety to use. According to each individual's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Smaller Image Without Cropping */}
      <div className="relative w-full h-96 bg-white">
        <img
          src={About}
          alt="Full Image"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      {/* Vision and Mission Section */}
      <section className="bg-black py-12 mt-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Vision</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 mt-1" />
                <span className="text-lg text-white">
                  To be a leading company in the flooring industry.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 mt-1" />
                <span className="text-lg text-white">
                  Delivering products that combine elegance and safety.
                </span>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 mt-1" />
                <span className="text-lg text-white">
                  Provide high-quality materials at competitive prices.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 mt-1" />
                <span className="text-lg text-white">
                  Build trust with customers through excellent service.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 mt-1" />
                <span className="text-lg text-white">
                  Ensure on-time delivery and exceptional after-sales support.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroAbout;
