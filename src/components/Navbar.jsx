import React, { useState } from 'react';
import logo from '../assets/Logomark.png'; // Update path if needed
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaBars, FaSearch, FaTimes, FaRegFileAlt, FaBolt, FaVideo } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const toggleSearchBox = () => setSearchBoxVisible(!searchBoxVisible);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle search submit logic here
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full text-white border-b border-gray-700 bg-transparent">
      <div className="flex items-center justify-between px-4 py-3 md:px-20 md:py-5">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Company Logo" className="h-8" />
          <h1 className="text-md md:text-xl font-bold">Catalog</h1>
        </div>

        {/* Search Icon (for both mobile and desktop) */}
        <div className="flex items-center ml-auto md:hidden">
          <FaSearch className="text-xl cursor-pointer" onClick={toggleSearchBox} />
        </div>

        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden flex items-center">
          <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Navigation Menu for Desktop */}
        <nav className={`hidden md:flex items-center flex-grow justify-center space-x-6 gap-6 ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex items-center space-x-6 gap-6 font-semibold text-lg md:text-xl">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Case Studies</a></li>
            <li className="relative">
              <a
                href="#"
                onClick={toggleDropdown}
                className="hover:underline flex items-center space-x-1"
              >
                Resources <RiArrowDropDownLine className='text-4xl' />
              </a>
              {dropdownVisible && (
                <div className="absolute bg-white text-black rounded-lg shadow-lg mt-2 py-4 w-80">
                  <div className="flex items-start p-3 border-b border-gray-200">
                    <FaRegFileAlt className="text-blue-600 text-2xl" />
                    <div className="ml-3">
                      <a href="#" className="font-semibold text-lg">Blog</a>
                      <p className="text-sm">The latest industry news, updates, and info.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 border-b border-gray-200">
                    <FaBolt className="text-blue-600 text-2xl" />
                    <div className="ml-3">
                      <a href="#" className="font-semibold text-lg">Customer stories</a>
                      <p className="text-sm">Learn how our customers are making big changes.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3">
                    <FaVideo className="text-blue-600 text-2xl" />
                    <div className="ml-3">
                      <a href="#" className="font-semibold text-lg">Video tutorials</a>
                      <p className="text-sm">Get up and running on new features and techniques.</p>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Desktop Search Icon (to align with other elements) */}
        <div className="hidden md:flex items-center ml-6">
          <FaSearch className="text-xl cursor-pointer" onClick={toggleSearchBox} />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center text-white border-t border-gray-700 bg-blue-800">
          <ul className="space-y-4 py-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Case Studies</a></li>
            <li className="relative">
              <a
                href="#"
                onClick={toggleDropdown}
                className="hover:underline flex items-center space-x-1"
              >
                Resources <RiArrowDropDownLine className='text-xl' />
              </a>
              {dropdownVisible && (
                <div className="absolute bg-white text-black rounded-lg shadow-lg mt-2 py-4 w-80">
                  <div className="flex items-start p-3 border-b border-gray-200">
                    <FaRegFileAlt className="text-blue-600 text-2xl" />
                    <div className="ml-3">
                      <a href="#" className="font-semibold text-lg">Blog</a>
                      <p className="text-sm">The latest industry news, updates, and info.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 border-b border-gray-200">
                    <FaBolt className="text-blue-600 text-2xl" />
                    <div className="ml-3">
                      <a href="#" className="font-semibold text-lg">Customer stories</a>
                      <p className="text-sm">Learn how our customers are making big changes.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3">
                    <FaVideo className="text-blue-600 text-2xl" />
                    <div className="ml-3">
                      <a href="#" className="font-semibold text-lg">Video tutorials</a>
                      <p className="text-sm">Get up and running on new features and techniques.</p>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}

      {/* Search Box */}
      {searchBoxVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative w-full max-w-md">
            <span className="absolute top-2 right-2 cursor-pointer" onClick={toggleSearchBox}>
              <FaTimes className="text-black" />
            </span>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button type="submit" className="sr-only">Search</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
