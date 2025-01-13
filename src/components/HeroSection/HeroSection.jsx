import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMPORT GAMBAR
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";



const HeroSection = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

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
                <h1 className="text-5xl font-bold sm:text-7xl">PT. MAJJATRA HIKARI INDONESIA</h1>
                <p className="mt-4 text-2xl sm:text-2xl text-white p-2 ">
                “We are ready to serve and satisfy our customer needs and provide better solution.”
                </p>
                <button className="mt-6 rounded-md bg-blue-700 px-6 py-3 text-lg font-medium hover:bg-blue-600">
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
