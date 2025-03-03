"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "Home", path: "home" },
  { title: "Achievements", path: "achievements" },
  { title: "About", path: "about" },
  { title: "Projects", path: "projects" },
  { title: "Contact", path: "contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border border-[#33353F]">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:py-4">
        <a href="/" className="text-2xl md:text-5xl text-white font-semibold">
          LOGO
        </a>
        {/* Bouton Mobile */}
        <div className="md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-purple hover:border-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        {/* Menu Desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  smooth={true}
                  duration={500}
                  className="text-white cursor-pointer hover:text-purple-400 transition"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Menu Mobile */}
      {navbarOpen && (
        <div className="md:hidden bg-[#121212] border-t border-[#33353F]">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  smooth={true}
                  duration={500}
                  onClick={() => setNavbarOpen(false)}
                  className="text-white text-lg cursor-pointer hover:text-gray-400 transition"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
