import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// IMPORT GAMBAR
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";

const HeroSection = () => {
  const images = [image3, image2, image1, image4, image5, image6, image7];
  const navigate = useNavigate(); // Inisialisasi navigate

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  const handleNavigate = () => {
    navigate("/projects"); // Navigasi ke halaman project
  };

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            {/* Background Image */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-screen w-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div>
                <h1 className="text-4xl lg:px-2 px-7 font-bold lg:text-6xl">PT. MAJJATRA HIKARI INDONESIA</h1>
                <p className="mt-4 text-lg lg:text-2xl lg:px-2 px-7 text-gray-200 p-2">
                  “We are ready to serve and satisfy our customer needs and provide better solution.”
                </p>
                <button
                 className="inline-block bg-blue-700 text-white py-3 px-8 mt-5 rounded-lg shadow-md hover:bg-blue-600 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-500"
                  onClick={handleNavigate} // Tambahkan onClick
                >
                  Our Projects
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
