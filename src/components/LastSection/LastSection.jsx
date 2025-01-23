import React from "react";
import image3 from "../../assets/image3.jpg"; // Ganti dengan path gambar Anda

const LastSection = () => {
  return (
    <section className="bg-dark py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Div Kiri: Teks */}
        <div className="w-full md:w-3/5 px-4 text-center md:text-left">
        <h2 className="lg:text-7xl text-4xl font-bold mb-4 text-white">
             Engage With Us in
         <span className="block lg:text-7xl text-4xl text-white">Conversation</span>
        </h2>
          <p className="text-lg text-gray-300 mb-6 pt-6">
            Vinyl flooring offers a modern, elegant look, is durable, and easy to install. Transform your home or office with the best vinyl flooring and experience a refreshing change in ambiance. Contact us for special offers and design consultations.
          </p>
        </div>

        {/* Div Kanan: Gambar */}
        <div className="w-full md:w-2/5 px-4 flex justify-center">
          <img
            src={image3}
            alt="meeting"
            className="max-w-full h-auto rounded-lg shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default LastSection;

