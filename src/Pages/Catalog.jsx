import React from "react";
import SugarCandy from "./../assets/img-detail/catalog/catalog-pages/scandy.jpg";
import Sable from "./../assets/img-detail/catalog/catalog-pages/sableebege.jpg";
import Monsoon from "./../assets/img-detail/catalog/catalog-pages/monsoon.jpg";
import Lunar from "./../assets/img-detail/catalog/catalog-pages/lunar.jpg";
import ForestVisual from "./../assets/img-detail/catalog/catalog-pages/visualforest.jpg";
import LimedAsh from "./../assets/img-detail/catalog/catalog-pages/limedash.jpg";
import Asparagus from "./../assets/img-detail/catalog/catalog-pages/asparagus.jpg";
import Apexx from "./../assets/img-detail/catalog/catalog-pages/apexx.jpg";
import { Link } from "react-router-dom"; 

const catalogs = [
  { id: 1, title: "Palettone", image: SugarCandy, description: "Elegant and high-quality vinyl flooring suitable for various spaces" },
  { id: 2, title: "XL PU", image: Sable, description: "Durable solid vinyl, perfect for high-traffic areas." },
  { id: 3, title: "Verona", image: Monsoon, description: "Specially designed vinyl flooring for sports and gym areas." },
  { id: 4, title: "Classic Mystique", image: Asparagus, description: "Elegant and high-quality vinyl flooring suitable for various spaces" },
  { id: 5, title: "Expona Flow", image: LimedAsh, description: "Durable solid vinyl, perfect for high-traffic areas." },
  { id: 6, title: "Apex", image: Apexx, description: "Elegant and high-quality vinyl flooring suitable for various spaces" },
  { id: 7, title: "Quattro", image: Lunar, description: "Durable solid vinyl, perfect for high-traffic areas." },
  { id: 8, title: "Forest FX", image: ForestVisual, description: "Durable solid vinyl, perfect for high-traffic areas." }
];

function Catalog() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Product Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {catalogs.map((catalog) => (
          <div
            key={catalog.id}
            className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={catalog.image}
              alt={catalog.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{catalog.title}</h3>
              <p className="text-gray-600 mt-2">{catalog.description}</p>
              <Link to={`/catalog/${catalog.id}`}>
              <button className="mt-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full hover:shadow-lg transition duration-300">
               View Catalog
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
