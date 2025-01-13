import React from "react";

// IMPORT GAMBAR
import polyflor from "../../assets/polyflor.png";



const AuthorizedSection = () => {
  return (
    <section className="bg-white">
      <div className="container pt-16">
        <h1 className="lg:text-4xl text-3xl font-bold text-center pb-10">
          Authorized Distributor
        </h1>
      </div>
      {/* Div kedua: menampilkan gambar */}
      <div className="bg-white p-12 lg:p-2 lg:pb-24 pb-24 relative w-full h-auto flex justify-center items-center">
        <img
          src={polyflor}
          alt="Authorized Distributor Logo"
          className="h-auto max-w-full"
        />
      </div>
    </section>
  );
};

export default AuthorizedSection;
