// import React, { useState, useEffect, useRef } from 'react';
// import NavLinks from './NavLink';

// const NavBar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const menuRef = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => setIsScrolled(window.scrollY > 10);
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (menuRef.current && !menuRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     return (
//         <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
//             <div className="flex justify-between items-center py-4 px-6">
//                 {/* Logo */}
              
//                 {/* Desktop Navigation */}
//                 <div className="hidden lg:flex space-x-8">
//                     <NavLinks />
//                 </div>

//                 {/* Mobile Menu Button */}
                
//             </div>

//             {/* Mobile Navigation */}
//             <div 
//                 ref={menuRef} 
//                 className={`fixed left-0 top-16 w-full bg-white shadow-xl p-6 transition-transform transform lg:hidden ${isOpen ? 'block' : 'hidden'}`}
//             >
//                 <div className="flex flex-col space-y-6">
//                     <NavLinks />
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;
import React, { useState, useEffect } from "react";
import NavLinks from "./NavLink";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
            <div className="flex justify-between items-center py-4 px-6">
                <NavLinks />
            </div>
        </nav>
    );
};

export default NavBar;

