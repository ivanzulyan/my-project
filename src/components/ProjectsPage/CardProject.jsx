import React from "react";
import cawang from "../../assets/img-project/cawang.png";
import ciputra from "../../assets/img-project/ciputra.png";
import coffe from "../../assets/img-project/coffe.png";
import denpasar from "../../assets/img-project/denpasar.png";
import dental from "../../assets/img-project/dental.png";
import dyson from "../../assets/img-project/dyson.png";
import sudirman from "../../assets/img-project/sudirman.png";
import samudra from "../../assets/img-project/samudra.png";
import gym from "../../assets/img-project/gym.png";
import garbarata from "../../assets/img-project/garbarata.png";
import tradecord from "../../assets/img-project/tradecord.png";
import epoxy1 from "../../assets/epoxy1.png";
import epoxy2 from "../../assets/epoxy2.png";
import epoxy3 from "../../assets/epoxy3.png";
import epoxy4 from "../../assets/epoxy4.png";
import epoxy5 from "../../assets/epoxy5.png";
import epoxy6 from "../../assets/epoxy6.png";
import { Link } from "react-router-dom";

// Data produk utama (11 produk)
const products = [
  { id: 1, name: "Project 01 - Garbarata", image: garbarata },
  { id: 2, name: "Project 02 - Gym", image: gym },
  { id: 3, name: "Project 03 - Klinik", image: dental },
  { id: 4, name: "Project 04 - Sportswear Area", image: sudirman },
  { id: 5, name: "Project 05 - Coffee Shop", image: coffe },
  { id: 6, name: "Project 06 - Company", image: tradecord },
  { id: 7, name: "Project 07 - Mall", image: ciputra },
  { id: 8, name: "Project 08 - RS Denpasar", image: denpasar },
  { id: 9, name: "Project 09 - RS Cawang", image: cawang },
  { id: 10, name: "Project 10 - Company", image: samudra },
  { id: 11, name: "Project 11 - Pop Up Store", image: dyson },
];

// Data produk tambahan (6 produk baru)
const newProducts = [
  { id: 12, name: "Project 01 - Bekasi", image: epoxy1 },
  { id: 13, name: "Project 02 - Cikarang", image: epoxy2 },
  { id: 14, name: "Project 03 - Malang", image: epoxy3 },
  { id: 15, name: "Project 04 - Sentul", image: epoxy4 },
  { id: 16, name: "Project 05 - Sunter", image: epoxy5 },
  { id: 17, name: "Project 06 - Cawang", image: epoxy6 },
];

function CardProject() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Judul Produk Utama */}
      <h1 className="text-3xl font-bold text-center text-white mt-8 mb-8">
        Polyflor Vinyl Flooring Installation Services
      </h1>

      {/* Grid untuk produk utama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-4">{product.name}</h3>
              <Link
                to={`/projects/${product.id}`}
                className="inline-block bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-500"
              >
                Project Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Judul Produk Tambahan */}
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Epoxy Flooring Installation Services
      </h1>

      {/* Grid Produk Baru */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-4">{product.name}</h3>
              <Link
                to={`/projects/${product.id}`}
                className="inline-block bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-500"
              >
                Project Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default CardProject;
