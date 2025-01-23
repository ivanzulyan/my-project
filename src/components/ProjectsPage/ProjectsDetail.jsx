import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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

const projectData = [
  { id: "1", title: "CAWANG PROJECT", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corrupti, reprehenderit aliquid quibusdam deleniti numquam explicabo ipsum quod quas similique.", images: [cawang, ciputra, coffe] },
  { id: "2", title: "CIPUTRA PROJECT", description: "Description for Ciputra", images: [denpasar, gym, dental] },
  { id: "3", title: "COFFEE SHOP PROJECT", description: "Description for Coffee", images: [dyson, sudirman, samudra] },
  { id: "4", title: "DENPASAR PROJECT", description: "Description for Denpasar", images: [garbarata, gym, dental] },
  { id: "5", title: "TRADECOR PROJECT", description: "Description for Tradecord", images: [cawang, ciputra, coffe] },
  { id: "6", title: "SAMUDRA PROJECT", description: "Description for Samudra", images: [denpasar, gym, dental] },
  { id: "7", title: "COFFEE SHOP PROJECT", description: "Description for Coffee", images: [dyson, sudirman, samudra] },
  { id: "8", title: "DENPASAR PROJECT", description: "Description for Denpasar", images: [garbarata, gym, dental] },
  { id: "9", title: "TRADECOR PROJECT", description: "Description for Tradecord", images: [cawang, ciputra, coffe] },
  { id: "10", title: "SAMUDRA PROJECT", description: "Description for Samudra", images: [denpasar, gym, dental] },
  { id: "11", title: "SAMUDRA PROJECT", description: "Description for Samudra", images: [denpasar, gym, dental] },
  { id: "12", title: "SAMUDRA PROJECT", description: "Description for Samudra", images: [denpasar, gym, dental] },
  { id: "13", title: "COFFEE SHOP PROJECT", description: "Description for Coffee", images: [dyson, sudirman, samudra] },
  { id: "14", title: "DENPASAR PROJECT", description: "Description for Denpasar", images: [garbarata, gym, dental] },
  { id: "15", title: "TRADECOR PROJECT", description: "Description for Tradecord", images: [cawang, ciputra, coffe] },
  { id: "16", title: "SAMUDRA PROJECT", description: "Description for Samudra", images: [denpasar, gym, dental] },
  { id: "17", title: "SAMUDRA PROJECT", description: "Description for Samudra", images: [denpasar, gym, dental] },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  // Cari proyek berdasarkan ID
  const project = projectData.find((item) => item.id === id);

  useEffect(() => {
    if (project) {
      // Filter proyek lain selain yang sedang dilihat
      const otherProjects = projectData.filter((item) => item.id !== id);
      // Acak proyek
      const shuffledProjects = otherProjects.sort(() => 0.5 - Math.random());
      // Ambil 3 proyek untuk rekomendasi
      setRecommendations(shuffledProjects.slice(0, 3));
    }
  }, [id, project]);

  if (!project) {
    return <h1 className="text-center text-2xl font-bold py-10">Project Not Found</h1>;
  }

  return (
    <div className="container mx-auto p-24 mt-5">
      {/* Detail Proyek */}
      <h1 className="text-3xl text-black font-bold mb-6">{project.title}</h1>
      

      {/* Modal untuk gambar besar */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Galeri gambar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {project.images.map((image, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`${project.title} ${index + 1}`}
              className="w-full h-56 object-cover"
            />
          </div>
          
        ))}
      </div>
     <div>
     <p className="mb-2 text-xl text-black">{project.description}</p>
     </div>

      {/* Rekomendasi Proyek */}
      <h2 className="text-2xl font-bold mb-4 mt-52 ">Recommended Projects</h2>
      <div className="grid p-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={rec.images[0]}
              alt={rec.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{rec.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {rec.description.slice(0, 50)}...
              </p>
              <Link
                to={`/projects/${rec.id}`}
                className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-transform duration-200 hover:scale-105"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
