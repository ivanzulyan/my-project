import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import logohikari from '../../assets/logohikari.png';

const NavbarMenu = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Catalog',
    path: '#catalog',
  },
  {
    id: 3,
    title: 'About Us',
    path: '/about',
  },
  {
    id: 4,
    title: 'Projects',
    path: '/projects',
  },
  {
    id: 5,
    title: 'Contact Us',
    path: '/contact',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-black shadow-md">
      <div className="container py-5 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex gap-x-2 items-center">
          <img src={logohikari} alt="Logo Hikari" className="lg:h-9 h-6 w-auto max-w-full" />
          <h1 className="font-bold text-lg lg:text-2xl text-blue-900">
            PT. Majjatra Hikari Indonesia
          </h1>
        </div>

        {/* Menu section (Desktop) */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <button
                onClick={() => {
                 if (menu.title === 'Catalog') {
          const section = document.getElementById('catalog');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          navigate(menu.path);
        }
        setIsOpen(false); // Menutup menu setelah klik
      }}
      className="inline-block py-2 px-3 hover:text-blue-600 relative group"
    >
      <div className="w-2 h-2 bg-blue-600 absolute mt-2 rounded-full left-1/2 bottom-0 group-hover:block hidden"></div>
      {menu.title}
    </button>
  </li>
))}

          </ul>
        </div>

        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <IoMdClose className="text-4xl text-blue-900" />
            ) : (
              <IoMdMenu className="text-4xl text-blue-900" />
            )}
          </button>
        </div>
      </div>

   {/* Mobile Menu Dropdown */}
<div
  className={`lg:hidden bg-white shadow-lg transition-all duration-500 ease-in-out ${
    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
  }`}
>
  <ul className="flex flex-col items-center gap-2 py-2">
    {NavbarMenu.map((menu) => (
      <li key={menu.id} className="w-full">
        <button
          onClick={() => {
            if (menu.title === 'Catalog') {
              const section = document.getElementById('catalog');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            } else {
              navigate(menu.path);
            }
            setIsOpen(false); // Menutup menu setelah klik
          }}
          className="w-full py-4 px-6 text-lg font-medium text-gray-800 hover:text-blue-600 text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
        >
          {menu.title}
        </button>
      </li>
    ))}
  </ul>
</div>


    </nav>
  );
};

export default Navbar;
