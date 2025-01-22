import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai"; // Import ikon email

const LastTwoSection = () => {
  const contacts = [
    { name: "Bpk. Hary", number: "6287813147000", type: "whatsapp" },
    { name: "Bpk. Gunawan", number: "62811171835", type: "whatsapp" },
    { name: "Telp", number: "622150871682", type: "whatsapp" },
    { name: "Email", number: "hary@majjatra.com", type: "email" },
    { name: "Email", number: "gunawan@majjatra.com", type: "email" },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Div Kiri: Kontak */}
        <div className="w-full md:w-2/3 px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg"
              >
                {/* Menampilkan icon sesuai dengan jenis kontak */}
                {contact.type === "whatsapp" ? (
                  <FaWhatsapp className="text-green-500 text-2xl" />
                ) : (
                  <AiOutlineMail className="text-blue-500 text-2xl" />
                )}
                <div>
                  <p className="font-semibold">{contact.name}</p>
                  {contact.type === "whatsapp" ? (
                    <a
                      href={`https://wa.me/${contact.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-500"
                    >
                      +{contact.number}
                    </a>
                  ) : (
                    <a
                      href={`mailto:${contact.number}`}
                      className="text-gray-600 hover:text-blue-500"
                    >
                      {contact.number}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Div Kanan: Alamat */}
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Our Address</h2>
          <p className="lg:text-lg font-semibold text-gray-300">
            PT. Majjatra Hikari Indonesia <br />
            Ruko Diamante Blok A No. 7-8 <br />
            Kota Deltamas, Cikarang Pusat, Bekasi <br />
            Jawa Barat, 17520
          </p>
          {/* Google Maps */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1964015413537!2d107.17483477586967!3d-6.368624062301094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6991292d88b9b3%3A0xc011d5d17becdbcf!2sPT.%20Majjatra%20Hikari%20Indonesia!5e0!3m2!1sid!2sid!4v1737515092921!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 0,
                borderRadius: '12px',
               }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastTwoSection;
