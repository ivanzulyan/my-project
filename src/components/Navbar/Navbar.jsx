import React from 'react'
import { IoMdMenu } from "react-icons/io";
import logohikari from "../../assets/logohikari.png";


const NavbarMenu = [
{
    id: 1,
    tittle: "Home",
    path: "/"
},
{
    id: 2,
    tittle: "About Us",
    path: "/"
},
{
    id: 3,
    tittle: "Projects",
    path: "/"
},
{
    id: 4,
    tittle: "Contact Us",
    path: "/"
},
];

const Navbar = () => {
  return (
    <nav>
        <div className="container py-5 flex justify-between items-center">
            {/* Logo section */}
            <div className='flex gap-x-4'>
            <img src={logohikari} alt="" className="h-9 w-auto max-w-full" />
                <h1 className='font-bold text-lg lg:text-2xl text-blue-900'>PT. Majjatra Hikari Indonesia </h1>
            </div>
            {/* Menu section */}
            <div className='hidden lg:block'>
                <ul className='flex items-center gap-3'>
                    {NavbarMenu.map((menu) => (
                        <li key={menu.id}>
                        <a href={menu.path} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                            <div className='w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 bottom-0 group-hover:block hidden'></div>{menu.tittle}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Mobile Hamburger menu section */}
            <div className='lg:hidden'>
                <IoMdMenu className='text-4xl' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
