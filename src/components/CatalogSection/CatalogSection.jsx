import React from 'react';
import { useNavigate } from 'react-router-dom';
import SugarCandy from "../../assets/img-detail/catalog/catalog-pages/scandy.jpg";
import LimedAsh from "../../assets/img-detail/catalog/catalog-pages/limedash.jpg";
import Lunar from "../../assets/img-detail/catalog/catalog-pages/lunar.jpg";

const catalogs = [
  { id: 1, title: "PALETTONE", image:   SugarCandy },
  { id: 2, title: "XL PU", image: LimedAsh },
  { id: 3, title: "VERONA", image: Lunar }
];

function CatalogSection() {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <div id='catalog' className="p-6 md:p-12 lg:p-20 bg-white flex flex-col md:flex-row items-center md:items-start">
      {/* Deskripsi di sebelah kiri */}
      <div className="w-full md:w-1/3 p-6 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Product Catalog</h2>
        <p className="text-gray-600 p-4 text-base text-justify md:text-lg">
          Discover a wide selection of high-quality vinyl flooring designed to meet your interior needs. Combining aesthetic appeal with durability, each product in our catalog offers the best solutions for various spaces, from residential to commercial and public facilities.
        </p>
        <button 
          onClick={() => navigate('/catalogs')} // Navigasi ke /catalogs
          className="mt-6 px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full hover:scale-105 transition duration-300 shadow-md">
          Learn More
        </button>
      </div>

      {/* Card Produk */}
      <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {catalogs.map((catalog) => (
          <div key={catalog.id} className="bg-white shadow-lg rounded-lg overflow-hidden h-auto sm:h-[400px] md:h-[450px]">
            <img src={catalog.image} alt={catalog.title} className="w-full h-full md:h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogSection;
