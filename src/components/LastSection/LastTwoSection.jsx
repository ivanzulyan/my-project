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
                  <AiOutlineMail className="text-blue-500 text-2xl" /> // Menampilkan ikon email dengan warna biru
                )}
                <div>
                  <p className="font-semibold">{contact.name}</p>
                  {/* Tautan WhatsApp */}
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
                    /* Tautan Email */
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
          <p className="lg:text-lg font-semibold text-white">
            Ruko Diamante Blok A No. 7-8 <br />
            Kota Deltamas, Cikarang Pusat, Bekasi <br />
            Jawa Barat, 17520
          </p>
        </div>
      </div>
    </section>
  );
};

export default LastTwoSection;
