import React from 'react'
import Link from 'next/link';
import { FaHome, FaUser, FaServicestack, FaBriefcase, FaTools, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#A29875] text-black w-full shadow-md">
    <div className="container mx-auto p-4  md:flex justify-between items-center">
    <div className="md:hidden">
    {/* <SheetSide /> */}
    </div>
      <div className="text-xl md-text-2xl font-bold flex items-center gap-1">
        <span className="text-[#A29875] animate-jwellery-fade">Jwellery</span>
       
      </div>
      
      <div className="flex">
       
       <ul className="sm:flex gap-3 pt-4 hidden">
         <li>
           <Link href="/" className="flex items-center gap-2 bg-[#A29875] shadow-lg rounded-lg px-4 py-2 hover:bg-[#b8ad88] hover:scale-105 hover:shadow-xl transition-all duration-300 group">
             <FaHome className="text-white group-hover:text-[#A29875] transition-colors duration-300" />
             <span className="font-semibold">Home</span>
           </Link>
         </li>
         <li>
           <Link href="/about" className="flex items-center gap-2 bg-[#A29875] shadow-lg rounded-lg px-4 py-2 hover:bg-[#b8ad88] hover:scale-105 hover:shadow-xl transition-all duration-300 group">
             <FaUser className="text-white group-hover:text-[#A29875] transition-colors duration-300" />
             <span className="font-semibold">About</span>
           </Link>
         </li>
         <li>
           <Link href="/Service" className="flex items-center gap-2 bg-[#A29875] shadow-lg rounded-lg px-4 py-2 hover:bg-[#b8ad88] hover:scale-105 hover:shadow-xl transition-all duration-300 group">
             <FaServicestack className="text-white group-hover:text-[#A29875] transition-colors duration-300" />
             <span className="font-semibold">Service</span>
           </Link>
         </li>
         <li>
           <Link href="/Work" className="flex items-center gap-2 bg-[#A29875] shadow-lg rounded-lg px-4 py-2 hover:bg-[#b8ad88]  hover:scale-105 hover:shadow-xl transition-all duration-300 group">
             <FaBriefcase className="text-white group-hover:text-[#A29875] transition-colors duration-300" />
             <span className="font-semibold">Work</span>
           </Link>
         </li>
         <li>
           <Link href="/Skill" className="flex items-center gap-2 bg-[#A29875] shadow-lg rounded-lg px-4 py-2 hover:bg-[#b8ad88] hover:scale-105 hover:shadow-xl transition-all duration-300 group">
             <FaTools className="text-white group-hover:text-[#A29875] transition-colors duration-300" />
             <span className="font-semibold">Skill</span>
           </Link>
         </li>
         <li>
           <Link href="/Contact" className="flex items-center gap-2 bg-[#A29875] shadow-lg rounded-lg px-4 py-2 hover:bg-[#b8ad88] hover:scale-105 hover:shadow-xl transition-all duration-300 group">
             <FaEnvelope className="text-white group-hover:text-[#A29875] transition-colors duration-300" />
             <span className="font-semibold">Contact</span>
           </Link>
         </li>
       </ul>
     </div>
  

    </div>

  </div>

);
};




export default Navbar
