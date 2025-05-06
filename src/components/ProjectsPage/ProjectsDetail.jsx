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
import garbaratasatu from "../../assets/img-detail/project-01/garbaratasatu.png";
import garbaratadua from "../../assets/img-detail/project-01/garbaratadua.png";
import garbaratatiga from "../../assets/img-detail/project-01/garbaratatiga.png";
import gymsatu from "../../assets/img-detail/project-02/gymdua.png"
import gymdua from "../../assets/img-detail/project-02/gymsatu.png"
import gymtiga from "../../assets/img-detail/project-02/gymtiga.png"
import dentalsatu from "../../assets/img-detail/project-03/dentalsatu.png"
import dentaldua from "../../assets/img-detail/project-03/dentaldua.png"
import fxsatu from "../../assets/img-detail/project-04/fxsatu.png"
import fxdua from "../../assets/img-detail/project-04/fxdua.png"
import fxtiga from "../../assets/img-detail/project-04/fxtiga.png"
import fxempat from "../../assets/img-detail/project-04/fxempat.png"
import coffeedua from "../../assets/img-detail/project-05/coffeedua.png"
import coffeesatu from "../../assets/img-detail/project-05/coffeesatu.png"
import coffeetiga from "../../assets/img-detail/project-05/coffeetiga.png"
import coffeeempat from "../../assets/img-detail/project-05/coffeeempat.png"
import tradecordsatu from "../../assets/img-detail/project-06/tradecordsatu.png"
import tradecorddua from "../../assets/img-detail/project-06/tradecorddua.png"
import tradecordtiga from "../../assets/img-detail/project-06/tradecordtiga.png"
import ciputrasatu from "../../assets/img-detail/project-07/ciputrasatu.png"
import ciputradua from "../../assets/img-detail/project-07/ciputradua.png"
import ciputratiga from "../../assets/img-detail/project-07/ciputratiga.png"
import ciputraempat from "../../assets/img-detail/project-07/ciputraempat.png"
import ciputralima from "../../assets/img-detail/project-07/ciputralima.png"
import ciputraenam from "../../assets/img-detail/project-07/ciputraenam.png"
import ciputratujuh from "../../assets/img-detail/project-07/ciputratujuh.png"
import ciputralapan from "../../assets/img-detail/project-07/ciputralapan.png"
import ciputrasembilan from "../../assets/img-detail/project-07/ciputrasembilan.png"
import denpasarsatu from "../../assets/img-detail/project-08/denpasarsatu.png"
import denpasardua from "../../assets/img-detail/project-08/denpasardua.png"
import denpasartiga from "../../assets/img-detail/project-08/denpasartiga.png"
import rscawangsatu from "../../assets/img-detail/project-09/rscawangsatu.png"
import rscawangdua from "../../assets/img-detail/project-09/rscawangdua.png"
import samudrasatu from "../../assets/img-detail/project-10/samudrasatu.png"
import samudradua from "../../assets/img-detail/project-10/samudradua.png"
import samudratiga from "../../assets/img-detail/project-10/samudratiga.png"
import samudraempat from "../../assets/img-detail/project-10/samudraempat.png"
import dysonsatu from "../../assets/img-detail/project-11/dysonsatu.png"
import dysondua from "../../assets/img-detail/project-11/dysondua.png"
import dysontiga from "../../assets/img-detail/project-11/dysontiga.png"
import bekasisatu from "../../assets/img-detail/epoxy-01/bekasi-satu.png" 
import bekasidua from "../../assets/img-detail/epoxy-01/bekasi-dua.png" 
import bekasitiga from "../../assets/img-detail/epoxy-01/bekasi-tiga.png" 
import cikarangsatu from "../../assets/img-detail/epoxy-02/ecikarang-satu.png" 
import cikarangdua from "../../assets/img-detail/epoxy-02/ecikarang-dua.png" 
import cikarangtiga from "../../assets/img-detail/epoxy-02/ecikarang-tiga.png" 
import malangsatu from "../../assets/img-detail/epoxy-03/emalang-satu.png"
import malangdua from "../../assets/img-detail/epoxy-03/emalang-dua.png"  
import sentulsatu from "../../assets/img-detail/epoxy-04/esentul-satu.png"
import sentuldua from "../../assets/img-detail/epoxy-04/esentul-dua.png"
import suntersatu from "../../assets/img-detail/epoxy-05/esunter-satu.png"
import sunterdua from "../../assets/img-detail/epoxy-05/esunter-dua.png"
import suntertiga from "../../assets/img-detail/epoxy-05/esunter-tiga.png"
import ecawangsatu from "../../assets/img-detail/epoxy-06/ecawang-satu.png"
import ecawangdua from "../../assets/img-detail/epoxy-06/ecawang-dua.png"


const projectData = [
  { id: "1", title: "PROJECT 01 - GARBARATA", description: "Our company has successfully completed the installation of high-quality Polyflor vinyl flooring at the airport's boarding bridge (garbarata). Known for its durability and elegant design, the vinyl flooring not only enhances the aesthetic appeal of the space but also ensures long-lasting performance in a high-traffic environment. With a stunning color range and top-notch quality, the Polyflor vinyl flooring offers the perfect solution for both functionality and style in any commercial setting.", images: [garbaratasatu, garbaratadua, garbaratatiga] },
  { id: "2", title: "PROJECT 02 - GYM", description: "Our company has expertly installed Polyflor vinyl flooring in various gym facilities. With exceptional durability and a stylish design, this high-quality flooring is perfect for high-impact areas. It provides a safe and comfortable surface for workouts while offering easy maintenance. Available in a variety of attractive colors, Polyflor vinyl flooring enhances the gym's overall aesthetic and ensures long-lasting performance even under intense use.", images: [gymsatu, gymdua, gymtiga] },
  { id: "3", title: "PROJECT 03 - KLINIK", description: "Our company has successfully installed Polyflor vinyl flooring in numerous clinic facilities. Known for its hygienic properties and durability, this high-quality flooring offers a smooth, easy-to-clean surface that is ideal for healthcare environments. With a wide range of elegant colors and designs, Polyflor vinyl flooring not only enhances the clinic's appearance but also provides a long-lasting, safe, and comfortable flooring solution that meets the demands of daily use.", images: [dentalsatu, dentaldua] },
  { id: "4", title: "PROJECT 04 - SPORTSWEAR AREA", description: "Our company has provided Polyflor vinyl flooring for sportswear retail areas, blending durability with modern style. This high-quality flooring is designed to withstand heavy foot traffic while maintaining its vibrant look. With a variety of colors and textures available, Polyflor vinyl flooring enhances the shopping experience by creating an attractive and functional space that can handle the demands of a busy retail environment.", images: [fxsatu, fxdua, fxtiga, fxempat] },
  { id: "5", title: "PROJECT 05 - COFFEE SHOP", description: "Our company has expertly installed Polyflor vinyl flooring in coffee shops, providing a perfect blend of style and durability. Designed to handle the high traffic of busy café environments, this high-quality flooring offers a smooth, easy-to-clean surface while maintaining its aesthetic appeal. With a range of colors and designs to choose from, Polyflor vinyl flooring enhances the ambiance of the coffee shop, offering a comfortable and lasting solution that complements the spaces welcoming atmosphere", images: [coffeesatu, coffeetiga, coffeedua, coffeeempat] },
  { id: "6", title: "PROJECT 06 - COMPANY", description: "Our company has successfully installed Polyflor vinyl flooring in one of the company’s office floors. With its excellent durability and sleek design, this high-quality flooring enhances the professional atmosphere while providing a comfortable and low-maintenance solution. Available in a variety of colors and patterns, Polyflor vinyl flooring is ideal for creating a modern, stylish workspace that can withstand the everyday demands of a corporate environment", images: [tradecordsatu, tradecorddua, tradecordtiga] },
  { id: "7", title: "PROJECT 07 - MALL", description: "Our company has completed the installation of Polyflor vinyl flooring in one of the mall’s floors. Known for its durability and modern design, this high-quality flooring provides a stylish and practical solution for high-traffic areas. With a variety of attractive colors and patterns to choose from, Polyflor vinyl flooring not only enhances the overall aesthetic of the mall but also ensures a safe, easy-to-maintain surface that can handle the constant flow of shoppers.", images: [ciputrasatu, ciputradua, ciputratiga, ciputraempat, ciputralima, ciputraenam, ciputratujuh, ciputralapan, ciputrasembilan] },
  { id: "8", title: "PROJECT 08 - RS DENPASAR", description: "Our company has successfully installed Polyflor vinyl flooring in one of the hospitals in Denpasar. Designed to meet the high standards of healthcare environments, this high-quality flooring offers exceptional durability, ease of maintenance, and a hygienic surface. With a wide range of colors and designs available, Polyflor vinyl flooring not only enhances the hospitals interior but also provides a safe, comfortable, and long-lasting flooring solution that meets the needs of both patients and healthcare professionals", images: [denpasarsatu, denpasardua, denpasartiga] },
  { id: "9", title: "PROJECT 09 - RS CAWANG", description: "Our company has successfully completed the installation of Polyflor vinyl flooring at Rumah Sakit Cawang. This high-quality flooring is specifically chosen for its durability and hygienic properties, making it perfect for healthcare environments. With a wide range of elegant colors and easy-to-clean features, Polyflor vinyl flooring enhances the hospital's aesthetic while ensuring a safe, comfortable, and long-lasting surface that can withstand the daily demands of a busy medical facility", images: [rscawangsatu, rscawangdua] },
  { id: "10", title: "PROJECT 10 - COMPANY", description: "Our company has successfully installed Polyflor vinyl flooring in one of the company’s office floors. With its excellent durability and sleek design, this high-quality flooring enhances the professional atmosphere while providing a comfortable and low-maintenance solution. Available in a variety of colors and patterns, Polyflor vinyl flooring is ideal for creating a modern, stylish workspace that can withstand the everyday demands of a corporate environment", images: [samudrasatu, samudradua, samudratiga, samudraempat] },
  { id: "11", title: "PROJECT 11 - POP UP STORE", description: "Our company has expertly installed Polyflor vinyl flooring in a pop-up store, creating a vibrant and functional space. The high-quality vinyl flooring is designed to withstand the short-term but high-traffic nature of pop-up stores, offering both durability and a stylish appearance. With a variety of colors and finishes available, Polyflor vinyl flooring enhances the overall customer experience, providing an attractive and easy-to-maintain surface that perfectly complements the temporary retail environment.", images: [dysonsatu, dysondua, dysontiga] },
  { id: "12", title: "PROJECT 12 - BEKASI", description: "Our company has successfully completed the installation of high-quality epoxy flooring in the Bekasi area. Known for its durability and resistance to wear, this epoxy flooring offers a seamless, long-lasting surface ideal for both commercial and industrial environments. With its easy maintenance and sleek finish, it provides both functionality and aesthetic appeal, meeting the specific needs of businesses in the region.", images: [bekasisatu, bekasidua, bekasitiga] },
  { id: "13", title: "PROJECT 13 - CIKARANG", description: "Our company has successfully completed an epoxy flooring installation in the Cawang area. The project involved applying high-quality epoxy to provide a durable, seamless surface that can withstand heavy traffic and demanding conditions. This solution not only enhances the area's functionality but also improves its aesthetic appeal with a smooth and glossy finish. The epoxy flooring ensures long-lasting performance and easy maintenance, making it an ideal choice for both commercial and industrial spaces.", images: [cikarangsatu, cikarangdua, cikarangtiga] },
  { id: "14", title: "PROJECT 14 - MALANG", description: "Our company has successfully completed the installation of high-quality epoxy flooring in Malang. This durable and stylish flooring solution is designed to meet the demanding needs of both commercial and industrial spaces. Known for its seamless finish and excellent resistance to wear, our epoxy flooring enhances the functionality and aesthetic appeal of the area while ensuring long-lasting performance in high-traffic environments", images: [malangsatu, malangdua] },
  { id: "15", title: "PROJECT 15 - SENTUL", description: "Our company has successfully completed the installation of high-quality epoxy flooring in the Sentul area. Known for its exceptional durability and smooth finish, epoxy flooring provides a long-lasting solution for both commercial and industrial spaces. The installation was carried out with precision, ensuring a resilient and easy-to-maintain surface that can withstand heavy use and various environmental conditions, making it a perfect choice for areas in high-demand like Sentul", images: [sentulsatu, sentuldua] },
  { id: "16", title: "PROJECT 16 - SUNTER", description: "Our company has successfully completed the installation of high-quality epoxy flooring in the Sunter area. Known for its durability and resilience, epoxy flooring is the ideal solution for industrial and commercial spaces that require a strong, easy-to-maintain surface. This installation not only enhances the functionality of the space but also provides a sleek, modern look, ensuring long-lasting performance in a high-traffic environment", images: [suntersatu, sunterdua, suntertiga] },
  { id: "17", title: "PROJECT 16 - CAWANG", description: "Our company has successfully completed the installation of high-quality epoxy flooring in the Sunter area. Known for its durability and resilience, epoxy flooring is the ideal solution for industrial and commercial spaces that require a strong, easy-to-maintain surface. This installation not only enhances the functionality of the space but also provides a sleek, modern look, ensuring long-lasting performance in a high-traffic environment", images: [ecawangsatu, ecawangdua] },
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
    <div className="container mx-auto mt-14">
      {/* Detail Proyek */}
      <h1 className="text-2xl text-center lg:text-left sm:text-lg md:text-xl lg:text-3xl text-black font-bold mb-6">{project.title}</h1>
      

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
     <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 leading-relaxed text-start">
  {project.description}
</p>


     </div>

      {/* Rekomendasi Proyek */}
      <h2 className="text-2xl font-bold mt-24 text-center sm:text-3xl">Projects Highlight</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 my-14 lg:grid-cols-3  gap-6 px-4 sm:px-6 md:px-8">
  {recommendations.map((rec) => (
    <div
      key={rec.id}
      className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105"
    >
      <img
        src={rec.images[0]}
        alt={rec.title}
        className="w-full h-48 sm:h-56 lg:h-64 object-cover"
      />
      <div className="p-3 sm:p-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{rec.title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3">
          {rec.description.slice(0, 50)}...
        </p>
        <Link
          to={`/projects/${rec.id}`}
          className="bg-blue-700 text-white py-3 px-6 sm:px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
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
